"use strict";!function(t){t.Class.TemplateManager.addComponent("menuItem-custom",function(e){var a=new DOMParser,n=a.parseFromString(e.data.xmlString,"application/xhtml+xml");void 0===n.documentElement.innerHTML&&(e.data.xmlString=e.data.xmlString.replace("<element","<div"),e.data.xmlString=e.data.xmlString.replace("</element>","</div>"),n=a.parseFromString(e.data.xmlString,"application/xhtml+xml"));var i=document.createElement("div");e.data.style&&(i.style.cssText+=";"+e.data.style),i.classList.add("menu-item--custom-contents"),i.innerHTML=t.Utils.resolveVariable(n.documentElement.innerHTML),this.appendChild(i),t.Param.isDesktop&&this.hasAttribute("data-tooltip")===!0&&t.Main.tooltipManager.register(this)})}(webpublicationNamespace);