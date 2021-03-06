//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

// Usage.
var appItems = [
  {
    className: "html",
    done: false,
    call() {
      console.log("htmlFunction();");
      document.head.title = "Welcome Homepage - Slavko V. [_/^\\_] ";
      document.head.innerHTML += `<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/morty.png">`;
      document.head.innerHTML += `<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png">`;
      document.head.innerHTML += `<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/pickle.gif">`;
    },
  },
  {
    className: "body",
    done: false,
    call() {
      console.log("bodyFunction();");
      var helper = document.body.innerHTML;
      document.body.innerHTML =
        `<div id="app"><div class='section'><div class="half_side"><h1>Look morty!</h1>
                                                  <h2>"Look Who's Purging Now!"</h2>
                                                  <p> https://698b218380af.ngrok.io  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing. Enim nulla aliquet porttitor lacus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing. Enim nulla aliquet porttitor lacus luctus.</p>
                                                  <button>YEA WEEE</button><button>NOOOOOO</button>
                                                  </div>
                                                  <div class="half_side">
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/morty.png" alt="app_logo" width="660" height="520" />
                                                  </div></div></div>` + helper;
    },
  },
  {
    className: "#app",
    done: false,
    call() {
      console.log("appFunction();");
      wnd.dispatchEvent(new Event("onpageload"));
    },
  },
  {
    className: "h1",
    done: false,
    call() {
      console.log("titleFunction();");
      document.getElementById(
        "app"
      ).innerHTML += `<div class='section'><img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo className-h1" width="360" height="360" />
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/pickle.gif" alt="app_logo" width="360" height="240" />
                                                  <img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo" width="360" height="360" /></div>`;
      document.getElementById("app").innerHTML +=
        "<h2>Welcome and have fun!</h2>";
    },
  },
  {
    className: "img",
    done: false,
    call() {
      console.log("imgFunction();");
      document.getElementById(
        "app"
      ).innerHTML += `<img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_InViewDOMLoader/prime_build/docs/assets/img/logo.png" alt="app_logo className-img" width="360" height="360" style='transform: rotate3d(2, -1, -1, -0.2turn);box-shadow: 0 0 50px red;'/>`;
      document.getElementById("app").innerHTML +=
        "<h3>Welcome and have fun!</h3>";
      document.getElementById("app").innerHTML +=
        "<h4>Welcome and have fun!</h4>";
      document.getElementById("app").innerHTML +=
        "<h5>Welcome and have fun!</h5>";
    },
  },
];

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
