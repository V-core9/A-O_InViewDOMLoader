let Application_Driver={config:{devMode:{status:!1,return(){return this.status},make(a=!1){this.status=a}},location:{local:"http://localhost:8080",tunnel_url:"https://8aed38ec7eaa.ngrok.io",git_docs_url:"https://myusernameismyusername.github.io/A-O_InViewDOMLoader/",current_origin:null},elems:{ao_loader:"",pageScripts:"",pageStyles:""}},func:{loadError(a){throw new URIError("The script "+a.target.src+" didn't load correctly.")},loadScript(a,b){var c=document.createElement("script");c.onerror=this.loadError,b&&(c.onload=b),Application_Driver.config.elems.pageScripts.appendChild(c),c.src=a},loadStyle(a){var b=document.createElement("link");b.setAttribute("rel","stylesheet"),b.setAttribute("type","text/css"),b.setAttribute("href",a),Application_Driver.config.elems.pageStyles.appendChild(b)},finishLoading(){document.body.classList.add("loaded")},startLoading(){document.body.classList.remove("loaded")},originCheck(){switch(console.info("ORIGIN IS: "+window.location.origin),window.location.origin){case Application_Driver.config.location.local:console.info("Application_Driver.config.location.local << FOUND"),Application_Driver.config.location.current_origin=Application_Driver.config.location.local;break;case Application_Driver.config.location.git_docs_url:console.info("Application_Driver.config.location.git_docs_url << FOUND"),Application_Driver.config.location.current_origin=Application_Driver.config.location.git_docs_url;break;case Application_Driver.config.location.tunnel_url:console.info("Application_Driver.config.location.tunnel_url << FOUND"),Application_Driver.config.location.current_origin=Application_Driver.config.location.tunnel_url;break;default:return console.warn("Origin not cool. Mkey? "),window.location.replace(true_origin),!1;break;return!0;}},loadReq(){this.loadScript("/ao_modules/ao_router.js",function(){findCurrentRoute(),Application_Driver.func.finishLoading()}),this.loadStyle("/assets/css/app.css"),this.loadStyle("/assets/css/modal.css"),this.loadStyle("/assets/css/demo.css"),this.loadScript("/ao_modules/ao_ssosl.js"),this.loadScript("/ao_modules/ao_modal.js",function(){})}},onload(){console.log("[ ApplicationLocations.onload() ]"),this.func.originCheck(),this.func.loadReq()},init(){console.log("[ ApplicationLocations.init() ]"),this.config.elems.ao_loader=document.getElementById("loader"),this.config.elems.pageScripts=document.getElementById("app_scripts_container"),this.config.elems.pageStyles=document.getElementById("app_styles_container"),window.onload=this.onload()},devMode(a=null){if(null!=a)this.config.devMode="base"!=a&&"deep"!=a||a;else return this.config.devMode=!0,!0;return!1}},app=Application_Driver,loadScript=app.func.loadScript,loadStyle=app.func.loadStyle;app.init();