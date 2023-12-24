(function($){

    // 배너 이미지 슬라이드
    const MySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
      },
      pagination : {
        el : '.swiper-pagination',
        type : 'bullets',
      },
      autoplay : {
        delay: 5000,
      },
      
    });

    // 영화 차트 슬라이드
    const MySwiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 4,
      spaceBetween: 24,
      // mousewheel: {
      //   invert: true,
      // },
      keyboard: {
        enalbed: true,
        onlyInViewport: false,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints : {
        600 : {
          slidesPerView: 1.4,
          spaceBetween: 24
        },
        768 : {
          slidesPerView: 2,
          spaceBetween: 24
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 24
        },
      }
    });

    // 영화 차트 탭 메뉴
    const movBtn = $(".movie_title > ul > li");
    const movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function(e) {
      e.preventDefault();
      const target = $(this);
      const index = target.index();
      console.log(index);
      movBtn.removeClass("active");
      target.addClass("active");
      movCont.css("display", "none");
      movCont.eq(index).css("display", "block");
    })

    // 공지사항 탭 메뉴
    const tabMenu = $(".notice");

    // 컨텐츠 내용 숨기기 & active가 붙은 건 보이기
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active > ul").show();

    function tabList(e) {
      e.preventDefault();     // #의 기능 차단
      const target = $(this);
      target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
      // 버튼을 클릭하면 ~ul을 보여주고
      // 부모의 li태그에 클래스를 추가, 형제의 li태그에 클래스 제거
      // 제거한 자식의 ul 태그를 숨겨줌
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
  
})(jQuery);     