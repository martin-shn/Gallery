'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
    console.log('Started...');
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start').hide();
    renderQuest();
    $('.quest').show();
}

function renderQuest() {
    $('h2').text(getCurrQuest().txt);
}

function onUserResponse(ev) {
    var res = ev.data.ans;
    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            // alert('Yes, I knew it!');
            // TODO: improve UX
            $('.modal').modal();
            onRestartGame();
        } else {
            // alert('I dont know...teach me!');
            // TODO: hide and show new-quest section
            $('.new-quest').show();
        }
        $('.quest').hide();
    } else {
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess(ev) {
    ev.preventDefault();
    var newGuess = $('#newGuess').val(); //the answer
    var newQuest = $('#newQuest').val(); //the question

    // TODO: Get the inputs' values
    // TODO: Call the service addGuess
    addGuess(newQuest, newGuess, gLastRes);
    $('#newGuess').val('');
    $('#newQuest').val('');

    onRestartGame();
}

function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;
    $('h2').text('Think of Someone...');
}
