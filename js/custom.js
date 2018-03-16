/* AFTER AND BEFORE */		
 // TYPE WRITE - change time in equation d=170-100*Math.random...- parameter 170		
 // change time of period (pause). change value in (c, 30):  this.period = parseInt(c, 30)		
 var marcus = function() {		
         if (/MSIE 8/i.test(navigator.userAgent)) $(".imageslider .tapbutton").removeClass("hide");		
         else {		
             var a = a || {};		
             a.Public = function(a) {		
                 var b = a(".slider-tool", ".imageslider"),		
                     c = a(".slider-images", ".imageslider"),		
                     d = a(".slider-after img", ".imageslider"),		
                     e = (a(".slider-before img", ".imageslider"), function(b) {		
                         var c, d = a(this).find(".slider-after"),		
                             e = a(this).find(".slider-before img")[0],		
                             f = e.getBoundingClientRect();		
                         c = "mousemove" === b.originalEvent.type ? (b.pageX - f.left) / e.offsetWidth * 100 : (b.originalEvent.touches[0].pageX - f.left) / e.offsetWidth * 100, 100 >= c && d.css({		
                             width: c + "%"		
                         })		
                     }),		
                     f = function() {		
                         c.each(function() {		
                             a(this).on("mousemove", e), a(this).on("touchstart", e), a(this).on("touchmove", e)		
                         })		
                     },		
                     g = function() {		
                         d.each(function() {		
                             var b = a(this).attr("src"),		
                                 c = a(this).parent();		
                             c.css("background-image", "url(" + b + ")")		
                         })		
                     },		
                     h = function() {		
                         f(), g()		
                     },		
                     i = function() {		
                         b.length > 0 && h()		
                     };		
                 i()		
             }(jQuery)		
         }		
     },		
     TxtRotate = function(a, b, c) {		
         this.toRotate = b, this.el = a, this.loopNum = 0, this.period = parseInt(c, 30) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1		
     };		
 TxtRotate.prototype.tick = function() {		
     var a = this.loopNum % this.toRotate.length,		
         b = this.toRotate[a];		
     this.isDeleting ? this.txt = b.substring(0, this.txt.length - 1) : this.txt = b.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";		
     var c = this,		
         d = 120 - 100 * Math.random();		
     this.isDeleting && (d /= 2), this.isDeleting || this.txt !== b ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, d = 500) : (d = this.period, this.isDeleting = !0), setTimeout(function() {		
         c.tick()		
     }, d)		
 };		
 var rebeca = function() {		
     for (var a = document.getElementsByClassName("txt-rotate"), b = 0; b < a.length; b++) {		
         var c = a[b].getAttribute("data-rotate"),		
             d = a[b].getAttribute("data-period");		
         c && new TxtRotate(a[b], JSON.parse(c), d)		
     }		
     var e = document.createElement("style");		
     e.type = "text/css", e.innerHTML = ".txt-rotate > .wrap { text-align: center; font-weight: 500; width: 165px; display: block; white-space: normal;}", document.body.appendChild(e)		
 }; 
 
 //video hover play

var $polystar = $('.polystar');

$polystar.on('mouseenter', function () {
	$polystar.get(0).play();
});

$polystar.on('mouseout', function () {
	$polystar.get(0).pause();
});