$(function(){
    // 뷰포트의 가로길이가 1024px이상이면 pc버전, 1024미만이면 모바일버전으로 주메뉴 애니메이션 설정
    if($(window).width()>=1024){
        // 화면 위쪽에서는 top-btn이 안보이다가 500px 스크롤되면 top-btn 보임
        if($(this).scrollTop() > 500) {
            $(".top-btn").addClass("show");
        }else {
            $(".top-btn").removeClass("show");
        }
         // 주메뉴에 마우스오버하면 서브메뉴와 배경 나타남
        $("nav > ul > li").mouseenter(function(){
            $(".sub").stop().slideDown();
            $(".sub-bg").stop().slideDown();
        });
        // 메뉴 영역에서 마우스 아웃하면 서브메뉴와 배경 사라짐
        $("nav").mouseleave(function(){
            $(".sub").stop().slideUp();
            $(".sub-bg").stop().slideUp();
        });
    }else{
        // accordion 메뉴
        $('nav > ul > li > a').click(function(){
            if($(this).attr('class') != 'active' ){
            $('nav > ul > li > a').next().slideUp();
            $('nav > ul > li > a').removeClass('active');
           $(this).addClass('active');
           $(this).next().slideDown();
        }else{
           $(this).removeClass('active');
           $(this).next().slideUp();
            }
        });
    }
    // 탑메뉴 영역에서 KOR을 클릭하면 서브메뉴가 나타남
    $(".top-menu ul li:last-child a").click(function(){
        $(".language").toggle();
    });
    // 메인 슬라이드
    const swiper = new Swiper(".mainSwiper", {
        loop:true,
        autoplay:{
            delay:3000,
        },
        speed:1000,
        effect:'fade',
        pagination:{
            el:'.swiper-pagination',
            type:'fraction',
            // 현재 페이지 번호에 0 붙이기
            formatFractionCurrent:function(number){
                return '0'+number;
            },
            // 총 페이지 수에 0 붙이기
            formatFractionTotal:function(number){
                return '0'+number;
            },
            renderFraction:function(currentClass, totalClass){
                return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
            }
        },
        navigation:{
            nextEl:'.mainSwiper .swiper-button-next',
            prevEl:'.mainSwiper .swiper-button-prev',
        },
        // 메서드 사용
        on:{
            // 초기값
            init:function(){
                // 모든 swiper-slide의 progress-bar에서 클래스 제거
                $(".swiper-progress-bar").removeClass("animate");
                // 첫번째 swiper-slide에 해당하는 progress-bar에만 클래스 추가
                // eq(0) : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾는다. 없으면 null반환
                $(".swiper-progress-bar").eq(0).addClass("animate");
            },
            // 슬라이드가 바뀔 때
            slideChangeTransitionStart:function(){
                $(".swiper-progress-bar").removeClass("animate");
            },
            // 슬라이드가 끝날 때
            slideChangeTransitionEnd:function(){
                $(".swiper-progress-bar").eq(0).addClass("animate");
            },
        }
    });
    // s4영역 scrollTrigger 애니메이션
    gsap.registerPlugin(ScrollTrigger);
    // 왼쪽 영역의 txt1 영역 대기시간
    const proAni0 = gsap.timeline()
    .to(".product-box .cont .txt1",{
        duration:10, delay:2
    });
    
    // 왼쪽 영역의 txt1 영역 서서히 사라짐
    const proAni1 = gsap.timeline()
    .to(".product-box .cont .txt1",{
        opacity:0, duration:5, delay:0
    });
    // 왼쪽 영역의 아래쪽 마스크 영역의 높이 0
    const proAni2 = gsap.timeline()
    .to(".product-box .left-cover-box .cover3",{
        height:0, duration:100, delay:5
    });
    // 왼쪽 영역의 위쪽 마스크 영역의 높이 0
    const proAni3 = gsap.timeline()
    .to(".product-box .left-cover-box .cover1",{
        height:0, duration:100, delay:5
    });
    // 왼쪽 영역의 왼쪽 마스크 영역의 넓이 0
    const proAni4 = gsap.timeline()
    .to(".product-box .left-cover-box .cover4",{
        width:0, duration:0, delay:5
    });
    // 왼쪽 영역의 오른쪽 마스크 영역의 넓이 0
    const proAni5 = gsap.timeline()
    .to(".product-box .left-cover-box .cover2",{
        width:0, duration:0, delay:5
    });

    // 오른쪽 영역의 위쪽 마스크 높이 50%
    const proAni6 = gsap.timeline()
    .to(".product-box .right-cover-box .cover1",{
        height:"50%", duration:100
    });
    // 오른쪽 영역의 아래쪽 마스크 높이 50%
    const proAni7 = gsap.timeline()
    .to(".product-box .right-cover-box .cover3",{
        height:"50%", duration:100
    });
    // 오른쪽 영역의 왼쪽 마스크 넓이 50%
    const proAni8 = gsap.timeline()
    .to(".product-box .right-cover-box .cover4",{
        width:"50%", duration:100
    });
    // 오른쪽 영역의 오른쪽 마스크 넓이 50%
    const proAni9 = gsap.timeline()
    .to(".product-box .right-cover-box .cover2",{
        width:"50%", duration:100
    });
    // 오른쪽 영역의 txt2 영역 서서히 나타남
    const proAni10 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        opacity:1, delay:30, duration:100
    });
    // 오른쪽 영역의 txt2 영역 대기시간
    const proAni11 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        duration:100
    });
    // 오른쪽 영역의 첫번째 이미지 사라짐
    const proAni12 = gsap.timeline()
    .to(".product-box .img-box .img-box3",{
        opacity:0, duration:0, delay:100
    });
    // 오른쪽 영역의 두번째 이미지 나타남
    const proAni25 = gsap.timeline()
    .to(".product-box .img-box .img-box1",{
        opacity:1, duration:0, delay:100
    });

    // 왼쪽 영역의 아래쪽 마스크 영역의 높이 50%
    const proAni13 = gsap.timeline()
    .to(".product-box .left-cover-box .cover3",{
        height:"50%", duration:100, delay:10
    });
    // 왼쪽 영역의 위쪽 마스크 영역의 높이 50%
    const proAni14 = gsap.timeline()
    .to(".product-box .left-cover-box .cover1",{
        height:'50%', duration:100, delay:10
    });
    // 왼쪽 영역의 왼쪽 마스크 영역의 넓이 50%
    const proAni15 = gsap.timeline()
    .to(".product-box .left-cover-box .cover4",{
        width:'50%', duration:100, delay:10
    });
    // 왼쪽 영역의 오른쪽 마스크 영역의 넓이 50%
    const proAni16 = gsap.timeline()
    .to(".product-box .left-cover-box .cover2",{
        width:'50%', duration:100, delay:10
    });
    // 왼쪽 영역의 txt3 영역 서서히 나타남
    const proAni17 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        opacity:1, duration:100, delay:15
    });
    // 왼쪽 영역의 txt3 영역 대기시간
    const proAni20 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        duration:100, delay:8
    });
    // 왼쪽 영역의 txt3 영역 크기 1(100%)
    const proAni18 = gsap.timeline()
    .to(".product-box .cont .txt3",{
        scale:1, duration:0
    });

    // 오른쪽 영역의 txt2 영역 서서히 사라짐
    const proAni19 = gsap.timeline()
    .to(".product-box .cont .txt2",{
        opacity:0, duration:5, delay:10
    });
    // 오른쪽 영역의 아래쪽 마스크 영역의 높이 0
    const proAni21 = gsap.timeline()
    .to(".product-box .right-cover-box .cover3",{
        height:0, duration:0, delay:12
    });
    // 오른쪽 영역의 위쪽 마스크 영역의 높이 0
    const proAni22 = gsap.timeline()
    .to(".product-box .right-cover-box .cover1",{
        height:0, duration:0, delay:12
    });
    // 오른쪽 영역의 왼쪽 마스크 영역의 넓이 0
    const proAni23 = gsap.timeline()
    .to(".product-box .right-cover-box .cover4",{
        width:0, duration:100, delay:12
    });
    // 오른쪽 영역의 오른쪽 마스크 영역의 넓이 0
    const proAni24 = gsap.timeline()
    .to(".product-box .right-cover-box .cover2",{
        width:0, duration:100, delay:12
    });
    
    const productAni = gsap.timeline({
        scrollTrigger:{
            trigger:".product",
            start:"center center+=1%",
            end:"bottom+=4000px top",
            pin:true,
            scrub:1.5
        }
    });
    // scrollTrigger와 timeline 연동
    productAni.add([proAni0])
              .add([proAni1, proAni2, proAni3, proAni4, proAni5, proAni6, proAni7, proAni8, proAni9, proAni10, proAni11, proAni12, proAni25])
              .add([proAni13, proAni14, proAni15, proAni16, proAni17, proAni18, proAni19, proAni21, proAni22, proAni23, proAni24])
              .add([proAni20]);

    // 커스텀 커서 포인터(custom-cursor)
    let cursor = $(".custom-cursor");
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    // 커스텀 커서 초기화
    gsap.set(cursor, {
        scale:0,
        opacity:0.85
    });
    // 커스텀 커서가 마우스를 따라다님
    gsap.to({}, {
        duration:0.016,
        repeat:-1,
        onRepeat : function(){
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            gsap.set(cursor, {
                x: mouseX,
                y: mouseY
            });
        }
    });
    // custom-cursor-area영역에 마우스무브 이벤트 설정
    $(".custom-cursor-area").on("mousemove", function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });
    // custom-cursor-area영역에 마우스를 올리면 커스텀 커서 나타남
    $(".custom-cursor-area").on("mouseenter", function(){
        scale.play();
    });
    // custom-cursor-area영역에 마우스를 아웃하면 커스텀 커서 사라짐
    $(".custom-cursor-area").on("mouseleave", function(){
        scale.reverse();
    });
    let scale = gsap.timeline({paused:true})
        .to(cursor, {
            scale:1,
            trasformOrigin:'center'
    });

    // s10 흐르는 글자
    let $text = $('.inner .track');
    let $wrap = $('.inner');
    // .track를 복제해서 .inner에 추가함
    $text.clone().appendTo($wrap);
    let marqueeText = TweenMax.to($wrap, 20, { // 20는 속도
        x: -$text.width(), // x는 가로, -이므로 왼쪽으로 이동
        ease: Linear.easeNone, // 등속운동
        repeat: Infinity // -1은 무한반복
    });

    $wrap.mouseenter(function() {
        marqueeText.timeScale(0.5);
    });
    $wrap.mouseleave(function() {
        marqueeText.timeScale(1);
    });

     // s11 슬라이드
     const newsSwiper = new Swiper(".newsSwiper", {
        slidesPerView:5,
        spaceBetween:60,
        loop:true,
        navigation:{
            nextEl:'.newsSwiper .swiper-button-next',
            prevEl:'.newsSwiper .swiper-button-prev',
        },
        breakpoints:{
            1200:{
                slidesPerView:5,
                spaceBetween:60,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:40
            },
            768:{
                slidesPerView:3,
                spaceBetween:40
            },
            480:{
                slidesPerView:2,
                spaceBetween:20
            },
            360:{
                slidesPerView:2,
                spaceBetween:20
            }
        }
    });

    // family site
    // 마우스 오버할 때,
    // $(".family").hover(function(){
    //     $(".family-site").stop().slideDown();
    //     $(".family > a span").stop().css("transform","scaleY(-1)");
    // },
    // function(){
    //     $(".family-site").stop().slideUp();
    //     $(".family > a span").stop().css("transform","scaleY(1)");
    // });
    // 마우스 클릭할 때,
    let sw = 0;
    $(".family").click(function(e){
        e.preventDefault();
        if(sw == 0) {
            sw = 1;
            $(this).find("span").css("transform","scaleY(-1)");
            $(".family-site").stop().slideDown();
        } else {
            sw = 0;
            $(this).find("span").css("transform","scaleY(1)");
            $(".family-site").stop().slideUp();
        }
    });

    // top버튼(.top-btn)
    // footer영역에서는 footer의 중간에 위치하다가 footer영역이 사라지면 화면 오른쪽 아래에 고정된 위치로 설정
    // entries: IntersectionObserverEntry 인스턴스의 배열
    const topBtn = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const $target = entry.target;
            // isIntersecting: 관찰 대상이 현재 루트 안에 포함되어 있는지의 여부를 확인합니다.
            if(entry.isIntersecting){
                document.querySelector(".top-btn").classList.add("fixed");
            }else {
                document.querySelector(".top-btn").classList.remove("fixed");
            }
        });
    });
    const $top = document.querySelectorAll("footer");
    $top.forEach((item) => {
        topBtn.observe(item);
    });
    
    $(window).scroll(function(){
        // 스크롤 내릴 때마다 section안의 자식 콘텐츠들의 애니메이션 실행
        // section개수만큼 반복
        $("section").each(function(){
            // 각 섹션의 top(시작위치)값을 sectionTop변수에 저장
            let sectionTop = $(this).offset().top-300;
            let sectionTop2 = $(this).offset().top-800;
            let sectionTop3 = $(this).offset().top-200;
            // 각 섹션의 bottom(끝위치)값을 sectionBottom변수에 저장
            let sectionBottom = sectionTop + $(this).height();
            let sectionBottom2 = sectionTop2 + $(this).height();
            let sectionBottom3 = sectionTop3 + $(this).height();
            // 만약 섹션 영역이 viewPort안으로 들어오면
            if(sectionTop < $(window).scrollTop() && sectionBottom > $(window).scrollTop()) {
                $(this).addClass("child-ani");
            }
            if(sectionTop2 < $(window).scrollTop() && sectionBottom2 > $(window).scrollTop()) {
                $(this).addClass("child-ani2");   
            }
            if(sectionTop3 < $(window).scrollTop() && sectionBottom3 > $(window).scrollTop()) {
                $(this).addClass("child-ani3");
            }else {
                $(this).removeClass("child-ani3");
            }
        });
    });
    // top-btn을 클릭하면 화면 맨 위로 이동
    $(".top-btn").click(function(){
        $("html, body").animate({scrollTop : 0});
    });

    // 마우스 스크롤을 내리면 header가 사라지고(addClass(active)),
    // 마우스 스크롤을 올리면 header가 내려오도록 설정(removeClass(active))하는 함수 선언
    function headerHide(){
        // 변수 선언할 때 $를 변수명에 붙이면 변수에 저장된 객체의 속성값도 저장
        let $window = $(window);
        let $header = $('header');
        let work_scroll = null;
        let current_scroll = 0;
        let last_scroll = 0;
        let move_scroll = 0;
        // window객체에 scroll 이벤트 설정
        $(window).on("scroll", function(){
            // 스크롤 중인지 감지
            work_scroll = true;
            // 만약 window객체의 scrollTop값이 header의 높이값보다 커지면 header에 active클래스를 추가하고,
            // header의 높이값보다 크지 않으면 header에서 active클래스를 제거
            // if($window.scrollTop() > $header.height()){
            //     $header.addClass("active");
            // }else {
            //     $header.removeClass("active");
            // }
            // 0.05초마다 스크롤 이벤트를 감지하여 화면이 이동중이고, body에 open클래스가 설정되어 있지 않다면
            // has_scroll함수를 호출하고, work_scroll변수의 값을 false로 만듦.
            setInterval(function(){
                if(work_scroll == true && !$("body").hasClass("open")){
                    has_scroll();
                    work_scroll = false;    // 화면 멈춤
                }
            }, 50);

            function has_scroll(){
                // current_scroll 변수에 window의 scrollTop값을 저장
                // scrollTop() : 화면 이동시 window의 위치값
                current_scroll = $(this).scrollTop();
                // 만약 last_scroll-currnt_scroll값이 move_scroll값보다 적게 스크롤되면 아무 반응 없음.
                if(Math.abs(last_scroll - current_scroll) <= move_scroll)
                    return;
                // 현재 scrollTop값이 last_scroll(0)보다 크면 header를 올려서 감추고,
                // last_scroll(0)보다 크지 않으면 header를 내려서 보이게 함.
                if(current_scroll > last_scroll) {
                    if(current_scroll > $header.height()){
                        gsap.to($header, 0.4, {
                            autoAlpha : 0,              // 투명도
                            y : -$header.outerHeight(), // header의 높이만큼 올라감
                            ease:Power3.easeOut
                        });
                    }
                }else {
                    gsap.to($header, 0.4, {
                        autoAlpha : 1,
                        y : 0,
                        ease:Power3.easeOut
                    });
                }
                // current_scroll의 값을 last_scroll변수에 이동시킴
                // 마우스 스크롤을 내리고 있는지 올리고 있는지 감지 가능
                last_scroll = current_scroll;
            }
        });
    }
    // 함수 호출
    headerHide();

    // section의 data-bg속성값에 따라 body의 배경색 변경하기
    // $sections변수에 section객체를 모두 저장
    // $sections[0] = "section"; ... $sections[11] = "section"
    const $sections = $('section');    
    // body의 배경색을 첫번째 section의 data-bg값으로 설정
    $('body').css('background', $sections.first().data('bg'));
    // window객체에 scroll이벤트 설정
    $(window).on('scroll', function() {
        // $section변수에 $sections배열의 값을 복사, .은 메서드 체인
        const $section = $sections
        .map(function() {
            // $(this)는 section 각각의 객체, $el변수에 저장
            const $el = $(this);
            // 각 section의 영역을 rect 변수에 저장
            // this.getBoundingClientRect() : section영역의 크기와 viewport의 상대적인 위치 정보를 제공하는 메서드
            const rect = this.getBoundingClientRect();
            return { el: $el, rect: rect };
        })
        // 12개의 section을 배열로 처리
        .toArray()
        .find(function(section) {
            return section.rect.bottom >= ($(window).height() * 0.5);
        });
        // viewPort화면 안에 section이 들어오면 body의 배경색을 bg속성색으로 변경
        if ($section) {
            $('body').css('background', $section.el.data('bg'));
        }
    });

    // 뷰포트의 가로길이가 1280미만인 기기에서 작동함
    if($(window).width() < 1280) {
        // 모바일 버전 menu-icon 클릭하면 nav 사라짐
        $("#menu-icon").click(function(){
            $("nav").animate({
                right:0
            });
        });
        // 모바일 버전 close-btn 클릭하면 nav 사라짐
        $("#close-btn").click(function(){
            $("nav").animate({
                right:"-100%"
            });
        });
    }
});