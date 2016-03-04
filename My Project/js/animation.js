$(document).ready(function(){
  $('.image').on('mouseenter','img',function(){
    $(this).closest('.image').find('span').slideToggle();
  });
  $('.image').on('mouseleave','img',function(){
    $(this).closest('.image').find('span').slideToggle();
  });
  $('.home-divs').on('mouseenter', 'a', function(){
    $(this).css({'color':'white','background-color':'deepskyblue'});
  });
  $('.home-divs').on('mouseleave', 'a', function(){
    $(this).css({'color':'#fff','background-color':'black'});
  });
  $('.row-divs').on('mouseenter', 'a', function(){
    $(this).closest('a').find('.btn-primary').css({'color':'white','background-color':'deepskyblue'});
  });
  $('.row-divs').on('mouseleave', 'a', function(){
    $(this).closest('a').find('.btn-primary').css({'color':'#fff','background-color':'black'});
  });
  $('.pictures').on('click', 'img', function(){
    var src = $(this).attr('src');
    $("#img").attr("src", src);
  });
  $(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
      // Remove the src so the player itself gets removed, as this is the only
      // reliable way to ensure the video stops playing in IE
      $("#trailer-video-container").empty();
  });
  $('.videos').on('click', 'img', function(){
    var trailerYouTubeId = $(this).data('src');
    var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
    $("#trailer-video-container").empty().append($("<iframe></iframe>", {
      'id': 'trailer-video',
      'type': 'text-html',
      'src': sourceUrl,
      'frameborder': 0
    }));
  });
  $('.effect').on('mouseenter', 'a', function(){
    $(this).css({'background-color':'black','color':'white'});
  });
  $('.effect').on('mouseleave', 'a', function(){
    $(this).css({'background-color':'white','color':'black'});
  });
  $('.panel-heading').click(function(){
    if($(this).hasClass('active-tab')){
      $(this).toggleClass('active-tab');
    }
    else{
      $('.active-tab').toggleClass('active-tab');
      //$(this).closest('a').find('.active').removeClass('active');
      $(this).toggleClass('active-tab');
    }
  });
  $('table').on('mouseenter','a',function(e) {
    $(this).css({'cursor':'default','text-decoration':'none'});
    $(this).attr("href","#");
  });
  $('.nav-tabs').on('click', '#videos-tab', function(){
    //console.log("inside 1");
    $('.pages').hide();
  });
  $('.nav-tabs').on('click','#pics-tab', function() {
    //console.log("inside 2");
    $('.pages').show();
    $('.pages').find('#p1').closest('li').addClass('active');
    $('.pages').find('#p2').closest('li').removeClass('active');
  });
  $('.pages').on('click','#prev',function(){
    $('#p1').click();
  });
  $('.pages').on('click','#next',function(){
    $('#p2').click();
  });
});
