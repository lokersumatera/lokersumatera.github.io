function recentlistEntries(e){for(var t,l,a,i=e.feed.entry,r=recent_defaults,n=document.getElementById(r.containerId),s=document.createElement("div"),d="<ul>",m=r.feedsUri.length,c=0;c<r.numPost&&c!=i.length;c++){t="auto"!==r.titleLength?i[c].title.$t.substring(0,r.titleLength)+(r.titleLength<i[c].title.$t.length?"&hellip;":""):i[c].title.$t,a="summary"in i[c]?i[c].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"",a=r.summaryLength<a.length?a.substring(0,r.summaryLength)+"&hellip;":a,imgsrc="media$thumbnail"in i[c]&&!1!==r.thumbSize?i[c].media$thumbnail.url.replace(/\/s[0-9]{2}-(w[0-9]+-)?c/,"/s"+r.thumbSize+"-rw"):r.noThumb;for(var u=0,h=i[c].link.length;u<h;u++)l="alternate"==i[c].link[u].rel?i[c].link[u].href:"#";var p = i[c].published.$t,year = p.substring(0, 4),_ = p.substring(5, 7),dd = p.substring(8, 10),x = new Array;x[1] = "January", x[2] = "February", x[3] = "March", x[4] = "April", x[5] = "May", x[6] = "June", x[7] = "July", x[8] = "August", x[9] = "September", x[10] = "October", x[11] = "November", x[12] = "December";d+='<li class="list-related"><div class="post__image placeholder"><div class="preloader"><div class="sp sp-wave"></div></div>',d+='<a href="'+l+'"'+(r.newTabLink?' target="_blank"':"")+'><img rel="preload" as="image" class="snippet-thumbnail f w100" alt="'+t+'" src='+imgsrc+"></a></div>",d+='<div class="related-title"><a alt="'+t+'" href="'+l+'"'+(r.newTabLink?' target="_blank"':"")+">"+t+"</a><time class='timeago' datetime='"+i[c].published.$t+"'>" + dd + " " + x[parseInt(_)] + " " + year + "</time></div>",d+='<div class="summary">',d+="<span"+(r.showSummary?"":' style="display:none;"')+">",d+=r.showSummary?a:"",d+="</span></div>",d+="</div></li>"}d+="</ul>",s.className=r.listClass,s.innerHTML='<div class="main-title"><h4>Artikel Terbaru</h4></div>'+d,n.appendChild(s),r.onLoadFeed(r.current),r.current+1<m&&r.loadFeed(r.current+1),r.current+1==m&&r.onLoadComplete(),r.current++}recent_defaults.loadFeed(0);
