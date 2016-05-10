<?php
/**
 * @author Frank Karlitschek <frank@owncloud.org>
 * @author Joas Schilling <nickvergessen@owncloud.com>
 *
 * @copyright Copyright (c) 2016, ownCloud, Inc.
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

$app = new \OCA\Activity\AppInfo\Application();
$c = $app->getContainer();
$app->registerNavigationEntry();

// register the hooks for filesystem operations. All other events from other apps has to be send via the public api
\OCA\Activity\FilesHooksStatic::register();
\OCP\Util::connectHook('OC_User', 'post_deleteUser', 'OCA\Activity\Hooks', 'deleteUser');
\OCA\Activity\Consumer::register($c->getServer()->getActivityManager(), $c);

// Personal settings for notifications and emails
\OCP\App::registerPersonal($c->getAppName(), 'personal');
