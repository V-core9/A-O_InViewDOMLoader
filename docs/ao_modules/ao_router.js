var currentLocation=window.location.pathname.replace("A-O_documentation_maker/",""),routes=[{route:"/",routeAliases:["/index","/index.html","/home","/landing","/root_front"],page(){loadScript("/ao_modules/conf.home.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))})}},{route:"/documentation",routeAliases:["/docs","/app_docs"],page(){loadScript("/ao_modules/conf.documentation.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))})}},{route:"/about",routeAliases:["/about_us","/about-us"],page(){loadScript("/ao_modules/conf.about_us.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))})}},{route:"/contact",routeAliases:["/contact_me","/contact-me","/send_msg","/message_me","/message-me","/message","/make_contact","/make-contact","/send_war_pigeon","/send-war-pigeon","/run_boy_run","/run-boy-run"],page(){loadScript("/ao_modules/conf.contact.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))})}}];function show404page(){loadScript("/ao_modules/conf.sys_error_page.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))})}function findCurrentRoute(){const a=new URLSearchParams(window.location.search).get("development");a&&(console.info("|_!+!_ DEV MODE ON >> "+a+"  >>"),loadScript("/ao_modules/ao_egah.js",function(){wnd.dispatchEvent(new Event("ssosl_ready"))}));var b=!1;for(let a=0;a<routes.length;a++)if(currentLocation===routes[a].route&&(routes[a].page(),b=!0),void 0!==routes[a].routeAliases)for(let c=0;c<routes[a].routeAliases.length;c++)currentLocation===routes[a].routeAliases[c]&&(routes[a].page(),b=!0);return b||show404page(),b}