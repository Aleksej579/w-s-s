// Open mobile menu
let body = document.querySelector('body');
let mobMenu = document.querySelector('#mob-menu');
let nav = document.querySelector('.header__nav');

mobMenu.onclick = function(){
	this.classList.toggle('is-close');
	nav.classList.toggle('is-active');
	if (nav.classList.contains('is-active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

// Read more
let blockShortText = document.querySelector('#service-description__wrapper');
let btnReadMore = document.querySelector('#read-more');

btnReadMore.onclick = function(){
	blockShortText.style.maxHeight = "100%";
	btnReadMore.style.display = 'none';
};

//Hightlight item select menu
let arrLi = nav.querySelectorAll('ul li')
nav.addEventListener('click', e => {
	arrLi.forEach(item => item.classList.remove('is-select_nav'))
	if (e.target.tagName == "A") {
		e.target.parentElement.classList.add('is-select_nav');
	}
})

//Hightlight item select language button
let blockLangSwitch = document.querySelector('.header__language-switch');

let arrBtn = blockLangSwitch.querySelectorAll('li')
blockLangSwitch.addEventListener('click', e => {
	arrBtn.forEach(item => item.classList.remove('is-select_lang'))
	if (e.target.tagName == "BUTTON") {
		e.target.parentElement.classList.add('is-select_lang');
	}
})

// Video control
let btnVideo = document.querySelector('.play-control');
let video = document.querySelector('video');
let btnPause = document.querySelector('.pause');
let btnPlay = document.querySelector('.play');

btnPlay.style.display = 'none';

btnVideo.addEventListener('click', () => {
	if (video.paused) {
        video.play();
		btnPlay.style.display = 'none';
		btnPause.style.display = 'block';
    } else {
        video.pause();
		btnPause.style.display = 'none';
		btnPlay.style.display = 'block';
    }
})