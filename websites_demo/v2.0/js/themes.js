$(function(){
    $("#portfolio").elastic_grid({
        'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items' :
        [
            {
                'title'         : 'Azuki bean',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail.jpg', 'img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg', 'img/content/thumbnail4.jpg'],
                'large'         : ['img/content/thumbnail.jpg', 'img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg', 'img/content/thumbnail4.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Interior']
            },
            {
                'title'         : 'Swiss chard pumpkin',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail5.jpg', 'img/content/thumbnail6.jpg', 'img/content/thumbnail7.jpg', 'img/content/thumbnail8.jpg'],
                'large'         : ['img/content/thumbnail5.jpg', 'img/content/thumbnail6.jpg', 'img/content/thumbnail7.jpg', 'img/content/thumbnail8.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Design']
            },
            {
                'title'         : 'Spinach winter purslane',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail11.jpg','img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg'],
                'large'         : ['img/content/thumbnail11.jpg','img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Infrastruktur', 'Design']
            },
            {
                'title'         : 'Azuki bean',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail4.jpg', 'img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg', 'img/content/thumbnail4.jpg'],
                'large'         : ['img/content/thumbnail4.jpg', 'img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg', 'img/content/thumbnail4.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Interior']
            },
            {
                'title'         : 'Swiss chard pumpkin',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail10.jpg', 'img/content/thumbnail6.jpg', 'img/content/thumbnail7.jpg', 'img/content/thumbnail8.jpg'],
                'large'         : ['img/content/thumbnail10.jpg', 'img/content/thumbnail6.jpg', 'img/content/thumbnail7.jpg', 'img/content/thumbnail8.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Design']
            },
            {
                'title'         : 'Spinach winter purslane',
                'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail'     : ['img/content/thumbnail3.jpg','img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg'],
                'large'         : ['img/content/thumbnail3.jpg','img/content/thumbnail1.jpg', 'img/content/thumbnail2.jpg', 'img/content/thumbnail3.jpg'],
                'button_list'   :
                [
                    { 'title':'Demo', 'url' : '#' },
                    { 'title':'Download', 'url':'#'}
                ],
                'tags'          : ['Infrastruktur', 'Design']
            }

        ]
    });
});

// tooltip

$('.fa').tooltip();

// owl carousel

$(document).ready(function() {
 
  var owl = $("#owl-gallery");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay : true
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});

// 