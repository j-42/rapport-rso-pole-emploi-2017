"use strict";!function(e){function t(e,t){"undefined"!=typeof t.scale&&parseInt(t.scale)>100&&this.classList.add("menu-item--logo-bigger")}function i(i){var s=i.data.file,a=this.querySelector(".menu-item--logo-image");if(this.classList.remove("menu-item--logo-fit"),this.classList.remove("menu-item--logo-100prc"),this.classList.remove("menu-item--logo-native"),this.classList.remove("menu-item--logo-legacy"),this.classList.remove("menu-item--logo-fit"),this.classList.remove("menu-item--logo-bigger"),a.style.height="",!s)return void(this.style.display="none");if("string"==typeof s.url&&(s.url=s.url.trim()),s.url?this.querySelector(".menu-item--logo").href=s.url:this.querySelector(".menu-item--logo").removeAttribute("href"),s.image&&(a.src=e.Utils.resolveVariable(s.image)),2!==e.Main.startupManager.get("reader.configurationVersion"))this.classList.add("menu-item--logo-legacy"),s.scale===!1?this.classList.add("menu-item--logo-fit"):this.onTemplateInserted=t.bind(this,a,s);else{var o=s.scale;"fit"===o?this.classList.add("menu-item--logo-fit"):"native"===o?this.classList.add("menu-item--logo-native"):o?a.style.height=o:this.classList.add("menu-item--logo-100prc"),e.Main.startupManager.has("ui.theme.mode","v4")&&this.classList.add("menu-item--logo-wrapper-v4"),this.onTemplateInserted=t.bind(this,a,s)}i=e.Main.menuService.get(i.name),i.onload&&i.onload(this),i.onclick&&this.addEventListener(e.Param.eventClick,i.onclick)}e.Class.TemplateManager.addComponent("menuItem-logo",function(e){var t=i.bind(this);t(e),NIApi.register("styleSheet.logoGetObject",function(){return e.data.file}),NIApi.register("styleSheet.logoUpdate",function(i){e.data.file=i,t(e)})})}(webpublicationNamespace);