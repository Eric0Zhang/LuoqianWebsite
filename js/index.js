var li1 = document.querySelector(".main-nav>ul>li:first-child");
var li2 = document.querySelector(".main-nav>ul>li:nth-child(2)");
var oem = document.getElementById('oem');
var pro = document.getElementById('process');
var timer1;
var timer2;
var titles = document.getElementsByClassName("title");
var proLists = document.getElementsByClassName("product-list");
//TEST START
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

// FORMAL CODE
li1.addEventListener("mouseenter", () => {
    titles[0].style.backgroundColor = "white";
    titles[0].style.color = "#004B8D";
    titles[1].style.backgroundColor = "#F0F0F0";
    titles[1].style.color = "#2D383F";
    var cw = document.documentElement.clientWidth;
    oem.style.width = cw + "px";
    oem.style.width = cw + "px";
    oem.style.left = -1 * ((cw - 1180) / 2 + 151.78) + "px";
    timer1 = setTimeout(() => {
        move(oem, "height", 300, 30, function () {
            clearTimeout(timer1);
        });
    }, 300);
}, false);
li2.addEventListener("mouseenter", () => {
    titles[2].style.backgroundColor = "white";
    titles[2].style.color = "#004B8D";
    titles[3].style.backgroundColor = "#F0F0F0";
    titles[3].style.color = "#2D383F";
    var cw = document.documentElement.clientWidth;
    pro.style.width = cw + "px";
    pro.style.left = -1 * ((cw - 1180) / 2 + 151.78 + 171.86) + "px";
    timer2 = setTimeout(() => {
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
});

for (let i = 0; i < 4; i++) {
    titles[i].addEventListener("mouseenter", function () {
        titles[i].style.backgroundColor = "white";
        titles[i].style.color = "#004B8D";
        for (let j = 0; j < 4; j++) {
            if (j != i) {
                titles[j].style.backgroundColor = "#F0F0F0";
                titles[j].style.color = "#2D383F";
            }
        }
    })
}

for (let i = 0; i < 4; i++) {
    titles[i].addEventListener("mouseenter", function () {
        titles[i].style.backgroundColor = "white";
        titles[i].style.color = "#004B8D";
        for (let j = 0; j < 4; j++) {
            if (j != i) {
                titles[j].style.backgroundColor = "#F0F0F0";
                titles[j].style.color = "#2D383F";
            }
        }
    })
}

//注意这里proLists不是一个数组, 而是一个类, 原型是HTMLCollection
//proLists.forEach(list => {
for (let i = 0; i < proLists.length; i++) {
    let series = proLists[i].getElementsByClassName('series');
    //series.forEach(serie => {
    for (let j = 0; j < series.length; j++) {
        //一个类别下的一个标题和一个列表内容块
        let title = series[j].getElementsByClassName('serie-name');
        let content = series[j].getElementsByClassName('list-content');
        title[0].addEventListener("mouseenter", function () {
            //把所有的标题变灰,内容块隐藏
            //series.forEach(sub => {
            for (let k = 0; k < series.length; k++) {
                let st = series[k].getElementsByClassName('serie-name');
                st[0].childNodes[0].style.color = "#a2a6a8";
                let sc = series[k].getElementsByClassName('list-content');
                sc[0].style.display = "none";
            };
            //只把选中的类别标题变蓝,内容块显示
            title[0].childNodes[0].style.color = "#004b8d";
            content[0].style.display = "flex";
        });

    };
};