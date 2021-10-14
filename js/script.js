window.onload = function(){
    // 메인슬라이드
    new Swiper('.sw-main-slide',{
        loop:true,
        autoplay:{
            delay:3000,
            disableOnInteraction: false,
        },
        speed:1000,
    });
    // spacialy slide
    new Swiper('.sw-specialty',{
        loop:true,
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        slidesPerView:3,
    });
};