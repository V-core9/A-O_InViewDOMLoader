var appItems=[{className:"html",done:!1,call(){console.log("htmlFunction();"),document.head.title="Welcome Homepage - Slavko V. [_/^\\_] ",document.head.innerHTML+=`<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/morty.png">`,document.head.innerHTML+=`<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png">`,document.head.innerHTML+=`<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/pickle.gif">`}},{className:"body",done:!1,call(){console.log("bodyFunction();");var a=document.body.innerHTML;document.body.innerHTML=`<div id="app"><div class='section'><div class="half_side"><h1>Look morty!</h1>
                                                  <h2>"Look Who's Purging Now!"</h2>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing. Enim nulla aliquet porttitor lacus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing. Enim nulla aliquet porttitor lacus luctus.</p>
                                                  <button>YEA WEEE</button><button>NOOOOOO</button>
                                                  </div>
                                                  <div class="half_side">
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/morty.png" alt="app_logo" width="660" height="520" />
                                                  </div></div></div>`+a}},{className:"#app",done:!1,call(){console.log("appFunction();"),wnd.dispatchEvent(new Event("onpageload"))}},{className:"h1",done:!1,call(){console.log("titleFunction();"),document.getElementById("app").innerHTML+=`<div class='section'><img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo className-h1" width="360" height="360" />
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/pickle.gif" alt="app_logo" width="360" height="240" />
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo" width="360" height="360" /></div>`,document.getElementById("app").innerHTML+="<h2>Welcome and have fun!</h2>"}},{className:"img",done:!1,call(){console.log("imgFunction();"),document.getElementById("app").innerHTML+=`<img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo className-img" width="360" height="360" style='transform: rotate3d(2, -1, -1, -0.2turn);'/>`,document.getElementById("app").innerHTML+="<h3>Welcome and have fun!</h3>",document.getElementById("app").innerHTML+="<h4>Welcome and have fun!</h4>",document.getElementById("app").innerHTML+="<h5>Welcome and have fun!</h5>"}}];