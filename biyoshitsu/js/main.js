
'use strict'; {
    // intersection obsever API start
    const targets = document.querySelectorAll('.target');

    console.log(targets);

    let intervalId;

    function callback(entries, obs) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) {
                return;
            };
            const item = entry.target
            console.log(item);

            if (item.classList.contains('newsContents')) {
                let news = item.querySelectorAll('.newsList');
                news.forEach((value, index) => {
                    intervalId = setInterval(() => {
                        value.classList.add('active');
                    }, index * 100);
                })
            }


            if (item.classList.contains('r-styleList') || item.classList.contains('l-styleList')) {
                item.classList.add('active');
            }

            if (item.classList.contains('itemContents')) {
                let itemList = item.querySelectorAll('.itemList');
                itemList.forEach((value, index) => {
                    setInterval(() => {
                        value.classList.add('active');
                    }, index * 300)
                })
            }

            obs.unobserve(item);
        })
    }

    const options = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px'
    }

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
    });
    // inter section observer API end

    // cahnge backgroundcolor
    const root = document.querySelector(':root');
    const black = document.getElementById('black');
    const pink = document.getElementById('pink');
    const yellow = document.getElementById('yellow');
    const colorSet = {
        black : {
            mainColor : '#666666',
            bgColor : '#e6e6e6',
            textColor: '#333333',
            subColor: '#cccccc'
        },
        pink : {
            mainColor : '#ff7fbf',
            bgColor : '#ffdbed',
            textColor: '#804060',
            subColor: '#ffa8d3'
        },
        yellow: {
            mainColor : '#ffc489',
            bgColor : '#ffead6',
            textColor: '#806142',
            subColor: '#ffdbb7'
        }
    }

    black.addEventListener('click', ()=> {
        root.style.setProperty('--main-color', colorSet.black.mainColor);
        root.style.setProperty('--main-bg-color', colorSet.black.bgColor);
        root.style.setProperty('--text-color', colorSet.black.textColor);
        root.style.setProperty('--sub-color', colorSet.black.subColor);
    });

    pink.addEventListener('click', ()=> {
        root.style.setProperty('--main-color', colorSet.pink.mainColor);
        root.style.setProperty('--main-bg-color', colorSet.pink.bgColor);
        root.style.setProperty('--text-color', colorSet.pink.textColor);
        root.style.setProperty('--sub-color', colorSet.pink.subColor);
    });

    yellow.addEventListener('click', ()=> {
        root.style.setProperty('--main-color', colorSet.yellow.mainColor);
        root.style.setProperty('--main-bg-color', colorSet.yellow.bgColor);
        root.style.setProperty('--text-color', colorSet.yellow.textColor);
        root.style.setProperty('--sub-color', colorSet.yellow.subColor);
    });

    // end change bgc

    // ハンバーガー
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav').toggleClass('show');
    });

    function fadeAnime() {
        $('.fadeInTrigger').each(function () {
            var elemPos = $(this).offset().top - 50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeIn');
            } else {
                $(this).removeClass('fadeIn');
            }
        });
    }
    // スクロールをしたら動く
    $(window).scroll(function () {
        fadeAnime();
    });

    // 画面が読み込まれたら動く
    $(window).on('load', function () {
        fadeAnime();
    });

}
