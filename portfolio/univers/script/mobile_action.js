$(document).ready(function(){
    $('#hamberg').click(function(){
        $('#mobile_gnb').show();
        $('.mobile_gnb_box').stop().animate({width:'80%'})
    })

    $('.m_close_btn').click(function(){
        $('#mobile_gnb').hide();
        $('.mobile_gnb_box').stop().animate({width:'0'})
    })

    $('.mobile_gnb_box > ul > li ').click(function(){
        $(this).find('.mobile_navi').slideToggle();

    })
})