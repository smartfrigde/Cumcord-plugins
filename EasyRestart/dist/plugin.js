(function(n){"use strict";let t;function c(o,e,a={}){const d=n.webpackModules.findByProps("openModal","updateModal"),i=n.webpackModules.findByDisplayName("Markdown"),l=n.webpackModules.findByDisplayName("ConfirmModal");if(!d||!l||!i)return window.alert(e);const s=()=>{},{onConfirm:f=s,onCancel:u=s,confirmText:w="Okay",cancelText:p="Cancel",danger:m=!1,key:M=void 0}=a;return Array.isArray(e)||(e=[e]),e=e.map(r=>typeof r=="string"?n.webpackModules.findByProps("createElement").createElement(i,null,r):r),d.openModal(r=>n.webpackModules.findByProps("createElement").createElement(l,Object.assign({header:o,red:m,confirmText:w,cancelText:p,onConfirm:f,onCancel:u},r),e),{modalKey:M})}var y={onLoad(){function o(){window.DiscordNative?window.DiscordNative.app.relaunch():window.location.reload()}function e(){try{c("EasyRestart","Are you sure you want to restart Discord? This will completely terminate Discord and start the updater (reload on web).",{onConfirm:()=>o()})}catch(a){console.error(a)}}window.EasyRestart={CreateModal:e},t=async a=>{a.code=="F4"&&(a.preventDefault(),e())},document.addEventListener("keydown",t)},onUnload(){t=async o=>{o.code=="F4"&&(o.preventDefault(),CreateModal())},document.removeEventListener("keydown",t)}};return y})(cumcord.modules);
