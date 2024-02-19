// Function to load the header
function loadHeader() {
    const headerContainer = document.getElementById('header');
    const headerContent = `
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script
        type="6c8630b6390835d4bd25e2e7-text/javascript">if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script>
    <script
        type="6c8630b6390835d4bd25e2e7-text/javascript">class RocketLazyLoadScripts{constructor(){this.v="1.2.4",this.triggerEvents=["keydown","mousedown","mousemove","touchmove","touchstart","touchend","wheel"],this.userEventHandler=this._triggerListener.bind(this),this.touchStartHandler=this._onTouchStart.bind(this),this.touchMoveHandler=this._onTouchMove.bind(this),this.touchEndHandler=this._onTouchEnd.bind(this),this.clickHandler=this._onClick.bind(this),this.interceptedClicks=[],window.addEventListener("pageshow",t=>{this.persisted=t.persisted}),window.addEventListener("DOMContentLoaded",()=>{this._preconnect3rdParties()}),this.delayedScripts={normal:[],async:[],defer:[]},this.trash=[],this.allJQueries=[]}_addUserInteractionListener(t){if(document.hidden){t._triggerListener();return}this.triggerEvents.forEach(e=>window.addEventListener(e,t.userEventHandler,{passive:!0})),window.addEventListener("touchstart",t.touchStartHandler,{passive:!0}),window.addEventListener("mousedown",t.touchStartHandler),document.addEventListener("visibilitychange",t.userEventHandler)}_removeUserInteractionListener(){this.triggerEvents.forEach(t=>window.removeEventListener(t,this.userEventHandler,{passive:!0})),document.removeEventListener("visibilitychange",this.userEventHandler)}_onTouchStart(t){"HTML"!==t.target.tagName&&(window.addEventListener("touchend",this.touchEndHandler),window.addEventListener("mouseup",this.touchEndHandler),window.addEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.addEventListener("mousemove",this.touchMoveHandler),t.target.addEventListener("click",this.clickHandler),this._renameDOMAttribute(t.target,"onclick","rocket-onclick"),this._pendingClickStarted())}_onTouchMove(t){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler),t.target.removeEventListener("click",this.clickHandler),this._renameDOMAttribute(t.target,"rocket-onclick","onclick"),this._pendingClickFinished()}_onTouchEnd(){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler)}_onClick(t){t.target.removeEventListener("click",this.clickHandler),this._renameDOMAttribute(t.target,"rocket-onclick","onclick"),this.interceptedClicks.push(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this._pendingClickFinished()}_replayClicks(){window.removeEventListener("touchstart",this.touchStartHandler,{passive:!0}),window.removeEventListener("mousedown",this.touchStartHandler),this.interceptedClicks.forEach(t=>{t.target.dispatchEvent(new MouseEvent("click",{view:t.view,bubbles:!0,cancelable:!0}))})}_waitForPendingClicks(){return new Promise(t=>{this._isClickPending?this._pendingClickFinished=t:t()})}_pendingClickStarted(){this._isClickPending=!0}_pendingClickFinished(){this._isClickPending=!1}_renameDOMAttribute(t,e,r){t.hasAttribute&&t.hasAttribute(e)&&(event.target.setAttribute(r,event.target.getAttribute(e)),event.target.removeAttribute(e))}_triggerListener(){this._removeUserInteractionListener(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this._loadEverythingNow.bind(this)):this._loadEverythingNow()}_preconnect3rdParties(){let t=[];document.querySelectorAll("script[type=rocketlazyloadscript][data-rocket-src]").forEach(e=>{let r=e.getAttribute("data-rocket-src");if(r&&0!==r.indexOf("data:")){0===r.indexOf("//")&&(r=location.protocol+r);try{let i=new URL(r).origin;i!==location.origin&&t.push({src:i,crossOrigin:e.crossOrigin||"module"===e.getAttribute("data-rocket-type")})}catch(n){}}}),t=[...new Map(t.map(t=>[JSON.stringify(t),t])).values()],this._batchInjectResourceHints(t,"preconnect")}async _loadEverythingNow(){this.lastBreath=Date.now(),this._delayEventListeners(),this._delayJQueryReady(this),this._handleDocumentWrite(),this._registerAllDelayedScripts(),this._preloadAllScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async);try{await this._triggerDOMContentLoaded(),await this._pendingWebpackRequests(this),await this._triggerWindowLoad()}catch(t){console.error(t)}window.dispatchEvent(new Event("rocket-allScriptsLoaded")),this._waitForPendingClicks().then(()=>{this._replayClicks()}),this._emptyTrash()}_registerAllDelayedScripts(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach(t=>{t.hasAttribute("data-rocket-src")?t.hasAttribute("async")&&!1!==t.async?this.delayedScripts.async.push(t):t.hasAttribute("defer")&&!1!==t.defer||"module"===t.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(t):this.delayedScripts.normal.push(t):this.delayedScripts.normal.push(t)})}async _transformScript(t){if(await this._littleBreath(),!0===t.noModule&&"noModule"in HTMLScriptElement.prototype){t.setAttribute("data-rocket-status","skipped");return}return new Promise(navigator.userAgent.indexOf("Firefox/")>0||""===navigator.vendor?e=>{let r=document.createElement("script");[...t.attributes].forEach(t=>{let e=t.nodeName;"type"!==e&&("data-rocket-type"===e&&(e="type"),"data-rocket-src"===e&&(e="src"),r.setAttribute(e,t.nodeValue))}),t.text&&(r.text=t.text),r.hasAttribute("src")?(r.addEventListener("load",e),r.addEventListener("error",e)):(r.text=t.text,e());try{t.parentNode.replaceChild(r,t)}catch(i){e()}}:e=>{function r(){t.setAttribute("data-rocket-status","failed"),e()}try{let i=t.getAttribute("data-rocket-type"),n=t.getAttribute("data-rocket-src");i?(t.type=i,t.removeAttribute("data-rocket-type")):t.removeAttribute("type"),t.addEventListener("load",function r(){t.setAttribute("data-rocket-status","executed"),e()}),t.addEventListener("error",r),n?(t.removeAttribute("data-rocket-src"),t.src=n):t.src="data:text/javascript;base64,"+window.btoa(unescape(encodeURIComponent(t.text)))}catch(s){r()}})}async _loadScriptsFromList(t){let e=t.shift();return e&&e.isConnected?(await this._transformScript(e),this._loadScriptsFromList(t)):Promise.resolve()}_preloadAllScripts(){this._batchInjectResourceHints([...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async],"preload")}_batchInjectResourceHints(t,e){var r=document.createDocumentFragment();t.forEach(t=>{let i=t.getAttribute&&t.getAttribute("data-rocket-src")||t.src;if(i){let n=document.createElement("link");n.href=i,n.rel=e,"preconnect"!==e&&(n.as="script"),t.getAttribute&&"module"===t.getAttribute("data-rocket-type")&&(n.crossOrigin=!0),t.crossOrigin&&(n.crossOrigin=t.crossOrigin),t.integrity&&(n.integrity=t.integrity),r.appendChild(n),this.trash.push(n)}}),document.head.appendChild(r)}_delayEventListeners(){let t={};function e(e,r){!function e(r){!t[r]&&(t[r]={originalFunctions:{add:r.addEventListener,remove:r.removeEventListener},eventsToRewrite:[]},r.addEventListener=function(){arguments[0]=i(arguments[0]),t[r].originalFunctions.add.apply(r,arguments)},r.removeEventListener=function(){arguments[0]=i(arguments[0]),t[r].originalFunctions.remove.apply(r,arguments)});function i(e){return t[r].eventsToRewrite.indexOf(e)>=0?"rocket-"+e:e}}(e),t[e].eventsToRewrite.push(r)}function r(t,e){let r=t[e];Object.defineProperty(t,e,{get:()=>r||function(){},set(i){t["rocket"+e]=r=i}})}e(document,"DOMContentLoaded"),e(window,"DOMContentLoaded"),e(window,"load"),e(window,"pageshow"),e(document,"readystatechange"),r(document,"onreadystatechange"),r(window,"onload"),r(window,"onpageshow")}_delayJQueryReady(t){let e;function r(t){return t.split(" ").map(t=>"load"===t||0===t.indexOf("load.")?"rocket-jquery-load":t).join(" ")}function i(i){if(i&&i.fn&&!t.allJQueries.includes(i)){i.fn.ready=i.fn.init.prototype.ready=function(e){return t.domReadyFired?e.bind(document)(i):document.addEventListener("rocket-DOMContentLoaded",()=>e.bind(document)(i)),i([])};let n=i.fn.on;i.fn.on=i.fn.init.prototype.on=function(){return this[0]===window&&("string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=r(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach(t=>{let e=arguments[0][t];delete arguments[0][t],arguments[0][r(t)]=e})),n.apply(this,arguments),this},t.allJQueries.push(i)}e=i}i(window.jQuery),Object.defineProperty(window,"jQuery",{get:()=>e,set(t){i(t)}})}async _pendingWebpackRequests(t){let e=document.querySelector("script[data-webpack]");async function r(){return new Promise(t=>{e.addEventListener("load",t),e.addEventListener("error",t)})}e&&(await r(),await t._requestAnimFrame(),await t._pendingWebpackRequests(t))}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._littleBreath(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._littleBreath(),window.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._littleBreath(),document.dispatchEvent(new Event("rocket-readystatechange")),await this._littleBreath(),document.rocketonreadystatechange&&document.rocketonreadystatechange()}async _triggerWindowLoad(){await this._littleBreath(),window.dispatchEvent(new Event("rocket-load")),await this._littleBreath(),window.rocketonload&&window.rocketonload(),await this._littleBreath(),this.allJQueries.forEach(t=>t(window).trigger("rocket-jquery-load")),await this._littleBreath();let t=new Event("rocket-pageshow");t.persisted=this.persisted,window.dispatchEvent(t),await this._littleBreath(),window.rocketonpageshow&&window.rocketonpageshow({persisted:this.persisted})}_handleDocumentWrite(){let t=new Map;document.write=document.writeln=function(e){let r=document.currentScript;r||console.error("WPRocket unable to document.write this: "+e);let i=document.createRange(),n=r.parentElement,s=t.get(r);void 0===s&&(s=r.nextSibling,t.set(r,s));let a=document.createDocumentFragment();i.setStart(a,0),a.appendChild(i.createContextualFragment(e)),n.insertBefore(a,s)}}async _littleBreath(){Date.now()-this.lastBreath>45&&(await this._requestAnimFrame(),this.lastBreath=Date.now())}async _requestAnimFrame(){return document.hidden?new Promise(t=>setTimeout(t)):new Promise(t=>requestAnimationFrame(t))}_emptyTrash(){this.trash.forEach(t=>t.remove())}static run(){let t=new RocketLazyLoadScripts;t._addUserInteractionListener(t)}}RocketLazyLoadScripts.run();</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#262C4B">
    <meta name="p:domain_verify" content="9ffd69b55e2ed22121c06014e12197aa" />
    <meta name="msvalidate.01" content="D21A5586D02906A71FDACD6483270C80" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap&subset=latin-ext"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" rel="preload">

    <link rel="shortcut icon" href="/wp-content/themes/ministrap-child/assets/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/wp-content/themes/ministrap-child/assets/images/favicon.ico" type="image/x-icon">
    <link rel="alternate" hreflang="en" href="https://casino.online/" />
    <link rel="alternate" hreflang="de" href="https://casino.online/de/" />
    <link rel="alternate" hreflang="ru" href="https://casino.online/ru/" />
    <link rel="alternate" hreflang="ja" href="https://casino.online/ja/" />
    <link rel="alternate" hreflang="bg" href="https://casino.online/bg/" />
    <link rel="alternate" hreflang="it" href="https://casino.online/it/" />
    <link rel="alternate" hreflang="pt-br" href="https://casino.online/br/" />
    <link rel="alternate" hreflang="es" href="https://casino.online/es/" />
    <link rel="stylesheet" href="./css/style.css">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <title>Online Casino Comparison - Guide to the Top Casinos 2024</title>
    <style id="rocket-critical-css">
        .js-scroll-top {
            display: none;
            bottom: 30px;
            right: 30px;
            position: fixed;
            z-index: 10;
            background: #000;
            width: 50px;
            height: 50px;
            font-size: 25px;
            border-radius: 50%;
            padding: 0;
            text-align: center
        }

        .js-scroll-top .fa {
            padding: 0;
            line-height: 45px
        }

        html {
            box-sizing: border-box;
            -ms-overflow-style: scrollbar
        }

        *,
        *::before,
        *::after {
            box-sizing: inherit
        }

        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto
        }

        @media (min-width:576px) {
            .container {
                max-width: 540px
            }
        }

        @media (min-width:768px) {
            .container {
                max-width: 720px
            }
        }

        @media (min-width:992px) {
            .container {
                max-width: 930px
            }
        }

        @media (min-width:1200px) {
            .container {
                max-width: 1140px;
                max-width: 1140px
            }
        }

        .container-fluid {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto
        }

        .row {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px
        }

        .col-6,
        .col-md-4,
        .col-md-12,
        .col-lg-8,
        .col-lg-10 {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px
        }

        .col-6 {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%
        }

        @media (min-width:768px) {
            .col-md-4 {
                -ms-flex: 0 0 33.333333%;
                flex: 0 0 33.333333%;
                max-width: 33.333333%
            }

            .col-md-12 {
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%
            }
        }

        @media (min-width:992px) {
            .col-lg-8 {
                -ms-flex: 0 0 66.666667%;
                flex: 0 0 66.666667%;
                max-width: 66.666667%
            }

            .col-lg-10 {
                -ms-flex: 0 0 83.333333%;
                flex: 0 0 83.333333%;
                max-width: 83.333333%
            }
        }

        @media (min-width:992px) {
            .d-lg-none {
                display: none !important
            }
        }

        .flex-row {
            -ms-flex-direction: row !important;
            flex-direction: row !important
        }

        .flex-column {
            -ms-flex-direction: column !important;
            flex-direction: column !important
        }

        .justify-content-center {
            -ms-flex-pack: center !important;
            justify-content: center !important
        }

        .align-items-end {
            -ms-flex-align: end !important;
            align-items: flex-end !important
        }

        .m-0 {
            margin: 0 !important
        }

        .mb-0 {
            margin-bottom: 0 !important
        }

        .mr-2 {
            margin-right: .5rem !important
        }

        .mb-4 {
            margin-bottom: 1.5rem !important
        }

        .my-5 {
            margin-top: 3rem !important
        }

        .my-5 {
            margin-bottom: 3rem !important
        }

        .p-0 {
            padding: 0 !important
        }

        .pr-1 {
            padding-right: .25rem !important
        }

        .pb-2 {
            padding-bottom: .5rem !important
        }

        .pl-2 {
            padding-left: .5rem !important
        }

        .mx-auto {
            margin-right: auto !important
        }

        .mx-auto {
            margin-left: auto !important
        }

        :root {
            --primary: #262C4B;
            --primary-dark: #123c24;
            --secondary: #3C9542;
            --text-color: #fff;
            --pagination-bg: #D6D6D6
        }

        @media (max-width:767px) {
            .btn {
                width: 100%
            }
        }

        @font-face {
            font-family: casino-online;
            src: url(https://casino.online/wp-content/themes/ministrap-child/assets/fonts/casino-online/casino-online-14.eot?746761832);
            src: url(https://casino.online/wp-content/themes/ministrap-child/assets/fonts/casino-online/casino-online-14.eot?746761832#iefix) format('embedded-opentype'), url(https://casino.online/wp-content/themes/ministrap-child/assets/fonts/casino-online/casino-online-14.woff?746761832) format('woff'), url(https://casino.online/wp-content/themes/ministrap-child/assets/fonts/casino-online/casino-online-14.ttf?746761832) format('truetype'), url(https://casino.online/wp-content/themes/ministrap-child/assets/fonts/casino-online/casino-online-14.svg?746761832#casino-online) format('svg');
            font-weight: 400;
            font-style: normal;
            font-display: swap
        }

        body {
            margin: 0;
            background-color: #f2f2f2;
            color: #868686;
            font-family: roboto, sans-serif;
            text-align: center;
            font-size: 14px;
            font-weight: 300;
            line-height: 22px;
            overflow-x: hidden
        }

        html {
            font-size: 14px
        }

        .container:after {
            content: "";
            clear: both;
            display: table
        }

        h1 {
            text-transform: uppercase;
            font-weight: 300;
            display: inline-block;
            width: 100%;
            line-height: 1.25em;
            font-family: montserrat
        }

        h1 b {
            display: block;
            font-weight: 900
        }

        h1 {
            position: relative;
            padding-bottom: 1.25em;
            margin-bottom: .75em;
            font-weight: 300;
            color: #262c4b;
            margin-top: 2em
        }

        h1 {
            font-size: 2em;
            line-height: 1.35em
        }

        h1:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 100px;
            border-top: 1px solid #3c9542
        }

        a {
            text-decoration: none
        }

        .container>p:last-of-type {
            margin-bottom: 3rem
        }

        .content-section .container p:last-of-type {
            margin-bottom: 1.5rem
        }

        .page-content {
            font-size: 1rem;
            overflow-x: hidden
        }

        .hp-header-logos img {
            max-width: 100%;
            width: auto;
            height: auto
        }

        .home .page-content {
            position: relative;
            top: -60px
        }

        .page-content .content-section a:not(.btn) {
            color: #fff;
            font-weight: 500;
            text-decoration: underline
        }

        .page-content a:not(.btn) {
            color: #3c9542;
            text-decoration: underline
        }

        .content-section {
            color: #fff;
            padding-top: 3.5rem;
            padding-bottom: 2rem;
            margin-top: 2rem;
            background: #f75a05;
            background: -moz-radial-gradient(50% bottom, #F8A53F 0%, #F75A05 50%);
            background: -webkit-radial-gradient(50% bottom, #F8A53F 0%, #F75A05 50%);
            background: radial-gradient(at 50% bottom, #F8A53F 0%, #F75A05 50%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#F8A53F', endColorstr='#F75A05', GradientType=1)
        }

        .page-header.content-section {
            padding-top: 80px;
            padding-bottom: 4em;
            margin-top: 0
        }

        .content-section h1 {
            color: #fff;
            font-weight: 300
        }

        .content-section h1:after {
            border-color: #fff
        }

        @media (max-width:991px) {
            .content-section {
                background: -moz-radial-gradient(50% 150%, #F8A53F 0%, #F75A05 75%);
                background: -webkit-radial-gradient(50% 150%, #F8A53F 0%, #F75A05 75%);
                background: radial-gradient(at 50% 150%, #F8A53F 0%, #F75A05 75%)
            }
        }

        #lz-footer i {
            filter: grayscale(100%);
            opacity: .4
        }

        #lz-footer i.fa-angle-up {
            opacity: 1;
            background: 0 0 !important
        }

        #lz-footer .fa-angle-up:before {
            content: '\e901' !important;
            font-family: casino-online;
            font-style: normal;
            color: #fff
        }

        .box {
            max-width: 648px;
            margin-right: auto;
            margin-left: auto
        }

        .btn.btn-grey.js-disabled-new {
            background: #a3a3a3 !important
        }

        .bonus-filter-boxes .btn.btn-grey.js-disabled-new {
            background-color: #3c9542 !important;
            color: #fff !important
        }

        a.operator-logo.btn-grey.js-disabled-new {
            background: inherit
        }

        .w-100 {
            width: 100%
        }

        .text-center {
            text-align: center !important
        }

        .font-size-1-25 {
            font-size: 1.25rem !important
        }

        ul {
            padding-left: 1em
        }

        ul li {
            list-style-type: none;
            display: flex;
            align-items: center
        }

        ul li:before {
            content: "•";
            font-size: 40px;
            font-weight: 400;
            width: 27px;
            display: block;
            flex: 0 0 27px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            position: relative;
            color: #262c4b;
            left: -5px
        }

        .compliance-text {
            color: #a5a5a5;
            font: normal normal 300 12px/16px Roboto;
            text-align: center
        }

        ul li:before {
            content: "\e900";
            font-family: casino-online;
            font-size: 20px;
            color: #3c9542;
            font-style: normal;
            margin: 0
        }

        .btn-container {
            background-color: #f8f8f8;
            text-align: center;
            padding: 10px;
            border-radius: 0 0 10px 10px
        }

        .btn-container .btn {
            width: 100%
        }

        .btn {
            height: 50px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            background-color: #3c9542;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: .5px;
            text-align: center;
            min-width: 240px;
            position: relative;
            border-radius: 25px;
            padding-left: 15px;
            padding-right: 15px;
            padding-left: 35px;
            padding-right: 35px;
            font: italic normal 600 12px/15px Montserrat
        }

        #bonus-filter .btn {
            height: 40px
        }

        .btn-grey {
            background-color: #f8f8f8;
            color: #4b4f55
        }

        .btn-blue {
            background-color: #262c4b;
            color: #fff
        }

        .hvr-sweep-diagonal {
            overflow: hidden;
            position: relative
        }

        .hvr-sweep-diagonal:before {
            background: #0080f0;
            border-left: 25px solid #0064bb;
            content: "";
            height: 155px;
            left: -75px;
            opacity: .2;
            position: absolute;
            top: -50px;
            -webkit-transform: rotate(35deg);
            -ms-transform: rotate(35deg);
            transform: rotate(35deg);
            width: 50px;
            z-index: 1
        }

        .btn-grey.hvr-sweep-diagonal:before {
            background: #c2c2c2;
            border-left: 25px solid #a2a0a0
        }

        .box {
            background-color: #fff;
            box-shadow: 0 0 18px #0000001f;
            border-radius: 10px
        }

        .small-box .operator-logo img {
            width: 100px;
            height: auto
        }

        .small-box .btn {
            min-width: 100%;
            padding: .5rem
        }

        .bonus-filter-boxes {
            position: relative;
            margin-bottom: 2em;
            color: #868686
        }

        .bonus-search-input-icon {
            position: absolute;
            left: 13px;
            top: 15px
        }

        .bonus-filter-boxes .filter-buttons-input {
            display: none
        }

        .bonus-filter-boxes .logo-container {
            height: 75px;
            background-color: #262c4b;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 20px
        }

        .bonus-filter-rating {
            display: flex;
            flex-direction: column;
            font-style: italic;
            font-weight: 600;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            line-height: 1.5;
            position: absolute;
            left: 2px;
            font-family: montserrat
        }

        .bonus-filter-rating label {
            font-weight: 300;
            font-style: normal;
            font-size: 9px;
            text-indent: 8px
        }

        .bonus-filter-boxes .operator-logo {
            display: inline-flex
        }

        .bonus-filter-boxes .operator-logo img {
            max-width: 100px;
            width: 100px
        }

        .bonus-filter-boxes .btn-container .btn {
            width: 80%;
            min-width: 80%;
            margin: 10px auto
        }

        .bonus-filter-boxes .compliance-text {
            text-align: center;
            text-shadow: none;
            color: #a5a5a5;
            margin-top: 15px;
            font-size: 11px;
            line-height: 1.15
        }

        .bonus-filter-boxes .box {
            padding: 0 12px;
            flex-direction: column;
            display: flex
        }

        .bonus-filter-boxes .box.small-box {
            border-radius: 10px;
            overflow: hidden
        }

        .bonus-filter-boxes .box .row {
            margin-right: -12px;
            margin-left: -12px;
            flex: 1 0 auto
        }

        .sort-buttons-mobile,
        .sort-filter-buttons-mobile {
            display: none
        }

        .close-mobile-fiter-panel,
        .close-mobile-fiter-panel-back {
            display: none
        }

        .registration-bonus-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            line-height: 1.25;
            font-size: 30px;
            font-weight: 700;
            font-style: italic;
            font-family: montserrat;
            color: #3c9542;
            text-transform: uppercase;
            min-height: 130px
        }

        .registration-bonus-container span {
            font-size: 18px;
            height: 22px
        }

        #main-menu-holder {
            position: absolute;
            width: 100%;
            z-index: 3002
        }

        #main-menu-holder .container {
            position: relative
        }

        #main-menu {
            height: 80px;
            margin: 0 auto;
            padding: 0;
            background: #fff;
            list-style-type: none;
            color: #5b5b5b;
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: .42px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            border-radius: 10px
        }

        #main-menu-holder a.site-logo {
            position: absolute;
            left: 0;
            top: 0;
            background-color: #262c4b;
            width: 166px;
            height: 100%;
            display: flex;
            align-items: center;
            border-bottom-left-radius: 10px
        }

        #main-menu-holder .site-logo img {
            width: 135px;
            margin: 0 auto;
            display: block
        }

        #main-menu li:before {
            content: none
        }

        #main-menu a {
            color: #5b5b5b;
            text-decoration: none
        }

        #main-menu>li {
            position: relative
        }

        #main-menu>li>a {
            margin: 0 .75rem
        }

        @media (min-width:992px) {
            #main-menu-holder a.site-logo {
                left: 0
            }

            #main-menu {
                padding-right: 80px;
                padding-right: 130px;
                padding-left: 166px
            }

            #main-menu .menu-item-has-children>ul {
                position: absolute;
                top: 80px;
                background: #fff;
                width: 215px;
                box-shadow: 0 5px 15px #00000040;
                z-index: 9;
                border-top: 3px solid #0266a1;
                border-radius: 0 0 10px 10px
            }

            .menu-item-has-children>ul>li {
                height: 50px;
                text-align: left
            }

            ul#main-menu>li>ul>li>a {
                font-weight: 400;
                text-transform: none;
                color: #535353;
                font-size: 14px
            }

            ul#main-menu>li>ul>li>a>span {
                display: flex;
                height: 40px;
                align-items: center;
                line-height: 1
            }
        }

        #main-menu label.dropdown-shower-label span,
        label.hamburger,
        #burger-shower,
        #main-menu input {
            display: none
        }

        #main-menu li>ul {
            display: none;
            flex-direction: column
        }

        #main-menu li.menu-item-has-children>label:before {
            content: '\e855';
            font-family: casino-online;
            font-size: 9px;
            position: relative;
            bottom: 3px;
            right: 5px;
            right: 1px
        }

        #main-menu>li>a {
            margin: 0 .5rem
        }

        #master-search {
            background-color: #fff;
            position: absolute;
            top: 0;
            right: 0;
            height: 80px;
            min-width: 80px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #ebebeb;
            box-shadow: 0 0 15px #00000040;
            border-bottom-right-radius: 10px
        }

        #master-search input {
            padding: 0 1.5rem;
            border: none;
            display: none
        }

        #master-search #search-button-header {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: initial;
            color: #262c4b;
            font-size: 1.15rem
        }

        a.telegram-logo-menu {
            display: none;
            align-items: center;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            width: auto;
            margin-bottom: 50px
        }

        .telegram-logo-menu img {
            z-index: 1;
            position: relative
        }

        @media (max-width:992px) {
            a.telegram-logo-menu {
                display: inline-flex
            }

            html {
                margin-top: 0 !important
            }

            #main-menu-holder form {
                height: 60px;
                min-width: 60px;
                right: 50px;
                background-color: transparent;
                box-shadow: none;
                border: none;
                width: calc(100vw - 216px) !important;
                display: flex;
                justify-content: flex-end
            }

            #master-search #search-button-header {
                color: #fff;
                width: 45px;
                height: 35px;
                border-right: 1px solid #424762;
                z-index: 9
            }

            #master-search input {
                height: 40px;
                border-radius: 20px;
                position: absolute;
                right: 0;
                width: 100%
            }

            #main-menu-holder {
                background-color: #262c4b;
                z-index: 3002;
                position: fixed;
                top: 0
            }

            #main-menu-holder>.container {
                max-width: 100%;
                padding: 0;
                padding-top: 60px;
                height: 60px
            }

            #main-menu-holder .site-logo img {
                height: 60px
            }

            #main-menu-holder #main-menu {
                padding-top: 60px;
                height: 0;
                overflow: hidden;
                flex-direction: column;
                justify-content: flex-start;
                background-color: #262c4b;
                color: #fff
            }

            #main-menu>li>ul {
                font-size: 11px;
                flex: 0 0 100%;
                padding: 0;
                background-color: #262c4b;
                position: absolute;
                top: 0;
                height: 100vh;
                width: 100%;
                z-index: 8;
                padding-top: 60px;
                display: none
            }

            #main-menu li {
                min-height: 50px;
                flex-wrap: wrap;
                border-bottom: 1px solid rgba(255, 255, 255, .1);
                position: relative
            }

            #main-menu>li:first-of-type {
                border-top: 1px solid rgba(255, 255, 255, .1)
            }

            #main-menu li a {
                min-height: 50px;
                display: flex;
                align-items: center;
                margin: 0;
                color: #fff !important;
                justify-content: center;
                width: 100%;
                border: none
            }

            #main-menu li a .menu-text img {
                filter: brightness(0) invert(1)
            }

            #main-menu li.menu-item-has-children>a {
                text-indent: 50px;
                width: calc(100% - 50px);
                margin: 0
            }

            label.hamburger {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.6rem;
                color: #fff;
                height: 60px;
                width: 50px;
                position: absolute;
                top: 0;
                right: 0
            }

            #main-menu li.menu-item-has-children>label.dropdown-shower-label {
                width: 50px;
                text-align: center;
                height: 50px;
                line-height: 50px
            }

            #main-menu li.menu-item-has-children.dropdown-reworked>label.dropdown-shower-label {
                width: 100%;
                position: absolute;
                text-align: right;
                padding-right: 20px
            }

            #main-menu li.menu-item-has-children>label:before {
                font-family: casino-online;
                content: '\e841';
                position: initial
            }

            #main-menu label.dropdown-shower-label span {
                color: rgba(255, 255, 255, .5);
                font-family: roboto;
                font-weight: 300;
                font-size: 12px;
                padding-left: 15px
            }

            div#main-menu-container {
                height: 60px;
                overflow: hidden;
                background: #262c4b
            }
        }

        @media (max-width:380px) {
            #main-menu-holder a.site-logo {
                width: 130px
            }

            #main-menu-holder .site-logo img {
                width: 110px;
                margin-left: 15px
            }

            #main-menu-holder form {
                width: calc(100vw - 180px) !important
            }
        }

        @media (min-width:992px) {
            #main-menu .menu-item-has-children>ul li a i {
                color: #13236e;
                margin-right: .5rem;
                font-size: 1.2rem;
                line-height: 1rem
            }

            #main-menu .menu-item-has-children>ul li a img.payment-icon {
                width: 18px;
                margin-right: .7rem;
                height: auto;
                top: 0;
                position: relative
            }
        }

        @media (max-width:991px) {
            .dropdown-menu span.menu-text {
                display: flex;
                align-items: center
            }

            .dropdown-menu span.menu-text i {
                margin-right: 5px
            }

            img.payment-icon {
                margin-right: 1rem
            }
        }

        @media (min-width:991px) {
            .page-header .container {
                max-width: 930px
            }
        }

        @media (max-width:767px) {
            #bonus-filter .btn {
                height: 50px
            }

            body {
                line-height: 1.7 !important
            }

            .content-section .container {
                padding: 0
            }
        }

        @media (max-width:991px) {
            ul {
                padding-left: 20px;
                text-align: left
            }

            ul li:before {
                margin: 0 1rem 0 0;
                left: 0;
                width: 20px;
                flex: 0 0 15px
            }

            .page-header.content-section {
                padding-top: 1rem
            }

            .bonus-filter-boxes {
                margin-bottom: 0
            }

            h1 {
                margin-top: 0
            }

            .page-header.content-section {
                padding-bottom: 1em
            }
        }

        @media (max-width:991px) {
            body {
                font-size: 12px;
                line-height: 19px;
                padding-top: 60px
            }

            .btn {
                height: 50px
            }

            .box .btn {
                min-width: auto
            }

            h1 {
                font-size: 1.8em;
                font-weight: 300
            }

            h1 {
                padding-bottom: 0.75em;
                margin-bottom: 0.75em
            }
        }

        [class^=icon-],
        [class*=" icon-"] {
            font-family: casino-online !important;
            speak: never;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .icon-casino-games:before {
            content: "\e849"
        }

        .icon-magnifying-glass:before {
            content: "\e85c"
        }

        .icon-star:before {
            content: "\e864"
        }

        .icon-pikes:before {
            content: "\e865"
        }

        .icon-cards:before {
            content: "\e866"
        }

        .icon-roulette:before {
            content: "\e871"
        }

        .icon-slot-machine:before {
            content: "\e876"
        }

        .icon-sort:before {
            content: "\e877"
        }

        .icon-hamburger:before {
            content: "\e93e"
        }

        .icon-grid-view:before {
            content: "\e944"
        }

        @media (max-width:992px) {
            .sort-filter-buttons-mobile div {
                border: 1px solid #ebebeb;
                height: 50px;
                color: #262c4b;
                font-weight: 400;
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: uppercase
            }

            .close-mobile-fiter-panel {
                font-size: 2em;
                color: #262c4b;
                float: right;
                margin-bottom: 1rem
            }

            .close-mobile-fiter-panel-back:before {
                content: '‹';
                font-size: 2.5em;
                padding-right: .5rem;
                position: relative;
                top: -2px
            }

            .close-mobile-fiter-panel,
            .close-mobile-fiter-panel-back {
                height: 40px;
                display: flex;
                align-items: center
            }

            .close-mobile-fiter-panel-back {
                float: left;
                font-size: 1em;
                text-transform: uppercase
            }

            .sort-buttons-mobile button {
                background-color: #fff;
                border: 1px solid #ebebeb;
                height: 50px;
                position: relative
            }
        }

        .info-box-mascot>div a {
            display: contents
        }

        input[type=text] {
            outline: 0
        }
    </style>
    <meta name="description"
        content="Best Casino Comparison at Casino.online ➤ Thorough Casino Reviews ➤ Honest Opinions ➤ Best Bonus Offers ➤ The Complete Casino Guide" />
    <link rel="canonical" href="https://casino.online/" />
    <script type="application/ld+json" class="yoast-schema-graph">{
	    "@context": "https://schema.org",
	    "@graph": [
	        {
	            "@type": "WebPage",
	            "@id": "https://casino.online/",
	            "url": "https://casino.online/",
	            "name": "Online Casino Comparison - Guide to the Top Casinos [year]",
	            "isPartOf": {
	                "@id": "https://casino.online/#website"
	            },
	            "about": {
	                "@id": "https://casino.online/#organization"
	            },
	            "datePublished": "2020-03-04T11:15:17+00:00",
	            "dateModified": "2024-02-02T10:39:04+00:00",
	            "description": "Best Casino Comparison at Casino.online ➤ Thorough Casino Reviews ➤ Honest Opinions ➤ Best Bonus Offers ➤ The Complete Casino Guide",
	            "breadcrumb": {
	                "@id": "https://casino.online/#breadcrumb"
	            },
	            "inLanguage": "en-GB",
	            "potentialAction": [
	                {
	                    "@type": "ReadAction",
	                    "target": [
	                        "https://casino.online/"
	                    ]
	                }
	            ],
	            "author": {
	                "type": "Person",
	                "name": "Jacob Evans"
	            }
	        },
	        {
	            "@type": "BreadcrumbList",
	            "@id": "https://casino.online/#breadcrumb",
	            "itemListElement": [
	                {
	                    "@type": "ListItem",
	                    "position": 1,
	                    "name": "Online Casino Reviews From the Industry's Most Trusted Guide"
	                }
	            ]
	        },
	        {
	            "@type": "WebSite",
	            "@id": "https://casino.online/#website",
	            "url": "https://casino.online/",
	            "name": "casino.online",
	            "description": "",
	            "publisher": {
	                "@id": "https://casino.online/#organization"
	            },
	            "potentialAction": [
	                {
	                    "@type": "SearchAction",
	                    "target": {
	                        "@type": "EntryPoint",
	                        "urlTemplate": "https://casino.online/?s={search_term_string}"
	                    },
	                    "query-input": "required name=search_term_string"
	                }
	            ],
	            "inLanguage": "en-GB"
	        },
	        {
	            "@type": "Organization",
	            "@id": "https://casino.online/#organization",
	            "name": "Casino.online",
	            "url": "https://casino.online/",
	            "logo": {
	                "@type": "ImageObject",
	                "inLanguage": "en-GB",
	                "@id": "https://casino.online/#/schema/logo/image/",
	                "url": "https://casino.online/wp-content/uploads/2022/03/casino-online.png",
	                "contentUrl": "https://casino.online/wp-content/uploads/2022/03/casino-online.png",
	                "width": 138,
	                "height": 28,
	                "caption": "Casino.online"
	            },
	            "image": {
	                "@id": "https://casino.online/#/schema/logo/image/"
	            }
	        }
	    ]
	}</script>

    <link href="https://fonts.gstatic.com" crossorigin rel="preconnect" />
    <style id="wp-emoji-styles-inline-css" type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <style id="classic-theme-styles-inline-css" type="text/css">
        /*! This file is auto-generated */
        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }
    </style>
    <style id="global-styles-inline-css" type="text/css">
        body {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flow>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        body .is-layout-flow>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        body .is-layout-flow>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        body .is-layout-constrained>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        body .is-layout-constrained>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto !important;
            margin-right: auto !important;
        }

        body .is-layout-constrained>.alignwide {
            max-width: var(--wp--style--global--wide-size);
        }

        body .is-layout-flex {
            display: flex;
        }

        body .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        body .is-layout-flex>* {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        body .is-layout-grid>* {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        .wp-block-navigation a:where(:not(.wp-element-button)) {
            color: inherit;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        .wp-block-pullquote {
            font-size: 1.5em;
            line-height: 1.6;
        }
    </style>
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap/style.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/bootstrap-grid.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/bonus-finder/assets/bonus-finder.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/style.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/helper.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/operator.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/bonus-filter.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/slot.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/menu.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/media-queries.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/casino-online-14.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/common.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/land-based.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/css/comments.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link rel="preload" href="https://casino.online/wp-content/themes/ministrap/assets/css/package/owl.carousel.min.css"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
        data-cf-settings="6c8630b6390835d4bd25e2e7-|49"></script>
    <link data-minify="1" rel="preload"
        href="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap/assets/css/voucher-popup.css?ver=1706695423"
        data-rocket-async="style" as="style" onload="this.onload=null;this.rel='stylesheet'"
        onerror="this.removeAttribute('data-rocket-async')" type="text/css" media="all" />
    <script type="6c8630b6390835d4bd25e2e7-text/javascript"
        src="https://casino.online/wp-content/themes/ministrap/assets/js/jquery-2.2.4.min.js" id="jquery-js"
        defer></script>
    <script type="rocketlazyloadscript" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/themes/ministrap/assets/js/package/popper.min.js"
        id="popper-js-js" defer></script>
    <script type="rocketlazyloadscript" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/themes/ministrap/assets/js/package/bootstrap4.min.js"
        id="bootstrap4-js-js" defer></script>
    <script type="6c8630b6390835d4bd25e2e7-text/javascript"
        src="https://casino.online/wp-content/themes/ministrap/assets/js/package/owl.carousel.min.js"
        id="owl.carousel-js-js" defer></script>
    <script type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/js/owl-carousel-sliders-init.js?ver=1706695423"
        id="owl.carousel-sliders-js-js" defer></script>
    <script type="rocketlazyloadscript" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/themes/ministrap-child/assets/js/rangeslider.min.js"
        id="rangeslider-js-js" defer></script>
    <script type="6c8630b6390835d4bd25e2e7-text/javascript" id="lz_style-js-js-extra">
/* <![CDATA[ */
var lz_style_vars = {"button":"was opened in the background","bonuscode":"please disable adblock to see your bonuscode","blocked_bonuscode":"AdBlock blocks your Bonus Code","site_url":"https:\/\/casino.online"};
var the_ajax_script = {"ajaxurl":"https:\/\/casino.online\/wp-admin\/admin-ajax.php"};
var ajax_object = {"ajax_url":"https:\/\/casino.online\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
    <script type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap/assets/js/lz_style.js?ver=1706695423"
        id="lz_style-js-js" defer></script>
    <script type="6c8630b6390835d4bd25e2e7-text/javascript" id="style-js-js-extra">
/* <![CDATA[ */
var ajax_object = {"ajax_url":"https:\/\/casino.online\/wp-admin\/admin-ajax.php"};
var style_vars = {"nav_points":{"Review":"","Bonus":"bonus","FREE SPINS":"free-spins","MOBILE":"mobile","LIVE":"live","SLOTS":"slots","BLACKJACK":"blackjack","ROULETTE":"roulette","paypal":"paypal","Fraud & Scam":"scams"},"copied_bonuscode":"Bonuscode Copied!","sort_by_text":"Sort by","showAllOperators":"Show all operators"};
var the_ajax_script = {"ajaxurl":"https:\/\/casino.online\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
    <script type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/js/style.js?ver=1706695423"
        id="style-js-js" defer></script>
    <script type="rocketlazyloadscript" data-minify="1" data-rocket-type="text/javascript"
        data-rocket-src="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/js/bonus-filter.js?ver=1706695423"
        id="bonus-filter-js-js" defer></script>
    <script data-minify="1" type="6c8630b6390835d4bd25e2e7-text/javascript"
        src="https://casino.online/wp-content/cache/min/1/wp-content/themes/ministrap-child/assets/js/ajax.js?ver=1706695423"
        id="ajax-js-js" defer></script>
    <link rel="https://api.w.org/" href="https://casino.online/wp-json/" />
    <link rel="alternate" type="application/json" href="https://casino.online/wp-json/wp/v2/pages/160" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://casino.online/xmlrpc.php?rsd" />
    <link rel="shortlink" href="https://casino.online/" />

    <script type="rocketlazyloadscript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N5D8DTJ');</script>
    <meta name="google-site-verification" content="iyr5qFT1hCtkDgeDVYVm0AUdFZDkpueuD7nT_vtf3RM" />
    <meta name="yandex-verification" content="94fc077f3d62ae9c" />
    <style type="text/css">
        .recentcomments a {
            display: inline !important;
            padding: 0 !important;
            margin: 0 !important;
        }
    </style>
    <link rel="icon" href="https://casino.online/wp-content/uploads/2021/01/cropped-android-icon-192x192-1-32x32.png"
        sizes="32x32" />
    <link rel="icon" href="https://casino.online/wp-content/uploads/2021/01/cropped-android-icon-192x192-1-192x192.png"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="https://casino.online/wp-content/uploads/2021/01/cropped-android-icon-192x192-1-180x180.png" />
    <meta name="msapplication-TileImage"
        content="https://casino.online/wp-content/uploads/2021/01/cropped-android-icon-192x192-1-270x270.png" />
    <noscript>
        <style id="rocket-lazyload-nojs-css">
            .rll-youtube-player,
            [data-lazy-src] {
                display: none !important;
            }
        </style>
    </noscript>
    <script type="rocketlazyloadscript">
/*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
(function(w){"use strict";if(!w.loadCSS){w.loadCSS=function(){}}
var rp=loadCSS.relpreload={};rp.support=(function(){var ret;try{ret=w.document.createElement("link").relList.supports("preload")}catch(e){ret=!1}
return function(){return ret}})();rp.bindMediaToggle=function(link){var finalMedia=link.media||"all";function enableStylesheet(){link.media=finalMedia}
if(link.addEventListener){link.addEventListener("load",enableStylesheet)}else if(link.attachEvent){link.attachEvent("onload",enableStylesheet)}
setTimeout(function(){link.rel="stylesheet";link.media="only x"});setTimeout(enableStylesheet,3000)};rp.poly=function(){if(rp.support()){return}
var links=w.document.getElementsByTagName("link");for(var i=0;i<links.length;i++){var link=links[i];if(link.rel==="preload"&&link.getAttribute("as")==="style"&&!link.getAttribute("data-loadcss")){link.setAttribute("data-loadcss",!0);rp.bindMediaToggle(link)}}};if(!rp.support()){rp.poly();var run=w.setInterval(rp.poly,500);if(w.addEventListener){w.addEventListener("load",function(){rp.poly();w.clearInterval(run)})}else if(w.attachEvent){w.attachEvent("onload",function(){rp.poly();w.clearInterval(run)})}}
if(typeof exports!=="undefined"){exports.loadCSS=loadCSS}
else{w.loadCSS=loadCSS}}(typeof global!=="undefined"?global:this))
</script>

    <script type="rocketlazyloadscript">
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () {
                    (h.hj.q = h.hj.q || []).push(arguments)
                };
            h._hjSettings = {hjid: 2778133, hjsv: 6};
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>

    <script type="6c8630b6390835d4bd25e2e7-text/javascript">
        !function (w, d, t, u, o) {
            (o = d.createElement(t)).async = 1, o.src = u, (u = d.getElementsByTagName(t)[0]).parentNode.insertBefore(o, u)
        }(window, document, 'script', 'https://cdn.routy.app/collector/82apnog8jfq23gm1ci3e.js', 'Routy');
    </script>

    `
    headerContainer.innerHTML = headerContent;
  }


