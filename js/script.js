//Expanding Logo
$('.top_left').mouseover(function () {
	$('#yagomurakami').text('Yago Murakami');
});

$('.top_left').mouseout(function () {
	$('#yagomurakami').text('Ya Mu');
});

//Change words on about page
var divs = $('span[id^="content-"]').hide(),
	i = 0;

	Barba.Dispatcher.on(newPageReady, function(){ 
	(function cycle() {
		divs.eq(i).animate({width:'toggle'},350).fadeIn(400).delay(2000).fadeOut(400, cycle);
		i = ++i % divs.length;
	})();
});

//home and about circle showcase
var showcaseArray = [
	'img/1.png',
	'img/2.png',
	'img/3.png',
	'img/4.png',
	'img/5.png',
	'img/6.jpg',
];

$(document).ready(function(){
  $(document).mousemove(function(event){
    var prob = Math.random()* (20 - 1);
    console.log(prob);
    var randomShowcase = showcaseArray[Math.floor(Math.random()*showcaseArray.length)];
    if (prob < 1) {
    	$('#showcase').removeClass('animate').addClass('animate');
    	$('#showcase').attr({ src: randomShowcase});
    }
  });
});

$(document).ready(function() {
  setInterval(function() {
  	var randomShowcase = showcaseArray[Math.floor(Math.random()*showcaseArray.length)];
  	$('#showcase').removeClass('animate').addClass('animate');
  	$('#showcase').attr({src: randomShowcase});
  }, 5000);
});

//hover change image for the portfolio showcase
$('#one').hover(function () {
	$('.empty_right').css({'background-image': 'url("img/alivecash2.gif")'});
});

$('#two').hover(function () {
	$('.empty_right').css({'background-image': 'url("img/purge2.gif")'});
});

$('#three').hover(function () {
	$('.empty_right').css({'background-image': 'url("img/alivecash.png")'});
});

$('#four').hover(function () {
	$('.empty_right').css({'background-image': 'url("img/alivecash.png")'});
});

$('#five').hover(function () {
	$('.empty_right').css({'background-image': 'url("img/alivecash.png")'});
});




//hover change for client logos
$('#aerosoles').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/aerosoles.png")'});
});

$('#azoris').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/azoris.png")'});
});

$('#cci').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/cci.png")'});
});

$('#nutella').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/nutella.png")'});
});

$('#tendam').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/tendam.png")'});
});

$('#cortefiel').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/cortefiel.png")'});
});

$('#pedrodelhierro').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/pedrodelhierro.png")'});
});

$('#springfield').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/springfield.png")'});
});

$('#womensecret').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/womensecret.png")'});
});

$('#diadermine').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/diadermine.png")'});
});

$('#schwarzkopf').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/schwarzkopf.png")'});
});

$('#syoss').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/syoss.png")'});
});

$('#bayou').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/bayou.png")'});
});

$('#cointreau').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/cointreau.png")'});
});

$('#fiuza').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/fiuza.png")'});
});

$('#glenfiddich').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/glenfiddich.png")'});
});

$('#hendricks').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/hendricks.png")'});
});

$('#grous').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/grous.png")'});
});

$('#valbom').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/valbom.png")'});
});

$('#fornodeminas').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/fornodeminas.png")'});
});

$('#gatorade').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/gatorade.png")'});
});

$('#nike').hover(function () {
	$('.logos_rec').css({'background-image': 'url("img/nike.png")'});
});

//animation//
$('document').ready(function(){
	Barba.Pjax.start();
})
