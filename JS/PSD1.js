
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
    var windowCoords = getCoords(document.getElementById('About')).top;

      (function Myscroll() {
        if (window.pageYOffset < windowCoords) {
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
var TimerClick1 = 0;
var VarScrollBtnUp = document.getElementById('ScrollBtnUp');
var VarScrollBtnDown = document.getElementById('ScrollBtnDown');

VarScrollBtnUp.addEventListener('mousedown', FunScrollBtnUp4);
VarScrollBtnDown.addEventListener('mousedown', FunScrollBtnDown4);

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
      window.scrollBy(0, -3);
      TimerUp1 = setTimeout(FunScrollBtnUp5, 4);
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
      window.scrollBy(0, 3);
      TimerUp1 = setTimeout(FunScrollBtnDown5, 4);
      }
  }, 400);
}

// высота кнопок
//1 var VarScrollbtnheight = getComputedStyle(VarScrollBtnUp).lineHeight;
 // var VarScrollbtnheight = $("#ScrollBtnUp").outerHeight();
 var VarScrollbtnheight = document.getElementById('ScrollBtnUp').offsetHeight;
// высота екрана страницы
var Varscreenheight = document.body.clientHeight;
// высота области движения скрола - оболочка скрола
var Varscrollregion = Varscreenheight-(2*VarScrollbtnheight);
var VarScrolloutfield = document.getElementById('Scrollfield');
VarScrolloutfield.style.height = Varscrollregion + "px";
// высота всего документа
var Varpageheight = $(document).height();
//document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
// высота скрола
// если область движения - это высота страницы
// то высота скрола - это высота екрана
//var Varscrollheight = Varscreenheight*Varscrollregion/Varpageheight;
var Varscrollheight = Varscreenheight*Varscrollregion/Varpageheight;
// Размер области движения скрола
// Если размер области движения - это высота страницы(минус экран)
// то отступ скрола - это прокрутка страницы
// Просчет в цикле движения ниже Метка 1
var VarscrollregionMove = Varscreenheight-(2*VarScrollbtnheight+Varscrollheight);

// Скрол
var VarScrollSlider = document.getElementById('ScrollBtnSlider');
// Придаем скролу высоту
VarScrollSlider.style.height = Varscrollheight + "px";

var VarScrollSliderStyle = getComputedStyle(VarScrollSlider);
console.log(Varscreenheight);
console.log(Varpageheight);
console.log(Varscrollregion);


// Движение ползунка
VarScrollSlider.onmousedown = function(e) {
  var Coords = getCoords(VarScrollSlider);
  var OutCoords = getCoords(VarScrolloutfield);
  var shiftY = e.clientY - Coords.top;

  VarScrollSlider.style.position = 'relative';
  VarScrolloutfield.appendChild(VarScrollSlider);

  VarScrollSlider.style.zIndex = 2100;
  document.onmousemove = function(e) {
    //  вычесть координату родителя, т.к. position: relative
    var newtop = e.clientY - shiftY - OutCoords.top;

    // курсор ушёл вне слайдера
    if (newtop < 0) {
      newtop = 0;
    }
    var bottomEdge = VarScrolloutfield.offsetHeight - VarScrollSlider.offsetHeight;
    if (newtop > bottomEdge) {
      newtop = bottomEdge;
    }
    VarScrollSlider.style.top = newtop + 'px';
  
    // движение страницы Метка 1
    var newscroll = newtop*(Varpageheight-Varscreenheight)/VarscrollregionMove;
    window.scrollTo(0,newscroll);
  
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  return false; // disable selection start (cursor change)
};

// Прокрутка на указанное место
VarScrolloutfield.onmousedown = function(e){
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var Coords = getCoords(VarScrollSlider);
  var OutCoords = getCoords(VarScrolloutfield);
  //var shiftY = e.pageY - Coords.top;
  var newtop = e.pageY - OutCoords.top - Varscrollheight/2;
  var newscroll = newtop*(Varpageheight-Varscreenheight)/VarscrollregionMove;
  // защита прыжка от нажатия по ползунку
  if(e.clientY < (Coords.top - scrolled) || e.clientY > (Coords.top - scrolled + Varscrollheight)){

    //var windowCoords = getCoords(document.getElementById('About')).top;

    
    VarScrolloutfield.classList.add('move');
    if(e.clientY < (Coords.top - scrolled)){
    var course = -25;
    }
    if(e.clientY > (Coords.top - scrolled + Varscrollheight)){
      course = 25;
      }

      window.scrollBy(0, course);
  clearTimeout(TimerClick1);
  TimerClick1 = setTimeout(function FunScrollBtnDown5() {
    if (VarScrolloutfield.classList.contains('move')) {
      if(e.clientY < (getCoords(VarScrollSlider).top - window.pageYOffset) || e.clientY > (getCoords(VarScrollSlider).top - window.pageYOffset + Varscrollheight)){
      window.scrollBy(0, course);

      TimerClick1 = setTimeout(FunScrollBtnDown5, 4);
      }
      }
  }, 40);

  } 
}
VarScrolloutfield.addEventListener('mouseup', FunScrollClickEnd);
function FunScrollClickEnd() {
  VarScrolloutfield.classList.remove("move");
}

// Прокрутка страницы
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  VarScrollSlider.style.top = (scrolled*VarscrollregionMove/(Varpageheight-Varscreenheight)) + 'px';
}

VarScrollSlider.ondragstart = function() {
  return false;
};

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
 

