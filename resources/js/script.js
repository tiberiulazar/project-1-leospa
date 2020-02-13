
document.getElementById('mobile-menu-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector('.mobile-nav').classList.toggle('active');
    
    if(this.childNodes[0].name !== 'close') {
        this.childNodes[0].name = 'close';
    } else {
        this.childNodes[0].name = 'menu';
    }
    
})








var tst_1 = "First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.";

var tst_2 = "Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other. ";

var tst_3 = "Gave read use way make spot how nor. In daughter goodness an likewise oh consider at procured wandered. Songs words wrong by me hills heard timed. Happy eat may doors songs. Be ignorant so of suitable dissuade weddings together. Least whole timed we is. An smallness deficient discourse do newspaper be an eagerness continued. Mr my ready guest ye after short at. ";

var tst_4 = "Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six. Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is. ";

var slideNumber = 1;

function changeTextEffect(text) {
    
        document.querySelector('.testimonial-slide').classList.add('tst-active');
        setTimeout(function () {
            document.getElementById('tst-slide-text').innerHTML = text;
        }, 300);
        setTimeout(function () {
            
            document.querySelector('.testimonial-slide').classList.remove('tst-active');
        }, 600);
}

document.getElementById("tst-slide-1").addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.tst-slider-btn.active').classList.remove('active');
    this.classList.add('active');
    if (slideNumber !== 1) {
        changeTextEffect(tst_1);
        slideNumber = 1;
    }
});

document.getElementById("tst-slide-2").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.tst-slider-btn.active').classList.remove('active');
    this.classList.add('active');
    if (slideNumber !== 2) {
        changeTextEffect(tst_2);
        slideNumber = 2;
    }
});

document.getElementById("tst-slide-3").addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector('.tst-slider-btn.active').classList.remove('active');
    this.classList.add('active');
    if (slideNumber !== 3) {
        changeTextEffect(tst_3);
        slideNumber = 3;
    }
});

document.getElementById("tst-slide-4").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.tst-slider-btn.active').classList.remove('active');
    this.classList.add('active');
    if(slideNumber !== 4) {
        changeTextEffect(tst_4);
        slideNumber = 4;
    }
});