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

    $(window).on('resize', function(){
        $('.gnb').removeClass('on');
        $('.sub_menu').removeAttr('style')
    })

    $('.mclone').on('click', function(){
        var siteMap = $('.gnb').clone().addClass('siteMap').wrap('<div></div>');
        console.log(siteMap);
        $('body').append(siteMap)
    })
})