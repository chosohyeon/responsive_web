$(function(){
    $('.gnb>ul>li>a').on('click', function(e){
        if($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.sub_menu').slideUp();
            $(this).next().stop().slideToggle();
        }
        
    })

    $('.mbtn').on('click',function(){
        $('.gnb').toggleClass('on')
    })
})