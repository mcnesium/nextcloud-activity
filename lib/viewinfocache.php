<?php
/**
 * @author Joas Schilling <nickvergessen@owncloud.com>
 *
 * @copyright Copyright (c) 2015, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 *
 */

namespace OCA\Activity;


use OC\Files\View;

class ViewInfoCache {

	/** @var array */
	protected $cachePath;
	/** @var array */
	protected $cacheId;

	/** @var \OC\Files\View */
	protected $view;

	/**
	 * @param View $view
	 */
	public function __construct(View $view) {
		$this->view = $view;
	}

	/**
	 * @param string $user
	 * @param string $path
	 * @return array
	 */
	public function getInfoByPath($user, $path) {
		if (isset($this->cachePath[$user][$path])) {
			return $this->cachePath[$user][$path];
		}

		return $this->findInfoByPath($user, $path);
	}

	/**
	 * @param string $user
	 * @param int $fileId
	 * @param string $path
	 * @return array
	 */
	public function getInfoById($user, $fileId, $path) {
		if (isset($this->cacheId[$user][$fileId])) {
			$cache = $this->cacheId[$user][$fileId];
			if ($cache['path'] === null) {
				$cache['path'] = $path;
			}
			return $cache;
		}

		return $this->findInfoById($user, $fileId, $path);
	}

	/**
	 * @param string $user
	 * @param string $path
	 * @return array
	 */
	protected function findInfoByPath($user, $path) {
		$this->view->chroot('/' . $user . '/files');

		$this->cachePath[$user][$path] = [
			'path'		=> $path,
			'exists'	=> $this->view->file_exists($path),
			'is_dir'	=> $this->view->is_dir($path),
			'view'		=> '',
		];

		return $this->cachePath[$user][$path];
	}

	/**
	 * @param string $user
	 * @param int $fileId
	 * @param string $filePath
	 * @return array
	 */
	protected function findInfoById($user, $fileId, $filePath) {
		$this->view->chroot('/' . $user . '/files');
		$path = $this->view->getPath($fileId);

		$cache = [
			'path'		=> $filePath,
			'exists'	=> false,
			'is_dir'	=> false,
			'view'		=> '',
		];

		if ($path !== null) {
			$cache['path'] = $path;
			$cache['is_dir'] = $this->view->is_dir($path);
			$cache['exists'] = true;
		} else {
			// The file was not found in the normal view, maybe it is in
			// the trashbin?
			$this->view->chroot('/' . $user . '/files_trashbin');
			$path = $this->view->getPath($fileId);

			if ($path !== null) {
				$cache = [
					'path'		=> substr($path, strlen('/files')),
					'exists'	=> true,
					'is_dir'	=> $this->view->is_dir($path),
					'view'		=> 'trashbin',
				];
			}
		}

		$this->cacheId[$user][$fileId] = $cache;
		if ($path !== null) {
			$this->cacheId[$user][$fileId]['path'] = null;
		}

		return $cache;
	}
}
