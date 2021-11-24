
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
                news.forEach((value,index) => {
                    intervalId = setInterval(()=> {
                        value.classList.add('active');
                    }, index * 100)
                })
            }

            if(item.classList.contains('r-styleList') || item.classList.contains('l-styleList')) {
                item.classList.add('active');
            }

            if(item.classList.contains('itemContents')) {
                let itemList = item.querySelectorAll('.itemList');
                itemList.forEach((value, index) => {
                    setInterval(()=> {
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

    // ハンバーガー
    $('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });

}
