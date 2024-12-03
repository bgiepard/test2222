import{D as b,b as $,e as M,f as I,d as R,p as A,c as P,a as c,Q as L,L as x,A as O,M as E}from"./style.199221b6.js";import{l as U}from"./lottie.2eed9a10.js";const D=["en","fr","de","pl"],F={en:"English",fr:"Fran\xE7ais",de:"Deutsch",pl:"Polski"},h=b($({locale:D.find(t=>t===(new URLSearchParams(location.search).get("lang")||localStorage.lang||navigator.language.substr(0,2)))||"en",fallbackLocale:"en",messages:{en:M,fr:I,de:R,pl:A}}));localStorage.lang=h.current;const N=P.filter(t=>t.popular);let g=localStorage.clientId=localStorage.clientId||Math.random().toString(36).substring(2),q=localStorage.captcha||null,S=!1,k=location.pathname.slice(1,-5);function B(t){return new x({apiKey:c.GMAPS_API_KEY,version:"weekly",libraries:["places"],language:h.current}).load().then(t)}function _(t){h.changeLocale(t),localStorage.lang=t,setTimeout(()=>document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e=>e.dataset.bsOriginalTitle=e.title),10)}function Y(t){S||B(e=>{let o,n=new e.maps.places.AutocompleteSessionToken;const i=(r,d)=>new e.maps.Geocoder().geocode({location:d}).then(p=>{var s,f;return this.quote[r+"Postcode"]=(f=(s=p.results[0])==null?void 0:s.address_components.find(m=>m.types.includes("postal_code")))==null?void 0:f.short_name});return Array.prototype.forEach.call(document.querySelectorAll("#from, #to, #fromCompany, #toCompany"),r=>{let d=[];const p=r.id.includes("Company"),s=r.id.replace("Company",""),f=new O(r,{data:[],onInput:m=>{m.length>=3&&new e.maps.places.AutocompleteService().getPlacePredictions({input:m,origin:s==="to"?o:void 0,bounds:{east:36,north:71,south:34,west:-11},types:p?["establishment"]:void 0,sessionToken:n}).then(u=>{d=u.predictions.filter(l=>!l.types.includes("country"));const a=d.map((l,y)=>({label:l.description,value:y,html:`<b>${l.structured_formatting.main_text}</b> <small class="fw-bold float-end">${l.distance_meters?"~"+Math.round(l.distance_meters*c.ROUTE_DISTANCE_FACTOR/1e4)+"0 km":""}</small><br>
<small>${l.structured_formatting.secondary_text||""} <span class="float-end">${l.distance_meters?"~"+(Math.ceil(l.distance_meters*c.ROUTE_DISTANCE_FACTOR/1e3/c.ROUTE_AVG_SPEED)+c.ROUTE_TIME_EXTRA_HOURS*Math.floor(l.distance_meters*c.ROUTE_DISTANCE_FACTOR/1e3/c.ROUTE_TIME_EXTRA_KM))+" h":""}</span>`}));p&&a.splice(4,0,{label:"",value:"",html:`<b class="text-info">${this.i18n.t("cantFindYourCompany")}</b><br><small class="text-primary">${this.i18n.t("enterYourCompanyDetails")}</small>`}),f.setData(a)}).catch(u=>{var a;console.error(u),(a=window.Sentry)==null||a.captureException(u),p&&f.setData([{label:"",value:"",html:`<b class="text-info">${this.i18n.t("cantFindYourCompany")}</b><br><small class="text-primary">${this.i18n.t("enterYourCompanyDetails")}</small>`}])})},onSelectItem:({label:m,value:u})=>{console.log("Selected "+r.id+":",m,d[u]),d[u]&&new e.maps.places.PlacesService(document.getElementById("map")).getDetails({placeId:d[u].place_id,fields:["place_id","address_components","geometry.location","type"],sessionToken:n},(a,l)=>{var y,v;if(n=new e.maps.places.AutocompleteSessionToken,l!==e.maps.places.PlacesServiceStatus.OK||!a)throw new Error("Google Places API: "+l);console.log("Place details:",a),s==="from"&&(o=a.geometry.location),this.quote[s]=m,this.quote[s+"Country"]=((y=a.address_components.find(w=>w.types.includes("country")))==null?void 0:y.short_name)||"",this.quote[s+"Position"]=a.geometry.location.toUrlValue(),this.quote[s+"Postcode"]=((v=a.address_components.find(w=>w.types.includes("postal_code")))==null?void 0:v.short_name)||i(s,a.geometry.location),this.quote[s+"Est"]=a.types.includes("establishment"),t==null||t.call(this,e)}),s==="from"&&document.getElementById("to").focus(),u||(this.quote[s]=this.quote[s]||"",this.quote[s+"CompanyName"]=this.quote[s+"Address"]=this.quote[s+"Details"]=null,this.quote[s+"Est"]=!1,t==null||t.call(this,e))}})}),S=!0,e}).then(t)}function G(t){return q?Promise.resolve(q):new Promise(e=>grecaptcha.ready(e)).then(()=>grecaptcha.execute(c.RECAPTCHA_API_KEY,{action:t}))}function V(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}function H(){const t="https://www.google.com/search?q=done+deliveries&rlz=1C1GCEA_enPL986PL986&oq=done+deliveries&ie=UTF-8#lrd=0x47168531652d226f:0xf10166f0c884f64d,1";window.open(t,"_blank")}function K(t){let e;return(...o)=>{clearTimeout(e),e=setTimeout(()=>{t.apply(this,o)},100)}}function X(){const t=/_ga_23S8MJKXP8=GS\d.\d.(\w+).(\d+)/,e=document.cookie.match(t);return parseInt(e==null?void 0:e[1])}function z(){var t,e;return(e=(t=Intl.DateTimeFormat())==null?void 0:t.resolvedOptions())==null?void 0:e.timeZone}function Q(){return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)?"tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)?"mobile":"desktop"}function j(t){return L({i18n:h,clientId:g,page:k,setupAutocomplete:Y,getGoogleAnalyticsSessionId:X,getUserDeviceType:Q,getUserTimezone:z,changeLocale:_,reCaptcha:G,top:V,countries:P,showAllReviews:H,popularCountries:N,languageNames:F,variant:"",version:"",...t}).directive("t",({el:e,get:o,effect:n})=>n(()=>e.innerHTML=h.t(o()))).mount()}document.addEventListener("scroll",K(()=>{var t;document.body.classList[window.scrollY?"add":"remove"]("scroll"),document.body.classList[window.scrollY>((t=document.querySelector("section"))==null?void 0:t.offsetTop)?"add":"remove"]("scroll-fold"),document.body.classList[window.scrollY+window.innerHeight>=document.body.scrollHeight?"add":"remove"]("scroll-end")}),{passive:!0});var C;c.ENV==="PROD"&&window.Sentry&&((C=window.Sentry)==null||C.onLoad(()=>{var t,e,o;window.Sentry.init({dsn:c.SENTRY_DSN,environment:c.HOST,initialScope:{user:{id:g,lang:h.current}},ignoreErrors:["ResizeObserver loop limit exceeded",/Loading chunk \d+ failed\./],beforeSend(n,i){const r=i.originalException;if(r){const d=r.message||"";if(d==="Timeout"||/Loading chunk \d+ failed\./.test(d))return null}return n}}),g=localStorage.clientId=((t=window.gaGlobal)==null?void 0:t.vid)||g,(e=window.Sentry)==null||e.setUser({id:g,lang:h.current}),(o=window.dataLayer)==null||o.push({event:"preferences_changed"})}));const J=()=>{var n,i;const t=(i=(n=location.search)==null?void 0:n.split("?")[1])==null?void 0:i.split("&")[0],o=["","fret","transport-palette","meubles"].indexOf(t);return o===3&&_("fr"),o>-1?o:0};var T;j({variant:J(),version:new URLSearchParams(location.search).get("v"),certificateYear:"",messageCounter:0,quote:{from:null,fromCountry:null,fromPosition:null,fromPostcode:null,fromEst:!1,to:null,toCountry:null,toPosition:null,toPostcode:null,toEst:!1,van:"plane",shipperEmail:null,shipperPhonePrefix:((T=P.find(t=>t.code===navigator.language.substr(-2).toUpperCase()))==null?void 0:T.dial_code)||"+44",shipperPhoneNo:null},loading:!1,validated:!1,testimoniesIndex:0,testimoniesSwipeStartX:null,testimoniesSwipeStartY:null,testimoniesSwipeOffset:null,maxNextTestimonyPreview:100,isFirstOrder:!0,validateRoute(t){if(!t.target.checkValidity())return this.validated=!0,!1;if(this.validated=!0,this.loading=!0,!this.quote.fromCountry||!this.quote.toCountry){const e=document.getElementById("noRouteModal");new E(e).show(),this.loading=!1}else this.reCaptcha("validateRoute").then(e=>{var o,n,i,r;return fetch(`${c.API_PRICING_VALIDATION_URL}?countryFrom=${this.quote.fromCountry}&countryTo=${this.quote.toCountry}&postcodeFrom=${this.quote.fromPostcode}&postcodeTo=${this.quote.toPostcode}&latitudeFrom=${(o=this.quote.fromPosition)==null?void 0:o.split(",")[0]}&longitudeFrom=${(n=this.quote.fromPosition)==null?void 0:n.split(",")[1]}&latitudeTo=${(i=this.quote.toPosition)==null?void 0:i.split(",")[0]}&longitudeTo=${(r=this.quote.toPosition)==null?void 0:r.split(",")[1]}&captcha=${e}`)}).then(e=>e.text().then(o=>({ok:e.ok,status:e.status,text:o}))).then(e=>{var n,i;if(!e.ok)throw new Error("Validation error: "+e.status+" "+e.text);this.loading=!1,console.log("Route valid");const o=`form.html?from=${encodeURIComponent(this.quote.from)}&fromCnt=${this.quote.fromCountry}&fromPos=${this.quote.fromPosition}&fromPco=${this.quote.fromPostcode}&fromEst=${this.quote.fromEst}&to=${encodeURIComponent(this.quote.to)}&toCnt=${this.quote.toCountry}&toPos=${this.quote.toPosition}&toPco=${this.quote.toPostcode}&toEst=${this.quote.toEst}&van=${this.quote.van||"plane"}&v=${this.version}&lang=${this.i18n.current}&l=${((i=(n=location.search)==null?void 0:n.split("?")[1])==null?void 0:i.split("&")[0])||"main"}&cidSm=${new URLSearchParams(location.search).get("smclient")}`;this.sendMessage(o)}).catch(e=>{var n,i,r;this.loading=!1,this.validated=!1,console.error(e),(n=window.Sentry)==null||n.captureException(e);const o=`form.html?from=${encodeURIComponent(this.quote.from)}&fromCnt=${this.quote.fromCountry}&fromPos=${this.quote.fromPosition}&fromPco=${this.quote.fromPostcode}&fromEst=${this.quote.fromEst}&to=${encodeURIComponent(this.quote.to)}&toCnt=${this.quote.toCountry}&toPos=${this.quote.toPosition}&toPco=${this.quote.toPostcode}&toEst=${this.quote.toEst}&van=${this.quote.van||"plane"}&v=${this.version}&lang=${this.i18n.current}&l=${((r=(i=location.search)==null?void 0:i.split("?")[1])==null?void 0:r.split("&")[0])||"main"}&cidSm=${new URLSearchParams(location.search).get("smclient")}`;this.sendMessage(o)})},submitReport(){this.reCaptcha("submitReport").then(t=>fetch(c.API_ORDERS_URL+"?captcha="+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({countryFrom:this.quote.fromCountry,cityFrom:this.quote.from,postcodeFrom:this.quote.fromPostcode,countryTo:this.quote.toCountry,cityTo:this.quote.to,postcodeTo:this.quote.toPostcode,vehicleType:this.quote.van||"plane",mailAddress:this.quote.shipperEmail,countryCode:this.quote.shipperPhonePrefix,phoneNumber:this.quote.shipperPhoneNo,clientId:this.clientId,isNonstandardRoute:!0})})).then(t=>{if(!t.ok)throw new Error("Report submission error: "+t.status+" "+t.statusText);console.log("Report submitted"),this.quote.from=this.quote.to=this.quote.van=this.validated=null,new E(document.getElementById("reportSentModal")).show()}).catch(t=>{var e;console.error(t),(e=window.Sentry)==null||e.captureException(t)})},getPrice(t){this.validateRoute(t)},sendMessage(t){window.parent.postMessage(t,"*")},getHeadingOnLP(){return this.variant?["expressVanTransport","shipYourFreight","tryQuoteGoPallet","transportOfFurnitureLP"][this.variant]:"expressVanTransport"}});document.getElementById("noRouteModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("certificateModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("unavailableModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("errorModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("reportSentModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("vanTypesModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});document.getElementById("videoExplainerModal").addEventListener("hide.bs.modal",function(){window.parent.postMessage("closeModal","*")});innerWidth>=1200&&U.loadAnimation({container:document.querySelector(".background"),renderer:"canvas",path:"/background-min.json"});
