function listEntries(e){for(var t,a,l,r=e.feed.entry,i=mf_defaults,s=document.getElementById(i.containerId),n=document.createElement("div"),d="<ul>",c=i.feedsUri.length,m=0;m<i.numPost&&m!=r.length;m++){t="auto"!==i.titleLength?r[m].title.$t.substring(0,i.titleLength)+(i.titleLength<r[m].title.$t.length?"&hellip;":""):r[m].title.$t,l="summary"in r[m]?r[m].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",l=i.summaryLength<l.length?l.substring(0,i.summaryLength)+"&hellip;":l,imgsrc="media$thumbnail"in r[m]&&!1!==i.thumbSize?r[m].media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/,"/s"+i.thumbSize+"-rw"):i.noThumb;for(var h=0,u=r[m].link.length;h<u;h++)a="alternate"==r[m].link[h].rel?r[m].link[h].href:"#";d+='<li class="list-related"><div class="post__image placeholder"><div class="preloader"><div class="sp sp-wave"></div></div>',d+='<img loading="lazy" rel="preload" as="image" class="snippet-thumbnail f w100" alt="'+t+'" src='+imgsrc+"></div>",d+='<div class="related-side"><h3 class="related-title max2"><a alt="'+t+'" href="'+a+'"'+(i.newTabLink?' target="_blank"':"")+">"+t+"</a></h3></div>",d+='<div class="summary">',d+="<span"+(i.showSummary?"":' style="display:none;"')+">",d+=i.showSummary?l:"",d+="</span></div>",d+="</div></li>"}d+='<li class="list-related more-link"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div><a href="'+i.feedsUri[i.current].url.replace(/\/$/,"")+"/search/label/"+i.feedsUri[i.current].tag+i.readMore.endParam+'"'+(i.newTabLink?' target="_blank"':"")+">"+i.readMore.text+"</a></li>",d+="</ul>",n.className=i.listClass,n.innerHTML='<div class="main-title '+i.feedsUri[i.current].tag+'"><div class="reclogo '+i.feedsUri[i.current].tag+'"></div><h4>'+i.feedsUri[i.current].name+"</h4></div>"+d,s.appendChild(n),i.onLoadFeed(i.current),i.current+1<c&&i.loadFeed(i.current+1),i.current+1==c&&i.onLoadComplete(),i.current++}mf_defaults.loadFeed(0);
