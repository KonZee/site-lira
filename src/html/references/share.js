try{(function(){var parseUri=function(e){var t=parseOptions,n=t.parser.strict.exec(e),r={},i=14;while(i--)r[t.key[i]]=n[i]||"";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,function(e,n,i){n&&(r[t.q.name][n]=i)}),r},parseOptions={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/}},reencode=function(e){return encodeURIComponent(decodeURIComponent(e))},normalize=function(e){e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(!e)return"";/^https?:\/\//i.test(e)||(e="http://"+e),e=parseUri(e),e.protocol=e.protocol.toLowerCase(),e.host=e.host.toLowerCase(),e.port&&(e.port==80&&e.protocol=="http"?e.port="":e.port==443&&e.protocol=="https"&&(e.port="")),e.directory||(e.directory="/"),e.directory=e.directory.replace(/\/\.\./g,"").replace(/\/\./g,""),e.directory=e.directory.replace(/\/+/g,"/");if(e.query){var t=e.query.split(/&|;/),n=t.length,r=[];while(n--){if(!t[n])continue;r.push({p:t[n].split("=")[0],o:n})}r=r.sort(function(e,t){return e.p<t.p?-1:e.p>t.p?1:e.o<t.o?-1:1}),n=r.length;while(n--){var i=t[r[n].o].split("="),s=i.length;while(s--)i[s]=reencode(i[s]);r[n]=i.join("=")}e.query=r.join("&")}var o=e.directory.split("/"),s=o.length;while(s--)o[s]=reencode(o[s]);return e.directory=o.join("/"),e.file=reencode(e.file),e.protocol+"://"+e.host+(e.port?":"+e.port:"")+e.directory+e.file+(e.query?"?"+e.query:"")+(e.anchor?"#"+e.anchor:"")},list=[];document.getElementsByClassName?list=document.getElementsByClassName("surfinbird__like_button"):list=document.getElementsByTagName("*");var alen=list.length;while(alen--)if(list[alen].className.indexOf("surfinbird__like_button")!=-1&&list[alen].className.indexOf("__sb_parsed__")==-1){var a=list[alen],caption=a.textContent||a.innerText,params={};a.getAttribute("data-surf-config")&&a.getAttribute("data-surf-config").length!=0?params=eval("("+a.getAttribute("data-surf-config")+")"):a.getAttribute("rel")&&a.getAttribute("rel").length!=0&&(params=eval("("+a.getAttribute("rel")+")")),params.layout||(params.layout="common"),params.url||(params.url=window.location);try{params.url=normalize(params.url+"")}catch(e){window.console&&console.log&&(console.log("cant recode url ["+params.url+"]"),console.log(e))}var dims=["width","height"],len=dims.length;while(len--){var dim=dims[len];params[dim]=params[dim]+"";switch(params[dim].replace(/\d*/gim,"")){case"em":params[dim]=params[dim].replace(/\D*/gim,"")+"em";break;case"px":params[dim]=params[dim].replace(/\D*/gim,"")+"px";break;case"%":params[dim]=params[dim].replace(/\D*/gim,"")+"%";break;default:params[dim]=params[dim].replace(/\D*/gim,"")+"px"}}if(!params.width||params.width=="px")params.width="500px";if(!params.height||params.height=="px")params.height="20px";var iframe=document.createElement("iframe");iframe.frameBorder="0",iframe.style.width=params.width,iframe.style.height=params.height,iframe.scrolling="no",iframe.className="surfinbird__like_iframe",iframe.allowTransparency="true",iframe.src="//surfingbird.ru/button?layout="+params.layout+"&url="+encodeURIComponent(params.url)+"&caption="+encodeURIComponent(caption)+"&referrer="+encodeURIComponent(document.referrer)+"&current_url="+encodeURIComponent(window.location+""),a.innerHTML="",a.parentNode.insertBefore(iframe,a),a.className+=" __sb_parsed__"}(function(e){var t=e.createElement("script"),n=e.getElementsByTagName("script")[0];window.sbButtonCounter=!0,t.type="text/javascript",t.async=!0,t.src=("https:"==e.location.protocol?"https://":"http://")+"surfingbird.ru/js/b2b.js",n.parentNode.insertBefore(t,n)})(document),function(e){var t=e.createElement("script"),n=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=!0,t.src="//front.facetz.net/collect.js",t.onload=t.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")t.onload=t.onreadystatechange=null,loadFacetzCollector("surfingbird","")},n.parentNode.insertBefore(t,n)}(document)})()}catch(e){window.console&&console.log&&console.log(e)};