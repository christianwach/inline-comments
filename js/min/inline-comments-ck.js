!function(t,n,i){var o,e="incom_wrapper",c="#"+e,a="html",r="comments-and-form",s="#"+r,u="data-incom",f=u+"-comment",l="incom-active",d="."+l,v="incom-position-",p="incom-bubble",m="."+p,h=p+"-style",b=p+"-static",g=p+"-dynamic",w=p+"-active",k=p+"-link",C="incom-comments-wrapper",S="."+C,y="incom-cancel",T="."+y,x="incom-info-icon",B="."+x,W=s+" .comment",D="data_incom",N=0;t.init=function(t){O(t),_(),sn()};var O=function(t){o=n.extend({selectors:"p",moveSiteSelector:a,countStatic:!0,defaultBubbleText:"+",position:"left",background:"white"},t)},_=function(){0===n(c).length&&n('<div id="'+e+'"></div>').appendTo(n(a)).addClass(v+o.position),j()},j=function(){var t=un(o.selectors);n(t).each(function(i){n(t[i]).each(function(t){var i=n(this);A(t,i),I(i)})})},A=function(t,n){var i=n.prop("tagName").substr(0,1);if(!n.attr(u)){var o=i+t;n.attr(u,o)}},I=function(t){var i=Q(t),o=z(t),e=n("<a/>",{href:"","class":k}).text(i).wrap(o).parent().appendTo(c);G(e),V(t,e),H(t,e),J(t,e)},Q=function(t){var n;return n=F(t)?q(t):o.defaultBubbleText},q=function(t){var i=t.attr(u),o="["+f+"="+i+"]",e=n(o).length;return e},z=function(t){var n='<div class="'+E(t)+'" />';return n},E=function(t){var n=p,i=" ";return n+=F(t)&&o.countStatic?i+h+i+b:F(t)?i+h:i+g},F=function(t){var i=q(t);return n.isNumeric(i)&&i>0?!0:!1},G=function(t){t.hasClass(b)&&t.css("display","block")},H=function(t,n){n.hasClass(b)||t.add(n).hover(function(){n.stop(!0,!0).fadeIn()},function(){n.stop(!0,!0).fadeOut(2e3)})},J=function(t,n){n.on("click",function(i){i.preventDefault(),K(),t.addClass(l),nn(),n.addClass(w),L(n)})},K=function(){var t=n(d);0!==t.length&&(t.removeClass(l),0===t.prop("class").length&&t.removeAttr("class"))},L=function(t){var i=n("<div/>",{"class":C}).appendTo(c).css("background-color",o.background);R(),M(),V(t,i),X(i),$(),tn()},M=function(){n(s).appendTo(S).show(),P()},P=function(){var t=n("<input>").attr("type","hidden").attr("name",D).val(U);n(s+" .form-submit").append(n(t))},R=function(){var t="["+f+"="+U()+"]";n(W).hide(),n(W+t).show()},U=function(){var t=n(d).attr(u);return t},V=function(t,n){var i=t.offset();n.css({top:i.top,left:rn()?i.left+t.outerWidth():i.left-n.outerWidth()})},X=function(t){var i=n(window).width(),o=t.outerWidth(),e=t.offset().left,c=e+o;rn()&&c>i?(Y(c-i),on("in")):!rn()&&0>e&&(Y(-e),on("in"))},Y=function(t){N=t},Z=function(){return N},$=function(){n("html").click(function(t){0===n(t.target).parents(c).length&&nn(!0)})},tn=function(){n(T).click(function(t){t.preventDefault(),nn(!0)})},nn=function(t){var i=n(m),o=n(S);n(s).appendTo(c).hide(),i.hasClass(w)&&(i.removeClass(w),t?o.fadeOut("fast",function(){n(this).remove(),K()}):o.remove(),on("out"))},on=function(t){var i=n(o.moveSiteSelector);i.css({position:"relative"}),en(i,t),o.moveSiteSelector!==a&&(an(t,m),an(t,S))},en=function(t,n){var i;"in"===n?i=Z():"out"===n&&(i="initial"),cn(t,i)},cn=function(t,n){t.css(rn()?{right:n}:{left:n})},an=function(t,i){var o=n(i);"in"===t?o.css({left:rn()?"-="+Z():"+="+Z()}):"out"===t&&o.css({left:rn()?"+="+Z():"-="+Z()})},rn=function(){return"right"===o.position?!0:!1},sn=function(){o.hideBranding!==!0&&n(B).css({display:"block",visibility:"visible"})},un=function(t){var n=t.split(",");return n}}(window.incom=window.incom||{},jQuery);