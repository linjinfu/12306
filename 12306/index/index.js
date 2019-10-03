var aMiddleImg =document.querySelectorAll('.middle_img'),
    oMiddleRightBtn = document.querySelector('.middle_right_btn'),
    oMiddleLeftBtn = document.querySelector('.middle_left_btn'),
    aMiddleUlLi = document.querySelectorAll('.middle ul li'),
    index = 0,
    lastIndex = 0,
    timeId;
     console.log(aMiddleUlLi,aMiddleImg)
     oMiddleRightBtn.onclick = function()
    {
    	autoplay(function(){
    	index++;
    	if (index >= aMiddleImg.length) {
    		index = 0;
    	}
    });
}
oMiddleLeftBtn.onclick = function()
    {
    	autoplay(function()
    	{
    		index--;
    		if (index < 0) {
    			index = aMiddleImg.length - 1;
    		}
    	})
    }

  function autoplay(fn){
  	aMiddleImg[lastIndex].classList.remove('on');
  	aMiddleUlLi[lastIndex].classList.remove('on');
  	fn();
  	aMiddleImg[index].classList.add('on');
  	aMiddleUlLi[index].classList.add('on');
  	lastIndex = index;
  }

  function play(){
  	timeId = setInterval(function(){
  		autoplay(function(){
  			index++;
  			if (index >= aMiddleImg.length) {
  				index = 0;
  			}
  		})
  	},3000)
  }
  play();
  oMiddleRightBtn.onmouseover = function(){
  	clearInterval(timeId)
  }
  oMiddleRightBtn.onmouseout = function(){
  	play()
  }
  oMiddleLeftBtn.onmouseover = function(){
  	clearInterval(timeId)
  }
  oMiddleLeftBtn.onmouseout = function(){
  	play()
  }