/*eslint-env browser*/
$(function(){
    if ($(window).width() <= 699){
        $('i.hamMenu').click(function(){
        $('nav').stop().slideToggle();
        $('i.hamMenu').toggleClass('fa-times');
    })
    $('.disabled:first').click(function(){
        $('#sub1').stop().slideToggle();
        $('.fa-chevron-down:first').toggleClass('fa-chevron-up');
    })
    $('.disabled:last').click(function(){
        $('#sub2').stop().slideToggle();
        $('.fa-chevron-down:last').toggleClass('fa-chevron-up');
    })
    } else {
        $('.disabled:first').hover(function(){
        $('#sub1').stop().slideToggle();
        })
        $('.disabled:last').hover(function(){
        $('#sub2').stop().slideToggle();
        })
    }
})
