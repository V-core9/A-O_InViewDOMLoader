let Application_Driver={config:{devMode:{status:!1,return(){return this.status},make(a=!1){this.status=a}},location:{local:"http://localhost:8080",tunnel_url:"https://e681c0920364.ngrok.io",git_docs_url:"https://myusernameismyusername.github.io/A-O_InViewDOMLoader/",current_origin:null},elems:{ao_loader:"",pageScripts:"",pageStyles:""}},func:{loadError(a){throw new URIError("The script "+a.target.src+" didn't load correctly.")},loadScript(a,b){var c=document.createElement("script");c.onerror=this.loadError,b&&(c.onload=b),Application_Driver.config.elems.pageScripts.appendChild(c),c.src=a},loadPage(a=null,b){Application_Driver.func.startLoading(),loadScript("/A-O_InViewDOMLoader/pages/"+a+".js",b)},loadStyle(a){var b=!0,c=document.querySelectorAll("link");if(c.forEach(c=>{console.log(c.getAttribute("href")),a==c.getAttribute("href")&&(console.log("Skipping new style : "+a+" ; Already present!"),b=!1)}),b){console.log("Adding new style :"+a);var d=document.createElement("link");d.setAttribute("rel","stylesheet"),d.setAttribute("type","text/css"),d.setAttribute("href",a),Application_Driver.config.elems.pageStyles.appendChild(d)}},finishLoading(){console.info("finishLoading()");setTimeout(()=>{document.body.classList.add("loaded"),clearTimeout(this)},1e3)},startLoading(){console.info("startLoading()"),document.getElementById("app")&&document.getElementById("app").remove(),document.body.classList.remove("loaded")},originCheck(){switch(console.info("ORIGIN IS: "+window.location.origin),window.location.origin){case Application_Driver.config.location.local:console.info("Application_Driver.config.location.local << CONFIRMED ORIGIN TO :: "+Application_Driver.config.location.local),Application_Driver.config.location.current_origin=Application_Driver.config.location.local;break;case Application_Driver.config.location.git_docs_url:console.info("Application_Driver.config.location.git_docs_url << CONFIRMED ORIGIN TO :: "+Application_Driver.config.location.git_docs_url),Application_Driver.config.location.current_origin=Application_Driver.config.location.git_docs_url;break;case Application_Driver.config.location.tunnel_url:console.info("Application_Driver.config.location.tunnel_url << CONFIRMED ORIGIN TO :: "+Application_Driver.config.location.tunnel_url),Application_Driver.config.location.current_origin=Application_Driver.config.location.tunnel_url;break;default:return console.warn("Origin not cool. Mkey? "),window.location.replace(true_origin),!1;break;return!0;}},loadReq(){this.loadScript("/A-O_InViewDOMLoader/modules/ao_router/ao_router.js",function(){findCurrentRoute()}),this.loadStyle("/A-O_InViewDOMLoader/assets/css/modal.css"),this.loadStyle("/A-O_InViewDOMLoader/assets/css/demo.css"),this.loadScript("/A-O_InViewDOMLoader/ao_modules/ao_ssosl.js"),this.loadScript("/A-O_InViewDOMLoader/ao_modules/ao_modal.js",function(){})}},onload(){console.log("[ ApplicationLocations.onload() ]"),this.func.originCheck(),this.func.loadReq()},init(){console.log("[ ApplicationLocations.init() ]"),this.config.elems.ao_loader=document.getElementById("loader"),this.config.elems.pageScripts=document.getElementById("app_scripts_container"),this.config.elems.pageStyles=document.getElementById("app_styles_container"),window.onload=this.onload(),window.addEventListener("onpageload",()=>{console.log("EventListener got:[> onpageload <]"),Application_Driver.func.finishLoading()})},devMode(a=null){if(null!=a)this.config.devMode="base"!=a&&"deep"!=a||a;else return this.config.devMode=!0,!0;return!1}},app=Application_Driver,loadPage=app.func.loadPage,loadScript=app.func.loadScript,loadStyle=app.func.loadStyle;app.init();