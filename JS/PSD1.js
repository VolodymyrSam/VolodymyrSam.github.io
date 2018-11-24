
"use strict"
    
//====================================================
        
/*  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
*/
// Придаем боди высоту (и ширину) екрана 

var MaxscrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
  window.innerHeight
);
var MinsclientHinnerH = Math.min(document.body.clientHeight, window.innerHeight);
var MaxsclientHinnerH = Math.max(document.body.clientHeight, window.innerHeight);
var MinsclientWinnerW = Math.min(document.body.clientWidth, window.innerWidth);
var MaxsclientWinnerW = Math.max(document.body.clientWidth, window.innerWidth);

document.body.style.height = MaxscrollHeight;
// Как бы высота страницы, но на самом деле высота контента div0
var Vardiv0 = document.getElementById('div0');
// придаем высоту самому div0
//Vardiv0.clientHeight = document.body.clientHeight + 33;
Vardiv0.style.height = MaxsclientHinnerH + 0 + "px";
var Varpageheight = Vardiv0.scrollHeight;
if(MinsclientWinnerW < 1400){
  document.body.style.width = MinsclientWinnerW;
  Vardiv0.style.width = (MinsclientWinnerW+ 33 + "px");
  Vardiv0.style.height = (MinsclientHinnerH + 17 + "px");
} else {
  document.body.style.width = 1400;
  Vardiv0.style.width = "1433px";
  Vardiv0.style.height = (MinsclientHinnerH + 0 + "px");
}


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
        if (Vardiv0.scrollTop < 700) {
          Vardiv0.scrollTop += 12;
          setTimeout(Myscroll, 4);
        }
       if (Vardiv0.scrollTop > 700) {
        Vardiv0.cscrollTop = 700;
         }
       })()
//    document.getElementById('About').scrollIntoView(true);
  }
// Кнопка быстрого перехода 
  function goFeaturis() {
  //document.getElementById('Featuris').scrollIntoView(true);
  Vardiv0.scrollTop = 600;
  }  
//================================================================================
// Кнопка контактов
function funOpenContact() {
 if(document.getElementsByClassName('open-contact')[0]) {
   window.open('http://vvvua.zzz.com.ua'); } }

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
//================================================================================
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
  Vardiv0.scrollTop += -6;;
  clearTimeout(TimerUp1);
  TimerUp1 = setTimeout(function FunScrollBtnUp5() {
    if (VarScrollBtnUp.classList.contains('move')) {
      Vardiv0.scrollTop += -3;
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
  Vardiv0.scrollTop += 6;
  clearTimeout(TimerUp1);
  TimerUp1 = setTimeout(function FunScrollBtnDown5() {
    if (VarScrollBtnDown.classList.contains('move')) {
      Vardiv0.scrollTop += 3;
      TimerUp1 = setTimeout(FunScrollBtnDown5, 4);
      }
  }, 400);
}

// высота кнопок
//1 var VarScrollbtnheight = getComputedStyle(VarScrollBtnUp).lineHeight;
 // var VarScrollbtnheight = $("#ScrollBtnUp").outerHeight();
 var VarScrollbtnheight = VarScrollBtnUp.offsetHeight;
// высота екрана страницы
var Varscreenheight = MinsclientHinnerH;
// высота области движения скрола - оболочка скрола
var Varscrollregion = Varscreenheight-(2*VarScrollbtnheight);
var VarScrolloutfield = document.getElementById('Scrollfield');
VarScrolloutfield.style.height = Varscrollregion + "px";

// высота всего документа
// расчитана в начале документа
//var Varpageheight = $(document).height();
//var Varpageheight = document.getElementById('div0').scrollHeight;
//document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;

// высота скрола
// если область движения - это высота страницы
// то высота скрола - это высота екрана
//var Varscrollheight = Varscreenheight*Varscrollregion/Varpageheight;
var Varscrollheight = (Varscreenheight + 0)*Varscrollregion/(Varpageheight - 0);
// Размер области движения скрола
// Если размер области движения - это высота страницы(минус экран)
// то отступ скрола - это прокрутка страницы
// Просчет в цикле движения ниже Метка 1
var VarscrollregionMove = Varscreenheight -(2*VarScrollbtnheight+Varscrollheight);

// Скрол
var VarScrollSlider = document.getElementById('ScrollBtnSlider');
var newtop = 0;
$(window).resize(function() {
  MaxscrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
    window.innerHeight
  );
  MinsclientHinnerH = Math.min(document.body.clientHeight, window.innerHeight);
  MinsclientWinnerW = Math.min(document.body.clientWidth, window.innerWidth);
  document.body.style.height = MaxscrollHeight;
  if(document.body.clientWidth < 1400){
    document.body.style.width = document.body.clientWidth;
    Vardiv0.style.width = (document.body.clientWidth +33 + "px");
    Vardiv0.style.height = (document.body.clientHeight + 17 + "px");
    } else {
      document.body.style.width = 1400;
      Vardiv0.style.width = "1433px";
      Vardiv0.style.height = (MinsclientHinnerH + 0 + "px");
    }
  
Varscreenheight = MinsclientHinnerH; 
Varscrollregion = Varscreenheight-(2*VarScrollbtnheight);
VarScrolloutfield = document.getElementById('Scrollfield');
VarScrolloutfield.style.height = Varscrollregion + "px";
Varpageheight = Vardiv0.scrollHeight;
Varscrollheight = Varscreenheight*Varscrollregion/Varpageheight;
VarscrollregionMove = Varscreenheight-(2*VarScrollbtnheight+Varscrollheight);
VarScrollSlider.style.height = Varscrollheight + "px";
bottomEdge = VarScrolloutfield.offsetHeight - VarScrollSlider.offsetHeight;

    newtop = (Vardiv0.scrollTop)*VarscrollregionMove/(Varpageheight - 17 - Varscreenheight);

    if (newtop < 0) {
      newtop = 0;
    }
    bottomEdge = VarScrolloutfield.offsetHeight - VarScrollSlider.offsetHeight;
    if (newtop > bottomEdge) {
      newtop = bottomEdge;
    }
    VarScrollSlider.style.top = newtop + 'px';

});

// Придаем скролу высоту
VarScrollSlider.style.height = Varscrollheight + "px";

var VarScrollSliderStyle = getComputedStyle(VarScrollSlider);
var bottomEdge = VarScrolloutfield.offsetHeight - VarScrollSlider.offsetHeight;
// Движение ползунка при нажатии
VarScrollSlider.onmousedown = function(e) {
  var Coords = getCoords(VarScrollSlider);
  var OutCoords = getCoords(VarScrolloutfield);
  var shiftY = e.clientY - Coords.top;

  VarScrollSlider.style.position = 'relative';
  VarScrolloutfield.appendChild(VarScrollSlider);
  
  VarScrollSlider.style.zIndex = 2100;
  document.onmousemove = function(e) {
    //  вычесть координату родителя, т.к. position: relative
    newtop = e.clientY - shiftY - OutCoords.top;

    // курсор ушёл вне слайдера
    if (newtop < 0) {
      newtop = 0;
    }
    bottomEdge = VarScrolloutfield.offsetHeight - VarScrollSlider.offsetHeight;
    if (newtop > bottomEdge) {
      newtop = bottomEdge;
    }
    VarScrollSlider.style.top = newtop + 'px';
  
    // движение страницы Метка 1
    var newscroll = newtop*(Varpageheight-Varscreenheight)/VarscrollregionMove;
    //window.scrollTo(0,newscroll);
    Vardiv0.scrollTop = newscroll;
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  return false; // disable selection start (cursor change)
};

// Прокрутка на указанное место
VarScrolloutfield.onmousedown = function(e){
  //var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var scrolled = Vardiv0.scrollTop ;
  var Coords = getCoords(VarScrollSlider);
  var OutCoords = getCoords(VarScrolloutfield);
  //var shiftY = e.pageY - Coords.top;
  var newtop = e.pageY - OutCoords.top - Varscrollheight/2;
  var newscroll = newtop*(Varpageheight-Varscreenheight)/VarscrollregionMove;
  // защита прыжка от нажатия по ползунку
  if(e.clientY < (Coords.top) || e.clientY > (Coords.top + Varscrollheight)){

    //var windowCoords = getCoords(document.getElementById('About')).top;

    
    VarScrolloutfield.classList.add('move');
    if(e.clientY < Coords.top){
    var course = -25;
    }
    if(e.clientY > (Coords.top + Varscrollheight)){
      course = 25;
      }

      Vardiv0.scrollTop += course;
  clearTimeout(TimerClick1);
  TimerClick1 = setTimeout(function FunScrollBtnDown5() {
    if (VarScrolloutfield.classList.contains('move')) {
      if(e.clientY < getCoords(VarScrollSlider).top || e.clientY > (getCoords(VarScrollSlider).top + Varscrollheight)){
      Vardiv0.scrollTop += course;

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
// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   VarScrollSlider.style.top = (scrolled*VarscrollregionMove/(Varpageheight-Varscreenheight)) + 'px';
// }
$(Vardiv0).scroll(function() {
  //var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(MinsclientWinnerW < 1400){
    var scrolled = Vardiv0.scrollTop;
VarScrollSlider.style.top = ((scrolled + 0)*VarscrollregionMove/(Varpageheight-Varscreenheight)) + 'px';
    } else {
      var scrolled = Vardiv0.scrollTop;
VarScrollSlider.style.top = ((scrolled + 0)*VarscrollregionMove/(Varpageheight-Varscreenheight)) + 'px';
    }
  
 });

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

var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight,
  window.innerHeight
);

// console.log( 'document.body.scrollHeight: ' + document.body.scrollHeight );
// console.log( 'document.body.offsetHeight: ' + document.body.offsetHeight );
// console.log( 'document.body.clientHeight: ' + document.body.clientHeight );
// console.log( 'document.documentElement.scrollHeight: ' + document.documentElement.scrollHeight );
// console.log( 'document.documentElement.offsetHeight: ' + document.documentElement.offsetHeight );
// console.log( 'document.documentElement.clientHeight: ' + document.documentElement.clientHeight );
// console.log( 'Window.innerHeight: ' + window.innerHeight );
// console.log( 'Высота с учетом прокрутки: ' + scrollHeight );
//console.log("Вывод инфы:" + scrollHeight);

//==================================================================================================
// Генерация новых блоков при нажатии кнопок

function Fsecondtab(options) {
  var elem = options.elem;
  elem.onmousedown = function() {
    return false;
  }
  elem.onclick = function(event) {
    if (event.target.closest('.Tabgroup')) {
      if(event.target.closest('.Mbtn2')) {
        document.getElementsByClassName('Mbtn1')[0].classList.remove('M-active');
        document.getElementsByClassName('Mbtn2')[0].classList.add('M-active');
        document.getElementsByClassName('content2')[0].style.display = 'none';
        document.getElementsByClassName('content21')[0].style.display = 'inline-block';
        // console.log("Вывод инфы:" + document.getElementsByClassName('Tabgroup')[0].style);
        // console.log("Вывод инфы:" + document.getElementsByClassName('content21')[0].style);
        // console.log("Вывод инфы:" + document.getElementsByClassName('Town')[0].style);
      } 
      if(event.target.closest('.Mbtn1')) {
        document.getElementsByClassName('Mbtn2')[0].classList.remove('M-active');
        document.getElementsByClassName('Mbtn1')[0].classList.add('M-active');
        document.getElementsByClassName('content21')[0].style.display = 'none'
        document.getElementsByClassName('content2')[0].style.display = 'inline-block';
        // console.log("Вывод инфы:" + document.getElementsByClassName('Tabgroup')[0].style);
        // console.log("Вывод инфы:" + document.getElementsByClassName('content2')[0].style);
        // console.log("Вывод инфы:" + document.getElementsByClassName('Town')[0].style);
      }
    }
  };
}

var secondtab = new Fsecondtab({
  elem: document.getElementById('Featuris')
});

