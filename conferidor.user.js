// ==UserScript==
// @name         Conferidor Organizze
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adiciona um checkbox na página de faturas do Organizze
// @author       github.com/jfbueno
// @match        *://app.organizze.com.br/*/cartao-de-credito/*/faturas/*
// @grant        none
// @run-at      document-idle
// ==/UserScript==

(function() {
    'use strict';

    const checkConferenciaClick = function () {
        const parentRow = this.closest('tr')
        parentRow.style.background = this.checked ? '#1ad2726b' : 'transparent'
        parentRow.classList.remove('hover')
    }

    const tds = document.querySelectorAll('td.type')

    console.log(tds)

    for(let td of tds) {
        td.querySelector('span').remove()
        const input = document.createElement('input')
        input.type = 'checkbox'
        td.appendChild(input)
        input.onclick = checkConferenciaClick
    }
})();

