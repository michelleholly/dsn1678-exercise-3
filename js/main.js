var buttonLeft = $('.sales__left');
var infoLeft = $('.sales__details__left');

var buttonClickHandlerLeft = function (){
    var currentState = infoLeft.attr('data-state');
    
    if(currentState=='active') {
    infoLeft.attr('data-state', 'inactive');   
    } else {
    infoLeft.attr('data-state', 'active');    
    }
};

buttonLeft.on('click', buttonClickHandlerLeft);

var buttonRight = $('.sales__right');
var infoRight = $('.sales__details__right');

var buttonClickHandlerRight = function (){
    var currentState = infoRight.attr('data-state');
    
    if(currentState=='active') {
    infoRight.attr('data-state', 'inactive');   
    } else {
    infoRight.attr('data-state', 'active');    
    }
};

buttonRight.on('click', buttonClickHandlerRight);