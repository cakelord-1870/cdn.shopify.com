jQuery((function(){jQuery("div.csw").prepend("<p class='loading'>Loading...<br /><img src='http://static2.shopify.com/s/global/lightbox/v2/loading.gif' alt='loading...'/ ></p>")}));var j=0;jQuery.fn.codaSlider=function(e){return e=jQuery.extend({easeFunc:"expoinout",easeTime:750,toolTip:!1},e),this.each((function(){var a=jQuery(this);a.find("p.loading").remove(),a.removeClass("csw").addClass("stripViewer");var r=a.find("div.panel").width();var i=a.find("div.panel").size();var t=r*i;a.find("div.panelContainer").css("width",t);var n=2*i;if(location.hash&&parseInt(location.hash.slice(1))<=i){var s=parseInt(location.hash.slice(1));var d=-r*(s-1);jQuery(this).find("div.panelContainer").css({left:d})}else var s=1;a.each((function(a){jQuery(this).after("<div class='stripNav' id='stripNav"+j+"'><ul></ul></div>"),jQuery(this).find("div.panel").each((function(e){jQuery("div#stripNav"+j+" ul").append("<li class='tab"+(e+1)+"'><a href='#"+(e+1)+"'>"+jQuery(this).attr("title")+"</a></li>")})),jQuery("div#stripNav"+j+" a").each((function(a){n+=jQuery(this).parent().width(),jQuery(this).bind("click",(function(){jQuery(this).addClass("current").parent().parent().find("a").not(jQuery(this)).removeClass("current");var i=-r*a;s=a+1,jQuery(this).parent().parent().parent().prev().find("div.panelContainer").animate({left:i},e.easeTime,e.easeFunc)}))})),jQuery("div#stripNavL"+j+" a").click((function(){if(1==s){var a=-r*(i-1);s=i,jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().parent().find("li:last a").addClass("current")}else{var a=-r*((s-=1)-1);jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().prev().find("a").addClass("current")}return jQuery(this).parent().parent().find("div.panelContainer").animate({left:a},e.easeTime,e.easeFunc),location.hash=s,!1})),jQuery("div#stripNavR"+j+" a").click((function(){if(s==i){var a=0;s=1,jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().parent().find("a:eq(0)").addClass("current")}else{var a=-r*s;s+=1,jQuery(this).parent().parent().find("div.stripNav a.current").removeClass("current").parent().next().find("a").addClass("current")}return jQuery(this).parent().parent().find("div.panelContainer").animate({left:a},e.easeTime,e.easeFunc),location.hash=s,!1})),jQuery("a.cross-link").click((function(){jQuery(this).parents().find(".stripNav ul li a:eq("+(parseInt(jQuery(this).attr("href").slice(1))-1)+")").trigger("click")})),location.hash&&parseInt(location.hash.slice(1))<=i?jQuery("div#stripNav"+j+" a:eq("+(location.hash.slice(1)-1)+")").addClass("current"):jQuery("div#stripNav"+j+" a:eq(0)").addClass("current")})),j++}))};
//# sourceMappingURL=/s/files/1/0061/4742/assets/coda-slider.1.1.1.js.map?52
