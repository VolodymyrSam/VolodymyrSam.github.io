
"use strict"
    
//====================================================
        
/*  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
*/

// Фокусировка на форме
var form1 = document.getElementById('form1');
form1.addEventListener("focus", function() {
//  this.classList.add('focusForm');
  this.style.boxShadow = "2px 4px 5px 3px #000";
}, true);
form1.addEventListener("blur", function() {
//  this.classList.remove('focusForm');
  this.style.boxShadow = "0 0 0px 0px red";
}, true);
// Установка фокуса на поле ввода при старте
document.getElementById('FontName').focus();
// Вывод инф. в диалоговом окне
  document.getElementById('Btn-to-Pricing').onclick = function() {
    alert( 'Спасибо' );
//    document.getElementById('Btn-to-About').focus.remove;
  }
// Кнопка медленного перехода
  document.getElementById('Btn-to-About').addEventListener('click', goAbout);
  function goAbout() {
    var idTimer1;
      function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }
    var windowCoords = getCoords(document.getElementById('About')).top;
//    alert(+windowCoords);
//    alert(+window.pageYOffset);

      (function Myscroll() {
        if (+window.pageYOffset < +windowCoords) {
          window.scrollBy(0, 4);
          setTimeout(Myscroll, 5);
        }
       if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
         }
       })()
//    document.getElementById('About').scrollIntoView(true);
  }
// Кнопка быстрого перехода 
  function goFeaturis() {
//    alert( 'Спасибо' );
//  alert(document.getElementById('Btn-to-Featutis').focus);
//  alert(document.getElementById('Featuris'));
  document.getElementById('Featuris').scrollIntoView(true);
  }  
//============================================================

// Попытки убрать фокус

//alert(document.getElementsByClassName('open-contact')[0]);
//  if(document.getElementsByClassName('open-contact')[0]) {
//    window.open('http://vvvua.zzz.com.ua'); }

//document.body.children[0].removeChild(document.querySelector('.header1'));

//var selectedBtn;
//var VarDiv1 = document.querySelector('.div1');
//VarDiv1.onclick = function(event) {
//  var target = event.target;
//  if (target.tagName != 'button') return;
//  AftetClick (target);
//}
//}

//Vardiv1.onclick = function(event) {
//  var target = event.target;
//
//  // цикл двигается вверх от target к родителям до div1
//  while (target != VarDiv1) {
//    if (target.tagName == 'button') {
//      // нашли элемент, который нас интересует!
//      AfterClick(target);
//      return;
//    }
//    target = target.parentNode;
//  }

//  function AfterClick(node) {
//      if(selectedBtn) {
//        selectedBtn.classlist.remove('AfterClick');
//      }
//      selectedBtn = node;
//      selectedBtn.classlist.add('AfrerClick');
//    }
//}

// Кнопка скачать с мигающей галочкой
var VarButton2 = document.querySelector('.button2');
VarButton2.addEventListener('mousedown', FunButton2Click);
function FunButton2Click() {
  if (!VarButton2.classList.contains("MyClick")) {
    VarButton2.classList.add("MyClick");
    setTimeout(function(){      
        VarButton2.classList.remove("MyClick");
    }, 250);  
  } 
};

// Скрол: слайдер и кнопки
var Down = 0;
var TimerUp1 = 0;
var VarScrollBtnUp = document.getElementById('ScrollBtnUp');
var VarScrollBtnDown = document.getElementById('ScrollBtnDown');

VarScrollBtnUp.addEventListener('mousedown', FunScrollBtnUp4);
VarScrollBtnDown.addEventListener('mousedown', FunScrollBtnDown4);

//function FunScrollBtnUp(Down) {
//  alert(Down);
//  VarScrollBtnUp.classList.add('move');
//  if (Down) {
//    window.scrollBy(0,6); } else {
//      window.scrollBy(0,-6);
//    }
//  var TimerUp1 = setTimeout(function FunScrollBtnUp3() {
//    if (VarScrollBtnUp.classList.contains('move')) {
//      if (Down) {
//        window.scrollBy(0, 4); } else {
//        window.scrollBy(0, -4);
//        }
//      TimerUp1 = setTimeout(FunScrollBtnUp3, 8);
//      }
//  }, 400);
//}

// Кнопка вверх
VarScrollBtnUp.addEventListener('mouseup', FunScrollBtnUpEnd);
function FunScrollBtnUpEnd() {
  VarScrollBtnUp.classList.remove("move");
}

function FunScrollBtnUp4() {
  VarScrollBtnUp.classList.add('move');
  window.scrollBy(0,-6);
  clearTimeout(TimerUp1);
  TimerUp1 = setTimeout(function FunScrollBtnUp5() {
    if (VarScrollBtnUp.classList.contains('move')) {
      window.scrollBy(0, -4);
      TimerUp1 = setTimeout(FunScrollBtnUp5, 8);
      }
  }, 400);
}
// Кнопка вниз
VarScrollBtnDown.addEventListener('mouseup', FunScrollBtnDownEnd);
function FunScrollBtnDownEnd() {
  VarScrollBtnDown.classList.remove("move");
}

function FunScrollBtnDown4() {
  VarScrollBtnDown.classList.add('move');
  window.scrollBy(0,6);
  clearTimeout(TimerUp1);
  TimerUp1 = setTimeout(function FunScrollBtnDown5() {
    if (VarScrollBtnDown.classList.contains('move')) {
      window.scrollBy(0, 4);
      TimerUp1 = setTimeout(FunScrollBtnDown5, 8);
      }
  }, 400);
}
//function FunScrollBtnUp2() {
//  if (VarScrollBtnUp.classList.contains('move')) {
//  window.scrollBy(0, -8);
//  setTimeout(FunScrollBtnUp2, 8);
//  }
//  }

var Varscrollheight = 0;
var VarScreenheight = 0;
var Varscrollregion = 0;



