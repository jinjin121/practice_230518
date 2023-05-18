$(function () {
    $('.mainSlide').slick({
        arrows: false,
        // vertical: true,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        //마우스를 올려도 자동재생 되도록 만들어 준다.
        pauseOnFocus: false,
        //클릭하였을때 멈추는 것을 없애준다
    });

    $('.mainVisual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소의 번호를 알려줘
        let idx = $(this).index();
        //변수 이름(index->idx)
        console.log(idx);
        $('.mainSlide').slick('slickGoTo', idx, false);
    });

    $('.mainVisual .arrows .left').on('click', function () {
        $('.mainSlide').slick('slickPrev');
    });
    $('.mainVisual .arrows .right').on('click', function () {
        $('.mainSlide').slick('slickNext');
    });



});