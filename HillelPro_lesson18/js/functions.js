let interval;

const initSlider = () => {
    const imgWrapper = createElement(`img`, `#sliderWrapper`, ``, {alt: 'image', id: 'imageWrapper'});
    imgWrapper.src = `./img/` + `${images[imgCount]}`;
}
const prevBtn = () => {
    createElement(`a`, '#sliderWrapper', ``, {id: 'prevBtn', href: '#'}, {
        click: (event) => {
            event.preventDefault();
            imgCount = imgCount <= 0 ? images.length - 1 : imgCount - 1;
            document.getElementById('imageWrapper').src = `./img/` + images[imgCount];
            if (interval) {
                interval = clearedInterval(interval)
                interval = toggleAutoPlay(interval);
            }

        }
    })
    createElement(`img`, `#prevBtn`, ``, {id: 'leftImg', src: './img/svg/left.svg'});
}
const nextBtn = () => {
    createElement(`a`, '#sliderWrapper', '', {id: `nextBtn`, href: '#'}, {
        click: (event) => {
            event.preventDefault();
            imgCount = imgCount === images.length - 1 ? 0 : imgCount + 1;
            document.getElementById('imageWrapper').src = `./img/` + images[imgCount];
            if (interval) {
                interval = clearedInterval(interval)
                interval = toggleAutoPlay(interval);
            }
        }
    })
    createElement(`img`, `#nextBtn`, ``, {id: 'rightImg', src: './img/svg/right.svg',});
}

const autoPlay = () => {
    createElement(`a`, `#main`, '', {id: 'autoPlayBtn', href: '#'}, {
        click: (event) => {
            event.preventDefault();
            interval = toggleAutoPlay(interval);
            toggleImage()
        }
    })
    createElement(`img`, `#autoPlayBtn`, ``, {id: 'autoImg', src: `./img/svg/play.svg`})
}
const toggleAutoPlay = (interval) => {
    if (interval) {
       interval = clearedInterval(interval)
    } else {
        interval = setInterval(() => {
            imgCount = imgCount === images.length - 1 ? 0 : imgCount + 1;
            // If U need reverse
            // imgCount = imgCount === 0 ? images.length - 1 : imgCount - 1;
            document.getElementById(`imageWrapper`).src = `./img/` + images[imgCount];
        }, 3000)
    }
    return interval
}
const toggleImage = () => {
    const autoImg = document.getElementById(`autoImg`)
    if (autoImg.src.includes('play')) {
        document.getElementById(`autoImg`).src = `./img/svg/pause.svg`;
    } else {
        document.getElementById(`autoImg`).src = `./img/svg/play.svg`;
    }
}
const clearedInterval = (interval) => {
    clearInterval(interval);
    interval = null;
    return interval;
}