window.onload=function(){Show();become();Become();show();show1();color();Color();Show1();Show2();showpic();Showpic();SHOW();shoow();show4();show3();show5();show6();show7();show8();show9();}/*网页加载好就启用函数!*/
// document.addEventListener('DOMContentLoaded', function () {
//   var checkbox = document.querySelector('input[type="checkbox"]');
  
//   checkbox.addEventListener('change', function () {
//     document.documentElement.classList.toggle('switch');
//   });
// });
function Show(){

		            var subMenu = document.getElementsByClassName("div")[0] ;
					if(subMenu.style.display=="none")/*如果菜单隐藏,点击显示*/{
		            subMenu.style.display = " flex ";
		        }
				else/*如果菜单显示,点击隐藏*/{
					subMenu.style.display = " none ";
				}
				}

function Show1(){

		            var subMenu = document.getElementsByClassName("div1")[0] ;
					if(subMenu.style.display=="none")/*如果菜单隐藏,点击显示*/{
		            subMenu.style.display = " flex ";
		        }
				else/*如果菜单显示,点击隐藏*/{
					subMenu.style.display = " none ";
				}
				}
function Show2(){

		            var subMenu = document.getElementsByClassName("div2")[0] ;
					if(subMenu.style.display=="none")/*如果菜单隐藏,点击显示*/{
		            subMenu.style.display = " flex ";
		        }
				else/*如果菜单显示,点击隐藏*/{
					subMenu.style.display = " none ";
				}
				}