function menu() {
    const menu = document.getElementById('main-menu-holder');
    const menuContent = `
    <div id="main-menu-holder">
    <div class="container p-0">
        <a class="site-logo gtm-menu-logo" href="https://casino.online/">
            <img src="/wp-content/themes/ministrap-child/assets/images/casino-online.svg" width="135"
                height="60" class="no-lazy" alt="Casino.Online Logo">
        </a>
        <input type="checkbox" id="burger-shower" class="burger-shower">
        <label for="burger-shower" class="hamburger">
            <span class="icon-hamburger"></span>
        </label>
        <div id="main-menu-container">
            <ul id="main-menu" class="navbar-nav">
                <li class="dropdown-reworked menu-item-has-children menu-item-21464 dropdown"><a
                        class="dropdown-toggle"><span class="menu-text">Online Casinos</span> <span
                            class="caret"></span></a><input type="checkbox" id="dropdown-shower-21464"
                        class="dropdown-shower">
                    <ul role="menu" class="dropdown-menu">
                        <li class="menu-item-home menu-item-3571"><a href="casino.html"><span
                                    class="menu-text">Online Casinos</span></a><input type="checkbox"
                                id="dropdown-shower-3571" class="dropdown-shower"><label
                                for="dropdown-shower-3571" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>
                        <li class="menu-item-7798"><a href="https://casino.online/crypto-casinos/"><span
                                    class="menu-text">Crypto Casinos</span></a><input type="checkbox"
                                id="dropdown-shower-7798" class="dropdown-shower"><label
                                for="dropdown-shower-7798" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>
                        <li class="menu-item-10088"><a href="https://casino.online/new/"><span
                                    class="menu-text">New
                                    Online Casinos</span></a><input type="checkbox" id="dropdown-shower-10088"
                                class="dropdown-shower"><label for="dropdown-shower-10088"
                                class="dropdown-shower-label"><span>Back to menu</span></label></li>
                        <li class="menu-item-10088"><a href="https://casino.online/new/"><span
                                    class="menu-text">Fast Withdrawal Casinos</span></a><input type="checkbox"
                                id="dropdown-shower-10088" class="dropdown-shower"><label
                                for="dropdown-shower-10088" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>

                    </ul>
                </li>
                <li class="dropdown-reworked menu-item-has-children menu-item-21453 dropdown"><a
                        class="dropdown-toggle"><span class="menu-text">Bonuses</span> <span
                            class="caret"></span></a><input type="checkbox" id="dropdown-shower-21453"
                        class="dropdown-shower">
                    <ul role="menu" class="dropdown-menu">
                        <li class="menu-item-2746"><a href="https://casino.online/bonus/"><span
                                    class="menu-text">Casino Bonus</span></a><input type="checkbox"
                                id="dropdown-shower-2746" class="dropdown-shower"><label
                                for="dropdown-shower-2746" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>
                        <li class="menu-item-2745"><a href="https://casino.online/bonus/free-spins/"><span
                                    class="menu-text">Free Spins Without Deposit</span></a><input
                                type="checkbox" id="dropdown-shower-2745" class="dropdown-shower"><label
                                for="dropdown-shower-2745" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>
                        <li class="menu-item-2743"><a href="https://casino.online/bonus/no-deposit/"><span
                                    class="menu-text">No Deposit Bonus</span></a><input type="checkbox"
                                id="dropdown-shower-2743" class="dropdown-shower"><label
                                for="dropdown-shower-2743" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>
                        <li class="menu-item-20991"><a href="https://casino.online/bonus/first-deposit/"><span
                                    class="menu-text">First Deposit Bonus</span></a><input type="checkbox"
                                id="dropdown-shower-20991" class="dropdown-shower"><label
                                for="dropdown-shower-20991" class="dropdown-shower-label"><span>Back to
                                    menu</span></label></li>

                    </ul>
                </li>
                <li class="dropdown-reworked menu-item-has-children menu-item-21465 dropdown"><a
                        class="dropdown-toggle"><span class="menu-text">Casino Games</span> <span
                            class="caret"></span></a><input type="checkbox" id="dropdown-shower-21465"
                        class="dropdown-shower">
                    <ul role="menu" class="dropdown-menu">
                        <li class="menu-item-7564"><a href="https://casino.online/games/"><span
                                    class="menu-text">Casino Games</span></a>
                        </li>

                        <li class="menu-item-6172"><a href="https://casino.online/payments/"><span
                                    class="menu-text">Slots</span></a><input type="checkbox"
                                id="dropdown-shower-6172" class="dropdown-shower">
                        </li>
                        <li class="menu-item-6172"><a href="https://casino.online/payments/"><span
                                    class="menu-text">Roulette</span></a><input type="checkbox"
                                id="dropdown-shower-6172" class="dropdown-shower">
                        </li>
                </li>

            </ul>
            </li>

            <li class="menu-item-2762"><a href="https://casino.online/mobile/"><span
                        class="menu-text">Mobile</span></a><input type="checkbox" id="dropdown-shower-2762"
                    class="dropdown-shower">
            </li>

            <li class="dropdown-reworked menu-item-has-children menu-item-21466 dropdown"><a
                    class="dropdown-toggle"><span class="menu-text">Payment Methods</span> <span
                        class="caret"></span></a><input type="checkbox" id="dropdown-shower-21466"
                    class="dropdown-shower">
                <ul role="menu" class="dropdown-menu">
                    <li class="menu-item-6172"><a href="https://casino.online/payments/"><span
                                class="menu-text">Payment Methods</span></a><input type="checkbox"
                            id="dropdown-shower-6172" class="dropdown-shower">
                    </li>
                    <li class="menu-item-3154"><a href="https://casino.online/payments/paypal/"><span
                                class="menu-text">
                                PayPal Casinos</span></a><input type="checkbox" id="dropdown-shower-3154"
                            class="dropdown-shower"></li>
                    <li class="menu-item-3155"><a href="https://casino.online/payments/skrill/"><span
                                class="menu-text">
                                Skrill Casinos</span></a><input type="checkbox" id="dropdown-shower-3155"
                            class="dropdown-shower">
                    </li>

                    <li class="menu-item-3156"><a href="https://casino.online/payments/neteller/"><span
                                class="menu-text">
                                Neteller Casinos</span></a><input type="checkbox" id="dropdown-shower-3156"
                            class="dropdown-shower">
                    </li>

                    <li class="menu-item-3157">
                        <a href="https://casino.online/payments/debit-card/"><span class="menu-text">
                                Debit Card Casinos</span></a><input type="checkbox" id="dropdown-shower-3157"
                            class="dropdown-shower">
                    </li>
                </ul>
            </li>

            </ul>
        </div>

    </div>
</div>
<style>
    h1 b,
    h2 b,
    h3 b,
    h4 b,
    h5 b,
    .h1 b,
    .h2 b,
    .h3 b,
    .h4 b,
    .h5 b {
        display: block;
        font-weight: 900;
    }

    h1 b {
        min-height: 29px;
    }
</style>
    `;
    menu.innerHTML = menuContent;
}

  
  // Function to load the footer
  function loadFooter() {
    const footerContainer = document.getElementById('footer');
    const footerContent = `
    <style>
    .copyright {
        padding-top: 20px;
        padding-bottom: 30px;
        background: rgba(233, 233, 233, 0.20);
        color: #868686;
        font-size: 13px;
    }

    .copyright a {
        color: #868686;
    }

    .copyright-row {
        justify-content: center;
        align-items: center;

    }

    .copyright-text {
        flex: 0 0 100%;
    }

    #footer.footer-es .footer-legal-info .footer-extra-logos-es {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    }

    #footer.footer-es .footer-legal-info .footer-extra-logos-es a {
        margin: 0 8px;
    }

    #footer.footer-es .footer-legal-info img,
    #footer.footer-de .footer-legal-info img {
        margin-left: auto;
    }

    .footer-legal-info-text .i-f-gamble-aware {
        height: 13px;
        width: 114px;
        opacity: 0.6;
    }

    #lz-footer {
        display: none;
    }

    #footer {
        background: #fff;
        color: #868686;
        text-transform: none;
        /*border-bottom: 20px solid red;*/
        padding-top: 15px;
        padding-bottom: 0px;
    }

    #footer .container {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    #footer .container-fluid {
        background: rgba(233, 233, 233, 0.20);
        padding: 0;
    }

    #footer .footer-heading {
        color: #323232;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 auto 15px;
        padding-top: 15px
    }

    #footer .footer-trust-logos {
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    #footer .footer-trust-logos i {
        margin: 0 12px;
        filter: grayscale(100%);
        opacity: 0.4;
    }


    #footer .footer-known-logos {
        align-items: center;
        justify-content: center;
    }

    #footer .footer-known-logos img {
        margin: 23px 8px;
    }

    #footer .footer-known-logos img:first-child {
        margin-left: 16px;
    }

    #footer .footer-legal-info {
        align-items: center;
        justify-content: center;
        min-height: 82px;
    }

    #footer .footer-legal-info-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 13px;
        line-height: 1.25;
        text-align: left;
    }


    @media (max-width: 767px) {
        #footer .footer-known-logos img {
            margin: 13px 8px;
        }

        #footer .footer-known-logos img:first-child {
            margin-left: 8px;
        }

        #footer .footer-legal-info {
            justify-content: center;
            padding: 15px;
        }

        #footer.footer-es .footer-legal-info img,
        #footer.footer-de .footer-legal-info img {
            margin-left: 0;
        }

        #footer .footer-known-logos-text {
            /*width: 100%;*/
            /*margin-top: 15px;*/
        }

        #footer .footer-trust-logos i {
            margin: 6px 12px;
        }
    }
</style>
    <div class="container-fluid footer-menu-container py-3">
    <ul id="footer-menu" class="footer-nav">
        <li
            class="menu-item-type-menu-label menu-item-object-menu-label-object menu-item-has-children menu-item-5915 dropdown">
            <span class="menu-text">Top Online Casinos</span>
            <ul role="menu" class="dropdown-menu">
                <li role="menuitem" class="role-menuitem menu-item-7448"><a
                        href="https://casino.online/slot-sites/"><span class="menu-text">Best Slot Sites</span></a>
                </li>
                <li class="menu-item-8363"><a href="https://casino.online/real-money/"><span class="menu-text">Real
                            Money Casinos</span></a></li>
                <li role="menuitem" class="role-menuitem menu-item-7450"><a
                        href="https://casino.online/crypto-casinos/bitcoin/"><span class="menu-text">Bitcoin
                            Casinos</span></a></li>
                <li role="menuitem" class="role-menuitem menu-item-7557"><a
                        href="https://casino.online/software/netent/"><span class="menu-text">NetEnt
                            Casinos</span></a></li>
                <li class="menu-item-17362"><a href="https://casino.online/sweepstakes-casinos/"><span
                            class="menu-text">Best Sweepstakes Casinos</span></a></li>
            </ul>
        </li>
        <li
            class="menu-item-type-menu-label menu-item-object-menu-label-object menu-item-has-children menu-item-5913 dropdown">
            <span class="menu-text">Casino Offers</span>
            <ul role="menu" class="dropdown-menu">
                <li role="menuitem" class="role-menuitem menu-item-5902"><a
                        href="https://casino.online/bonus/"><span class="menu-text">Online Casino Bonus</span></a>
                </li>
                <li role="menuitem" class="role-menuitem menu-item-7452"><a
                        href="https://casino.online/bonus/free-spins/"><span class="menu-text">Free Spins No
                            Deposit</span></a></li>
                <li role="menuitem" class="role-menuitem menu-item-7453"><a
                        href="https://casino.online/bonus/codes/"><span class="menu-text">Bonus Codes</span></a>
                </li>
                <li role="menuitem" class="role-menuitem menu-item-7454"><a
                        href="https://casino.online/bonus/no-deposit/"><span class="menu-text">No Deposit Casino
                            Offers</span></a></li>
            </ul>
        </li>
        <li
            class="menu-item-type-menu-label menu-item-object-menu-label-object menu-item-has-children menu-item-7446 dropdown">
            <span class="menu-text">Casino Games</span>
            <ul role="menu" class="dropdown-menu">
                <li role="menuitem" class="role-menuitem menu-item-7455"><a
                        href="https://casino.online/blackjack/"><span class="menu-text">Blackjack</span></a></li>
                <li role="menuitem" class="role-menuitem current-page-ancestor menu-item-7456"><a
                        href="https://casino.online/roulette/"><span class="menu-text">Roulette</span></a></li>
                <li class="menu-item-21573"><a href="https://casino.online/games/baccarat/"><span
                            class="menu-text">Baccarat Online</span></a></li>
            </ul>
        </li>
        <li
            class="menu-item-type-menu-label menu-item-object-menu-label-object menu-item-has-children menu-item-7447 dropdown">
            <span class="menu-text">Guides, Tips &#038; Advisors</span>
            <ul role="menu" class="dropdown-menu">
                <li role="menuitem"
                    class="role-menuitem menu-item-type-taxonomy menu-item-object-category menu-item-7457"><a
                        href="https://casino.online/advisor/"><span class="menu-text">Advisor</span></a></li>
                <li role="menuitem" class="role-menuitem menu-item-7459"><a
                        href="https://casino.online/payments/"><span class="menu-text">Casino Payment
                            Methods</span></a></li>
                <li class="menu-item-17192"><a href="https://casino.online/south-africa/"><span
                            class="menu-text">Best Online Casinos in South Africa</span></a></li>
                <li class="menu-item-17194"><a href="https://casino.online/ireland/"><span class="menu-text">Top
                            Online Casinos Ireland</span></a></li>
                <li class="menu-item-17195"><a href="https://casino.online/canada/"><span class="menu-text">Best
                            Online Casinos in Canada</span></a></li>
                <li class="menu-item-21572"><a href="https://casino.online/new-zealand/"><span class="menu-text">Top
                            Online Casinos in New Zealand</span></a></li>
            </ul>
        </li>
    </ul>
</div>
    <div class="js-scroll-top ">
    <i class="fa fa-angle-up"></i>
</div>
<div class="container">
    <div class="footer-heading"> </div>
    <div class="row footer-trust-logos">
        <i class="i-f-mastercard"></i><i class="i-f-visa"></i><i class="i-f-paypal"></i><i
            class="i-f-skrill"></i><i class="i-f-neteller"></i><i class="i-f-norton"></i>
    </div>
</div>
<div class="container-fluid">
    <div class="container">
       
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-QAc08ipPd7ElgrEsKMj9mFi1LOYhEBBeusKfVSXktZSjlm5BIThey5q7IEYtZVixxC+lIN6CnSZCfI4s00Dq3w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  `;
  
    footerContainer.innerHTML = footerContent;
  }
  
  // Call the functions to load header and footer
  loadHeader();
  menu() ;
  loadFooter();
