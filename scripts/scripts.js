var params = {};
var getdims = function () {
    params.winwidth = $('.container').width();
    params.winheight = $('.container').height();
    params.maxl = params.winwidth - $('.doug').width();
    params.maxt = params.winheight - $('.doug').height();
}
var setRandomLocation = function () {
    params.x = parseInt(Math.random() * params.maxl, 10);
    params.y = parseInt(Math.random() * params.maxt, 10);
    $('.doug').css('left', params.x + 'px').css('top', params.y + 'px');
}
var shuffle = function () {
    $('.doug').removeClass('transitionOpacity').addClass('transition');
    $('.doug>img').addClass('shake shake-constant shake-slow');  
    setTimeout(function () {
        getdims();
        setRandomLocation();
        setTimeout(function () {
            shuffle();
        }, 33);
    }, 666);
}
$(document).ready(function () {
    setTimeout(function () {
        getdims();
        setRandomLocation();
        $('.doug').addClass('opaque')   
        setTimeout(function () {
            shuffle();
        }, 2000);
    }, 22);
});
