var Homepage = Barba.BaseView.extend({
	namespace: 'home',
	onEnter: function() {
	// The new Container is ready and attached to the DOM.
	$('body').css('background-color', '#ffffff');
	$('.barba-container').addClass('animated fadeIn delay-150ms');
	$('.middle_top').addClass('animated fadeInDown');
	$('.middle_bottom').addClass('animated fadeInUp');
	$('#aboutmehomebtn').addClass('animated fadeIn slow');
	$('#workhomebtn').addClass('animated fadeIn slow');
	//Increase circle
	$('.circle_home').addClass('animated increase_circle fast');
	//Let's Talk
	$('#email').mouseover(function () {
	$('.popup').css('display', 'inline');
	});
	$('#email').mouseout(function () {
	$('.popup').css('display', 'none');
	});
	},
	onEnterCompleted: function() {
	// The Transition has just finished.
	},
	onLeave: function() {
	// A new Transition toward a new page has just started.
	$('.barba-container').removeClass('animated fadeIn');
	},
	onLeaveCompleted: function() {
	// The Container has just been removed from the DOM.
	}
});
// Don't forget to init the view!
Homepage.init();

var AboutMe = Barba.BaseView.extend({
	namespace: 'about',
	onEnter: function() {
	// The new Container is ready and attached to the DOM.
	$('body').css('background-color', '#000000');
	$('.barba-container').addClass('animated fadeIn delay-150ms');
	$('.top_left').addClass('animated fadeInDown');
	$('#home_about').addClass('animated fadeIn slow');
	$('#work_about').addClass('animated fadeIn slow');
	$('#first').addClass('animated fadeIn');
	$('#second').addClass('animated fadeIn stepone');
	$('#third').addClass('animated fadeIn slow');
	$('#fourth').addClass('animated fadeIn steptwo');
	$('.waitlast').addClass('animated fadeIn slower');
	//Shrink Circle
	$('.circle').addClass('animated shrink_circle fast');
	//Expanding Logo
	$('.top_left').mouseover(function () {
	$('#yagomurakami').text('Yago Murakami');
	});
	$('.top_left').mouseout(function () {
	$('#yagomurakami').text('Ya Mu');
	});
	$('#screen_portf').click(function() {
		$('.left_holder, .right_holder, .center_center').addClass('animated fadeOut faster delay-150ms');
		$('.portf_group').css({'display': 'inline'});
		$('.black_left').css({'background-color': '#ffd700'}).addClass('animated fadeIn faster delay-150ms');
		$('.r40y500, .r40w500').css({'color': '#000000'}).addClass('animated fadeIn faster delay-150ms');
	});
	$('.map').mouseover(function() {
		$('.map_circle').css({'display': 'flex'});
	});
	$('.map').mouseout(function() {
		$('.map_circle').css({'display': 'none'});
	});
	},
	onEnterCompleted: function() {
	// The Transition has just finished.
	$('.top_left').removeClass('animated fadeInDown');
	$('#home_about').removeClass('animated fadeIn slow');
	$('#work_about').removeClass('animated fadeIn slow');
	$('#first').removeClass('animated fadeIn');
	$('#second').removeClass('animated fadeIn stepone');
	$('#third').removeClass('animated fadeIn slow');
	$('#fourth').removeClass('animated fadeIn steptwo');
	$('.waitlast').removeClass('animated fadeIn slower');
	},
	onLeave: function() {
	// A new Transition toward a new page has just started.
	$('.barba-container').removeClass('animated fadeIn');
	},
	onLeaveCompleted: function() {
	// The Container has just been removed from the DOM.
	}
});
// Don't forget to init the view!
AboutMe.init();

