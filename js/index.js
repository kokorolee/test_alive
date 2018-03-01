$(window).on('load', function(){

  // active menu
  $('#btn-menu').on('click', function(){
    $('.menu-wrapper').show(400)
  })
  //close menu
  $('#close-menu').on('click', function(){
    $('.menu-wrapper').hide(400)
  })
})
