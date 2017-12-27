	
    // 吸顶效果
    


    //收起效果
   //获取元素
    var btn2 = document.getElementById("btn-ct")
    var pic = document.getElementsByClassName("pic-li")
    var btn1 = document.getElementById("pic-tt")
  
    //点击操作
    btn1.onclick = function () {
        for(var i = 0 ;i < pic.length;i++){
            pic[i].style.display = "block";
        }
        this.style.display = "none";
        btn2.style.display = "block"
    }
    
    btn2.onclick = function () {
        for(var i = 0 ;i < pic.length;i++){
            pic[i].style.display = "none";
        }

         this.style.display = "none";
         btn1.style.display = "block";
  }

  
  



    //放大镜效果
    //1 获取元素
    var fdj = document.getElementById("fdj");
    var small = fdj.children[0];
    var mask = small.children[0];
    var big = document.getElementById("big");
    var bigImg = big.children[0];
    //    2 移入移出事件
    small.onmouseover = function () {
        mask.style.display = "block";
        big.style.display = "block";
    };
    small.onmouseout = function () {
        mask.style.display = "none";
        big.style.display = "none";
    };
    //3 鼠标跟随放大镜事件
    small.onmousemove = function (e) {
        var e = e || window.event;
//        //确定鼠标坐标
        var x = e.clientX - this.offsetParent.offsetLeft/2 - mask.offsetWidth+45;
        var y = e.clientY - this.offsetParent.offsetTop/2 - mask.offsetHeight-35;
//        //限制鼠标移动的范围
        x = x < 0 ? 0 : x;
        y = y < 0 ? 0 : y;
        var xMax = small.offsetWidth - mask.offsetWidth;
        var yMax = small.offsetHeight - mask.offsetHeight;
        x = x < xMax ? x : xMax;
        y = y < yMax ? y : yMax;
        mask.style.left = x + "px";
        mask.style.top = y + "px";
        //放大效果
        var p = x / (big.offsetWidth - mask.offsetWidth);//计算比例
        var q = y / (big.offsetHeight - mask.offsetHeight);
        var m = (bigImg.offsetWidth - big.offsetWidth) * p/1.3;//右侧效果不是很好，调试了比例
        var n = (bigImg.offsetHeight - big.offsetHeight) * q;
        bigImg.style.left = -m + "px";
        bigImg.style.top = -n + "px";
    };