function show(){
	var sub = document.getElementsByClassName("hide")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show1(){
	var sub = document.getElementsByClassName("hide1")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show3(){
	var sub = document.getElementsByClassName("hide2")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show4(){
	var sub = document.getElementsByClassName("hide3")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show5(){
	var sub = document.getElementsByClassName("hide4")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show6(){
	var sub = document.getElementsByClassName("hide5")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show7(){
	var sub = document.getElementsByClassName("hide6")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show8(){
	var sub = document.getElementsByClassName("hide7")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
function show9(){
	var sub = document.getElementsByClassName("hide8")[0];
	if(sub.style.display=="none"){
		sub.style.display="block";
	}
	else{
		sub.style.display="none";
	}
}
// hide函数使点击其他元素时隐藏该元素,目前没有找到更好方法
function hide(){
	var subMenu = document.getElementsByClassName("div")[0];
		subMenu.style.display = " none";
}
function hide1(){
	var subMenu = document.getElementsByClassName("div1")[0];
		subMenu.style.display = " none";
}
function hide2(){
	var subMenu = document.getElementsByClassName("div2")[0];
		subMenu.style.display = " none";
}
function hide3(){
	var subMenu = document.getElementsByClassName("hide1")[0];
		subMenu.style.display = " none";
}
function hide4(){
	var subMenu = document.getElementsByClassName("hide")[0];
		subMenu.style.display = " none";
}
function hide7(){
	var subMenu = document.getElementsByClassName("hide2")[0];
		subMenu.style.display = " none";
}
function hide8(){
	var subMenu = document.getElementsByClassName("hide3")[0];
		subMenu.style.display = " none";
}
function hide9(){
	var subMenu = document.getElementsByClassName("hide4")[0];
		subMenu.style.display = " none";
}
function hide10(){
	var subMenu = document.getElementsByClassName("hide5")[0];
		subMenu.style.display = " none";
}
function hide11(){
	var subMenu = document.getElementsByClassName("hide6")[0];
		subMenu.style.display = " none";
}
function hide12(){
	var subMenu = document.getElementsByClassName("hide7")[0];
		subMenu.style.display = " none";
}
function hide13(){
	var subMenu = document.getElementsByClassName("hide8")[0];
		subMenu.style.display = " none";
}
function hide5(){
	var h = document.getElementsByClassName("btn1")[0];
	h.style.borderColor="transparent";
}
function hide6(){
	var h = document.getElementsByClassName("btn0")[0];
	h.style.borderColor="transparent";
}
function getClass(className) { //className指class的值
   
            var tagname = document.getElementsByTagName('*');  //获取指定元素
            var tagnameAll = [];     //这个数组用于存储所有符合条件的元素
            for (var i = 0; i < tagname.length; i++) {     //遍历获得的元素
                if (tagname[i].className.indexOf(className)>=0){     //如果获得的元素中的class的值等于指定的类名，就赋值给tagnameAll
                    tagnameAll[tagnameAll.length] = tagname[i];
                }
            }
            return tagnameAll;
         
    }
 function become(){
        var btn=getClass('tab_btn');//获取按钮
        var div=getClass('second-body');//获取div
        for(i=0;i<btn.length;i++){
            btn[i].onclick=function(){//按钮点击事件
                var index=(this.getAttribute('index')-0);//获取是第几个按钮按下
                if(btn[index].className.indexOf('curr_btn')>=0) return;//如果按下的按钮为当前选中的按钮则无反应
                for(i=0;i<btn.length;i++){
                    if(index==i){
                        btn[i].className='tab_btn curr_btn';
                        div[i].className='second-body curr_div';
                    }else{
                        btn[i].className='tab_btn';
                        div[i].className='second-body';
                    }
                }
            }
        }
    };
function color(){
	 var btn =document.getElementsByClassName("btn0")[0] ;
	 if(btn.style.borderColor == "transparent")/*颜色透明*/{
	 btn.style.borderColor = "#0067B7";/*点击边框变色*/
	 }
	 else{
		 btn.style.borderColor = "transparent";
	 }
 }
 function Color(){
 	 var btn =document.getElementsByClassName("btn1")[0] ;
 	 if(btn.style.borderColor == "transparent")/*同上*/{
 	 btn.style.borderColor = "#0067B7";
 	 }
 	 else{
 		 btn.style.borderColor = "transparent";
 	 }
 }
  function getStyle(obj,attr){
      return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
  }
  
function Become(){
      var oBox = document.getElementById('five-mune1');
      // alert(getStyle(oBox,'width'));        // 700px
      var oLeft = document.getElementById('left');
      var oRight = document.getElementById('right');
      var oWrap = document.getElementById('five-btn1');
      var num = 0;
      var timer = null;
  
      oLeft.onmousedown = function(){
          oWrap.timer = setInterval(function(){
              var dis = parseInt(getStyle(oWrap,'left')) - 10;//速度
              if(dis < -650){
                  dis = -650;
              }
              oWrap.style.left = dis + 'px';
          },30);
      };
  
      oLeft.onmouseup = function(){
          clearInterval(oWrap.timer);
      };
  
      oRight.onmousedown = function(){
          oWrap.timer = setInterval(function(){
              var dis = parseInt(getStyle(oWrap,'left')) + 10;//速度
              if(dis > 0){
                  dis = 0;
              }
              oWrap.style.left = dis + 'px';
          },30);
      };
  
      oRight.onmouseup = function (){
          clearInterval(oWrap.timer);
      };
  };
// function tishi(){
// 	window.alert("您的反馈有助于我们提高我们的网站你对此页面有何想法★★★★★");
// }
var left =document.getElementById('left1');
			var right =document.getElementById('right1');
			var items =document.getElementsByClassName('item');
			
			var index = 0//表示第几张图片；
			
			var goindex = function(){
				for(var i =0;i<items.length;i++){
					items[i].className='item'
					}
				items[index].className='item active';
			}
			var gonext =function(){
				goindex();
				if(index<3)/*如果小于3,执行==*/{
					index++;
				}else{
					index=0;
				}
			}
			
			var gopre =function(){
				if(index==0)/*如果是第一张图片,则返回最后一张*/{
					index=3;
				}else{
					index--;
				}
				goindex();
			}
			function showpic(){
				gonext();
			}
			function Showpic(){
				gopre();
			};
var leftx =document.getElementById('leftx');
var rightx =document.getElementById('rightx');
var lis =document.getElementsByClassName('lii');
			
var index1 = 0//表示第几张图片；
			
var goindex1 = function(){
for(var i =0;i<lis.length;i++){
	lis[i].className='lii'
	}
lis[index1].className='lii active';
}
var gonext1 =function(){
	goindex1();
if(index1<2){
	index1++;
}else{
	index1=0;
	}
	}
			
var gopre1 =function(){
	if(index1==0){
	index1=2;
}else{
	index1--;
}
goindex1();
}
function shoow(){
gonext1();
}
function SHOW(){
	gopre1();
	};
