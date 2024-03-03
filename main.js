'use strict';

$(() => {
    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    function count() {
        const time = new Date(Date.now() - startTime + elapsedTime);
        const hours = String(time.getHours() - 9);
        const minutes = String(time.getMinutes());
        const seconds = String(time.getSeconds());
        const millisecondsthree = Math.floor(time.getMilliseconds() / 100);
        const milliseconds = String(millisecondsthree);
        $('#timer').text(`${hours}:${minutes}:${seconds}:${milliseconds}`);

        timeoutId = setTimeout(() => {
            count();
        }, 1);

    }

    //ボタンの状態設定
    function initial() {
        $('#start').removeClass('inactive');
        $('#stop').addClass('inactive');
        $('#reset').addClass('inactive');
    }
    function running() {
        $('#start').addClass('inactive');
        $('#stop').removeClass('inactive');
        $('#reset').addClass('inactive');
    }
    function stopped() {
        $('#start').removeClass('inactive');
        $('#stop').addClass('inactive');
        $('#reset').removeClass('inactive');
    }

    initial();

    //ボタンの動作   
    $('#start').click(() => {
        if($('#start').hasClass('inactive')===true){
            return;
        }
        running();
        startTime = Date.now();
        count();
    });
    $('#stop').click(() => {
        if($('#stop').hasClass('inactive')===true){
            return;
        }
        stopped();
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
    });
    $('#reset').click(() => {
        if($('#reset').hasClass('inactive')===true){
            return;
        }
        initial();
        $('#timer').text('0:0:0:0');
        elapsedTime = 0;
    });


});





