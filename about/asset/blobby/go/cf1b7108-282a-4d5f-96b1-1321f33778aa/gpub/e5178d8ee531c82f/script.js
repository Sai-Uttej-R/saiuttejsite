window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme17"]=window.wsb["Theme17"]||window.radpack("@widget/LAYOUT/bs-layout17-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-146770\"}"));
window.wsb["DynamicFontScaler"]=function(e){let t,{containerId:o,targetId:n,fontSizes:r,maxLines:a,prioritizeDefault:s}=e;if("undefined"==typeof document)return;const i=document.getElementById(o),c=document.getElementById(n);function l(e){return function(e){const t=parseInt(d(e,"padding-left")||0,10),o=parseInt(d(e,"padding-right")||0,10);return e.scrollWidth+t+o}(e)<=i.clientWidth&&function(e){const t=e.offsetHeight,o=parseInt(d(e,"line-height"),10)||1;return Math.floor(t/o)}(e)<=a}function p(){if(!i||!c||t===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void function(){c.removeAttribute("data-last-size");const e=document.querySelector(`#${n}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`)).sort(((e,t)=>r.indexOf(e.getAttribute("data-size"))-r.indexOf(t.getAttribute("data-size"))));if(i.clientWidth&&e.length){const t=i.style.width||"";i.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${i.clientWidth}px`}));const o=function(e){return e.find(l)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),i.style.width=t;const r=d(o,"font-size"),a=c.getAttribute("data-last-size");if(r&&r!==a){if(s){const e=d(c,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}c.setAttribute("data-last-size",r);let e=document.querySelector(`#${n}-style`);e||(e=document.createElement("style"),e.id=`${n}-style`,document.head.appendChild(e)),e.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function d(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}p(),window.addEventListener("resize",p)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-146774\",\"targetId\":\"logo-text-146775\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":false}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"righteous\",\"josefin-sans\",\"montserrat\"],\"colors\":[\"\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"309ac58f-b398-4d43-bb53-bc884d0c7e55\":{},\"623e9f54-9b0b-4ff4-82fe-85172acbbaee\":{},\"d7b8ef33-13c4-4afa-ac10-c4a424929550\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":\"b40efa80-968e-417a-9960-a54d4e76c7f9\",\"routePath\":\"/\"},\"87d35f37-3bae-4a18-8a80-e93736fd8a95\":{\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"widgetId\":null,\"routePath\":\"/contact\"},\"870d5a30-222a-4761-842b-69d1ca65d578\":{\"pageId\":\"a568fef8-c043-44e5-ab11-718607b73ab2\",\"widgetId\":null,\"routePath\":\"/about\"},\"7bc04fab-5b63-4d2a-ac4f-a38cd9ab0fe4\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":null,\"routePath\":\"/\"},\"651ac8d9-5ebf-40d9-a719-5b1ef758f655\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":null,\"routePath\":\"/\"},\"d5370aac-277c-47ec-8690-041c27d1f882\":{\"pageId\":\"3cb04fa1-7bfc-4e9f-8805-4fa84d597b26\",\"widgetId\":null,\"routePath\":\"/skill-set\"}},\"isInternalPage\":true,\"navigationMap\":{\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3cb04fa1-7bfc-4e9f-8805-4fa84d597b26\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3cb04fa1-7bfc-4e9f-8805-4fa84d597b26\",\"name\":\"Skill Set\",\"href\":\"/skill-set\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"60e47323-77da-4ab1-bb82-547aa8cf25b4\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a568fef8-c043-44e5-ab11-718607b73ab2\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"a568fef8-c043-44e5-ab11-718607b73ab2\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ad7092fb-6bb7-4427-824a-092d09290c60\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ad7092fb-6bb7-4427-824a-092d09290c60\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"016\",\"meta\":{\"primary\":\"rgb(0, 117, 193)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"righteous\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":33,\"primary\":{\"id\":\"righteous\",\"name\":\"Righteous\",\"url\":\"//fonts.googleapis.com/css?family=Righteous:400&display=swap\",\"family\":\"'Righteous', serif, system-ui\",\"size\":14,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"4px\"}},\"alternate\":{\"id\":\"josefin-sans\",\"name\":\"Josefin Sans\",\"url\":\"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap\",\"family\":\"'Josefin Sans', Arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, Meiryo, '\u30E1\u30A4\u30EA\u30AA', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\uAD74\uB9BC', Gulim, '\uAD74\uB9BC\uCCB4', GulimChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\u4E2D\u6613\u9ED1\u4F53', SimHei, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Slab, '\u5FAE\u8EDF\u6B63\u9ED1\u9AD4', Microsoft JhengHei, sans-serif\"}}}],\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}}]},\"alternate\":{\"id\":\"josefin-sans\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":7,\"alternate\":{\"id\":\"josefin-sans\",\"name\":\"Josefin Sans\",\"url\":\"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap\",\"family\":\"'Josefin Sans', Arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, Meiryo, '\u30E1\u30A4\u30EA\u30AA', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\uAD74\uB9BC', Gulim, '\uAD74\uB9BC\uCCB4', GulimChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\u4E2D\u6613\u9ED1\u4F53', SimHei, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Slab, '\u5FAE\u8EDF\u6B63\u9ED1\u9AD4', Microsoft JhengHei, sans-serif\"}}}]},\"logo\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":23,\"logo\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:600,700&display=swap\",\"family\":\"'Montserrat', sans-serif\",\"size\":16,\"weight\":700,\"weights\":[600,700],\"styles\":{\"letterSpacing\":\"4px\",\"textTransform\":\"uppercase\",\"fontWeight\":700,\"fontSize\":\"xlarge\"}}}}}},\"theme\":\"Theme17\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-146768-navId-mobile\",\"uniqueId\":\"n-146768\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.9199999999999999}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-146781\",\"targetId\":\"logo-text-146782\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":false}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-146784\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-146779\",\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.9199999999999999}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-146783\",\"logoImageId\":\"logo-146778\",\"containerId\":\"navBarId-146779\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u,stickyNavParent:h}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&h&&!h.style.height&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav146771\",\"anchorId\":\"header_stickynav-anchor146772\",\"logoHeight\":80,\"hasAnimation\":true}"));
document.getElementById('page-146767').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":false,"wam_site_headerTreatment":"Fit","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":true,"wam_site_homepageFirstWidgetType":"SHOP_FEATURED_CATEGORY","wam_site_homepageFirstWidgetPreset":"featuredCategory1","wam_site_businessCategory":"personal_profile","wam_site_theme":"layout17","wam_site_locale":"en-IN","wam_site_fontPack":"righteous","wam_site_cookieBannerEnabled":false,"wam_site_membershipEnabled":false,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"freemiumV1","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);