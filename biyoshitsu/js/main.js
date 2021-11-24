'use strict'; {
    // intersection obsever API start
    const targets = document.querySelectorAll('.target');

    console.log(targets);


    function callback(entries, obs) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) {
                return;
            };
            const item = entry.target
            console.log(item);

            if (item.classList.contains('newsContents')) {
                let news = item.querySelectorAll('.newsList');
                news.forEach((value,index) => {
                    setInterval(()=> {
                        value.classList.add('active');
                    }, index * 100)
                })
            }

            if(item.classList.contains('r-styleList') || item.classList.contains('l-styleList')) {
                item.classList.add('active');
            }

            obs.unobserve(item);
        })
    }

    const options = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px'
    }

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
    });
    // inter section observer API end


    const topTitle = document.querySelector('.topTitle');
    
    let top = 100; //初期値

    function calcTop() {
        if(top <= 470 && top > 0) {
            console.log(scrollY);
            top = 100 + scrollY ;
            topTitle.style.top = top + 'px';
        } 
    }

    // document.addEventListener('scroll',calcTop);
}

// ハンバーガー
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });

