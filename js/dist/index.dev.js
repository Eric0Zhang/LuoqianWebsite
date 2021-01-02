"use strict";

var li1 = document.querySelector(".main-nav>ul>li:first-child");
var li2 = document.querySelector(".main-nav>ul>li:nth-child(2)");
var oem = document.getElementById('oem');
var pro = document.getElementById('process');
var timer1;
var timer2;
var timer3;
var titles = document.getElementsByClassName("title");
var proLists = document.getElementsByClassName("product-list");
var bannerl = document.getElementById("banner-left");
var bannerr = document.getElementById("banner-right");
var seperator = document.getElementById("seperator"); //TEST NAV START
// var cw = document.documentElement.clientWidth;
// oem.style.width = cw + "px";
// oem.style.width = cw + "px";
// oem.style.left = -1 * ((cw - 1180) / 2 + 151.78) + "px";
// timer1 = setTimeout(() => {
//     move(oem, "height", 300, 30, function () {
//         clearTimeout(timer1);
//     });
// }, 300);
//TEST END
// FORMAL NAV CODE

li1.addEventListener("mouseenter", function () {
  titles[0].style.backgroundColor = "white";
  titles[0].style.color = "#004B8D";
  titles[1].style.backgroundColor = "#F0F0F0";
  titles[1].style.color = "#2D383F";
  var cw = document.documentElement.clientWidth;
  oem.style.width = cw + "px";
  oem.style.width = cw + "px";
  oem.style.left = -1 * ((cw - 1180) / 2 + 151.78) + "px";
  timer1 = setTimeout(function () {
    move(oem, "height", 300, 30, function () {
      clearTimeout(timer1);
    });
  }, 300);
}, false);
li2.addEventListener("mouseenter", function () {
  titles[2].style.backgroundColor = "white";
  titles[2].style.color = "#004B8D";
  titles[3].style.backgroundColor = "#F0F0F0";
  titles[3].style.color = "#2D383F";
  var cw = document.documentElement.clientWidth;
  pro.style.width = cw + "px";
  pro.style.left = -1 * ((cw - 1180) / 2 + 151.78 + 171.86) + "px";
  timer2 = setTimeout(function () {
    move(pro, "height", 300, 30, function () {
      clearTimeout(timer2);
    });
  }, 300);
}, false);
li1.addEventListener("mouseleave", function () {
  clearTimeout(timer1);
  move(oem, "height", 0, 30);
});
li2.addEventListener("mouseleave", function () {
  clearTimeout(timer2);
  move(pro, "height", 0, 30);
}); //FORMAL NAV END

var _loop = function _loop(i) {
  titles[i].addEventListener("mouseenter", function () {
    titles[i].style.backgroundColor = "white";
    titles[i].style.color = "#004B8D";

    for (var j = 0; j < 4; j++) {
      if (j != i) {
        titles[j].style.backgroundColor = "#F0F0F0";
        titles[j].style.color = "#2D383F";
      }
    }
  });
};

for (var i = 0; i < 4; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  titles[_i].addEventListener("mouseenter", function () {
    titles[_i].style.backgroundColor = "white";
    titles[_i].style.color = "#004B8D";

    for (var j = 0; j < 4; j++) {
      if (j != _i) {
        titles[j].style.backgroundColor = "#F0F0F0";
        titles[j].style.color = "#2D383F";
      }
    }
  });
};

for (var _i = 0; _i < 4; _i++) {
  _loop2(_i);
} //注意这里proLists不是一个数组, 而是一个类, 原型是HTMLCollection


var _loop3 = function _loop3(_i2) {
  var series = proLists[_i2].getElementsByClassName('series');

  var _loop4 = function _loop4(j) {
    //一个类别下的一个标题和一个列表内容块
    var title = series[j].getElementsByClassName('serie-name');
    var content = series[j].getElementsByClassName('list-content');
    title[0].addEventListener("mouseenter", function () {
      //把所有的标题变灰,内容块隐藏
      for (var k = 0; k < series.length; k++) {
        var st = series[k].getElementsByClassName('serie-name');
        st[0].childNodes[0].style.color = "#a2a6a8";
        var sc = series[k].getElementsByClassName('list-content');
        sc[0].style.display = "none";
      }

      ; //只把选中的类别标题变蓝,内容块显示

      title[0].childNodes[0].style.color = "#004b8d";
      content[0].style.display = "flex";
    });
  };

  for (var j = 0; j < series.length; j++) {
    _loop4(j);
  }

  ;
};

for (var _i2 = 0; _i2 < proLists.length; _i2++) {
  _loop3(_i2);
}

;
bannerl.addEventListener("mouseenter", function () {
  var clientW = document.documentElement.clientWidth;
  timer3 = setTimeout(function () {
    move(bannerl, "width", 0.75 * clientW, 30, function () {
      clearTimeout(timer3);
    });
    move(seperator, "left", 0.693 * clientW, 30, function () {
      clearTimeout(timer3);
    });
  }, 300);
}, false);
bannerl.addEventListener("mouseleave", function () {
  var clientW = document.documentElement.clientWidth;
  clearTimeout(timer3);
  move(bannerl, "width", 0.555 * clientW, 30);
  move(seperator, "left", 0.498 * clientW, 30);
});
bannerr.addEventListener("mouseenter", function () {
  var clientW = document.documentElement.clientWidth;
  timer4 = setTimeout(function () {
    move(bannerl, "width", 0.35 * clientW, 30, function () {
      clearTimeout(timer4);
    });
    move(seperator, "left", 0.293 * clientW, 30, function () {
      clearTimeout(timer4);
    });
  }, 300);
}, false);
bannerr.addEventListener("mouseleave", function () {
  var clientW = document.documentElement.clientWidth;
  clearTimeout(timer4);
  move(bannerl, "width", 0.555 * clientW, 30);
  move(seperator, "left", 0.498 * clientW, 30);
});