var Work = Barba.BaseView.extend({
	namespace: 'work',
	onEnter: function() {
	// The new Container is ready and attached to the DOM.
	$('#barba-wrapper').removeClass("groupup");
	$('body').css('background-color', '#ffffff');
	$('.barba-container').addClass('animated fadeIn delay-150ms');
	$('.top_left').addClass('animated fadeInDown');
	$('#work_about').addClass('animated fadeIn slow');
	$('.section').addClass('animated fadeIn stepone');
	$('.white_left').addClass('animated slideInLeft fast');
	$('#one').addClass('animated fadeIn');
	$('#two').addClass('animated fadeIn stepone');
	$('#three').addClass('animated fadeIn slow');
	$('#four').addClass('animated fadeIn steptwo');
	$('#five').addClass('animated fadeIn slower');
	//Expanding Logo
	$('.top_left').mouseover(function () {
	$('#yagomurakami').text('Yago Murakami');
	});
	$('.top_left').mouseout(function () {
	$('#yagomurakami').text('Ya Mu');
	});
	//hover change image for the portfolio showcase
	$('#one').hover(function () {
		$('#project_one').css({'display': 'inline'}).addClass('animated fadeIn faster delay-150ms');
		$('#project_two, #project_three, #project_four, #project_five').css({'display': 'none'}).removeClass('animated fadeIn faster delay-150ms');
	});
	$('#two').hover(function () {
		$('#project_two').css({'display': 'inline'}).addClass('animated fadeIn faster delay-150ms');
		$('#project_one, #project_three, #project_four, #project_five').css({'display': 'none'}).removeClass('animated fadeIn faster delay-150ms');
	});
	$('#three').hover(function () {
		$('#project_three').css({'display': 'inline'}).addClass('animated fadeIn faster delay-150ms');
		$('#project_one, #project_two, #project_four, #project_five').css({'display': 'none'}).removeClass('animated fadeIn faster delay-150ms');
	});
	$('#four').hover(function () {
		$('#project_four').css({'display': 'inline'}).addClass('animated fadeIn faster delay-150ms');
		$('#project_one, #project_two, #project_three, #project_five').css({'display': 'none'}).removeClass('animated fadeIn faster delay-150ms');
	});
	$('#five').hover(function () {
		$('#project_five').css({'display': 'inline'}).addClass('animated fadeIn faster delay-150ms');
		$('#project_one, #project_two, #project_three, #project_four').css({'display': 'none'}).removeClass('animated fadeIn faster delay-150ms');
	});
	//hover change for client logos
	$('#nike').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/nike.png")'});
	});
	$('#gatorade').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/gatorade.png")'});
	});
	$('#nutella').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/nutella.png")'});
	});
	$('#hendricks').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/hendricks.png")'});
	});
	$('#glenfiddich').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/glenfiddich.png")'});
	});
	$('#cointreau').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/cointreau.png")'});
	});
	$('#bayou').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/bayou.png")'});
	});
	$('#adegavelha').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/adegavelha.png")'});
	});
	$('#fiuza').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/fiuza.png")'});
	});
	$('#grous').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/grous.png")'});
	});
	$('#casalgarcia').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/casalgarcia.png")'});
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
	$('#aerosoles').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/aerosoles.png")'});
	});
	$('#azoris').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/azoris.png")'});
	});
	$('#cci').hover(function () {
		$('.logos_rec').css({'background-image': 'url("img/cci.png")'});
	});
	},
	onEnterCompleted: function() {
	// The Transition has just finished.
	},
	onLeave: function() {
	// A new Transition toward a new page has just started.
	},
	onLeaveCompleted: function() {
	// The Container has just been removed from the DOM.
	}
});
// Don't forget to init the view!
Work.init();

var Projects = Barba.BaseView.extend({
	namespace: 'projects',
	onEnter: function() {
	// The new Container is ready and attached to the DOM.
	$('body').css('background-color', '#ffffff');
	$('.barba-container').addClass('animated fadeIn delay-150ms');
	$('.top_left').addClass('animated fadeInDown');
	$('#work_about').addClass('animated fadeIn slow');
	$('.section').addClass('animated fadeIn stepone');
	//Expanding Logo
	$('.top_left').mouseover(function () {
	$('#yagomurakami').text('Yago Murakami');
	});
	$('.top_left').mouseout(function () {
	$('#yagomurakami').text('Ya Mu');
	});
	},
	onEnterCompleted: function() {
	// The Transition has just finished.
	},
	onLeave: function() {
	// A new Transition toward a new page has just started.
	},
	onLeaveCompleted: function() {
	// The Container has just been removed from the DOM.
	}
});
// Don't forget to init the view!
Projects.init();

//home and about circle showcase
var showcaseArray = [
	'img/0.gif',
	'img/1.png',
	'img/2.png',
	'img/3.png',
	'img/4.png',
	'img/5.png',
	'img/6.png',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.png',
];

$(document).ready(function(){
  $(document).mousemove(function(event){
    var prob = Math.random()* (15 - 1);
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

//animation//
$('document').ready(function(){
	Barba.Pjax.start();
});
