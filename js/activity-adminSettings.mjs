/*! third party licenses: js/vendor.LICENSE.txt */
import{V as n,t as m,b as d}from"./index-c5daae92.mjs";import{S as o,m as s,a as c,A as p,V as u,s as a}from"./settings-store-108917e4.mjs";import{c as g}from"./NcCheckboxRadioSwitch-2b5914b8.mjs";import{n as l}from"./index.es-bbaca1b2.mjs";import"./index-65a5f423.mjs";import"./logger-a53a57b5.mjs";const f={name:"AdminSettings",components:{NcCheckboxRadioSwitch:g,NcSettingsSection:o},computed:{...s({emailEnabled:"emailEnabled"}),settingDescription(){return this.emailEnabled?t("activity","Choose for which activities you want to get an email or push notification."):t("activity","Choose for which activities you want to get a push notification.")}},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings/admin"})},methods:{...c(["setEndpoint","toggleEmailEnabled"])}};var h=function(){var i=this,e=i._self._c;return e("NcSettingsSection",{attrs:{name:i.t("activity","Notification")}},[e("NcCheckboxRadioSwitch",{attrs:{type:"checkbox",checked:i.emailEnabled},on:{"update:checked":function(r){return i.toggleEmailEnabled({emailEnabled:r})}}},[i._v(" "+i._s(i.t("activity","Enable notification emails"))+" ")])],1)},v=[],y=l(f,h,v,!1,null,null,null,null);const E=y.exports,b={name:"DefaultActivitySettings",components:{ActivityGrid:p,NcSettingsSection:o},computed:{...s({emailEnabled:"emailEnabled"})},mounted(){this.setEndpoint({endpoint:"/apps/activity/settings/admin"})},methods:{...c(["setEndpoint","toggleEmailEnabled"])}};var S=function(){var i=this,e=i._self._c;return e("NcSettingsSection",{attrs:{name:i.t("activity","Default settings"),description:i.t("activity","Configure the default notification settings for new accounts.")}},[e("ActivityGrid")],1)},w=[],A=l(b,S,w,!1,null,null,null,null);const N=A.exports;n.prototype.t=m,n.prototype.n=d,n.use(u),new n({el:"#activity-admin-settings",store:a,name:"ActivityPersonalSettings",render:i=>i(E)}),new n({el:"#activity-default-settings",store:a,name:"ActivityDefaultSettings",render:i=>i(N)});
