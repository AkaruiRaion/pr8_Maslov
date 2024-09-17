"use strict";

// 1 задание

document.getElementById('btn1').addEventListener('mousedown', function () {
    this.textContent = 'Зажато';
});

document.getElementById('btn1').addEventListener('mouseup', function () {
    this.textContent = 'Зажмите';
});

document.getElementById('btn2').addEventListener('click', function () {
    this.textContent = 'Кликнуто';
});

document.getElementById('btn3').addEventListener('dblclick', function () {
    this.textContent = 'Кликнуто дважды';
});

document.getElementById('btn4').addEventListener('mouseover', function () {
    this.textContent = 'Курсор наведен';
});

document.getElementById('btn5').addEventListener('mouseout', function () {
    this.textContent = 'Курсор уведен';
});

document.getElementById('btn6').addEventListener('contextmenu', function () {
    this.textContent = 'Нажато ПКМ';
});

// 2 задание

document.addEventListener('keydown', (keyEvent) => {
    switch (keyEvent.code) {
        case 'KeyR':
            document.body.style.backgroundColor = 'red';
            break;
        case 'KeyG':
            document.body.style.backgroundColor = 'green';
            break;
        case 'KeyB':
            document.body.style.backgroundColor = 'blue';
            break;
    }
});

document.addEventListener('keyup', (keyEvent) => {
    switch (keyEvent.code) {
        case 'KeyR':
            document.body.style.backgroundColor = '#fff';
            break;
        case 'KeyG':
            document.body.style.backgroundColor = '#fff';
            break;
        case 'KeyB':
            document.body.style.backgroundColor = '#fff';
            break;
    }
});

// 3 задание

let block = document.getElementById('block');

document.addEventListener('keydown', function (keyEvent) {
    let left = parseInt(block.style.left) || 0;
    let top = parseInt(block.style.top) || 0;

    switch (keyEvent.code) {
        case 'KeyW':
            block.style.top = `${top - 1}px`;
            break;
        case 'KeyS':
            block.style.top = `${top + 1}px`;
            break;
        case 'KeyA':
            block.style.left = `${left - 1}px`;
            break;
        case 'KeyD':
            block.style.left = `${left + 1}px`;
            break;
    }
})

