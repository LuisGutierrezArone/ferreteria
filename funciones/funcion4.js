!function(a){function b(){h.add(g).toggleClass("open"),c()}function c(){g.find(".menu-item-has-children").removeClass("open")}function d(b){b.preventDefault();var c=a(this).parent(".menu-item-has-children");c&&c.toggleClass("open")}function e(){var b=a(this),c=b.children(".sub-menu").first();(f(c)||c.parents(".bump").length)&&(c.siblings("a").andSelf().addClass("bump"),c.css({left:"auto",right:b.parents("ul").length>1?c.width():0})),b.off("hover",e)}function f(b){var c=b.offset().left,d=b.width();return c+d>a(window).width()}var g=!1,h=!1;a(document).ready(function(){g=a("#site-navigation"),h=a("#menu-toggle"),g&&h&&(h.on("click",b),g.find(".menu-item-has-children").on("hover",e),g.find(".expand").on("click",d))})}(jQuery);