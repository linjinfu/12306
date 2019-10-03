/*
		http://route.showapi.com/909-1?showapi_appid=84848&showapi_sign=b5f299b7266141a1ac2fc3ff8ee57aa5&from=北京&to=上海&trainDate=20190104
		获取元素
		将元素对应的数据
		点击查询按钮后将出发站跟终点站与时间 发送到服务器
		服务器获取客户端的信息查找返回对应的信息
		将对应的信息返回到客户端
		 */
	function $(id){
		return document.querySelector(id);
	}
	var oBeGin = document.querySelector("#begin"),
		oEnd = document.querySelector("#end"),
		oTime = document.querySelector("#time"),
		oDown = document.querySelector("#down");
		oBox2 = $("#box2");
	
	oDown.onclick = function(){
		var xhr = new XMLHttpRequest;
		var url ="http://route.showapi.com/909-1?showapi_appid=84848&showapi_sign=b5f299b7266141a1ac2fc3ff8ee57aa5&from="+oBeGin.value+"&to="+oEnd.value+"&trainDate="+oTime.value;
		console.log(url);
		xhr.open('get',url,true);
		xhr.send(null);
		xhr.onreadystatechange=function(){
			if(xhr.status==200 && xhr.readyState===4) {
				var data = xhr.responseText;
				data = JSON.parse(data);
				console.log(data);
				var html = '';
				if (data.showapi_res_body.flag == false) {
					console.log(11)
					html +=`<p class='mitake'>无直达列车或输入错误</p>`;
				}else{
					data.showapi_res_body.trains.forEach(function(item,index){
						var firstPrice = item.ticketInfo.firstseat,
							secondPrice = item.ticketInfo.secondseat,
							secondNum =item.ticketInfo.secondseat,
							firstNum = item.ticketInfo.firstseat;
						if(firstPrice){
							firstPrice = item.ticketInfo.firstseat.price;
						}else{
							firstPrice = 0;
						}
						if(firstNum){
							firstNum = item.ticketInfo.firstseat.ticketName;
						}else{
							firstNum = "此列车无一等座";
						}
						if (secondNum) {
							secondNum = item.ticketInfo.secondseat.ticketName;
						}else{
							secondNum = "此列车无二等座";
						}
						if (secondPrice) {
							secondPrice = item.ticketInfo.secondseat.price;
						}else{
							secondPrice = 0
						}
						console.log(item,firstPrice);
						html +=`
							<ul>
							<li class='blue'>车次</li>
							<li class='catnum'>${item.num}</li>
							</ul>
							<ul>
							<li class='blue'>出发站</li>
							<li>${item.fromCity}</li>
							<li class='blue'>到达站</li>
							<li>${item.toCity}</li>
							</ul>
							<ul>
							<li class='blue'>发车时间</li>
							<li>${item.fromTime}</li>
							<li class='blue'>到达时间</li>
							<li>${item.toTime}</li>
							</ul>
							
							<ul>
							<li class='blue'>座位类型</li>
							<li>${firstNum}</li>
							<li class='blue'>票价</li>
							<li>${firstPrice}</li>
							</ul>
							<ul>
							<li class='blue'>座位类型</li>
							<li>${secondNum}</li>
							<li class='blue'>票价</li>
							<li>${secondPrice}</li>
							</ul>
						`;
						
						}
					);
					
				}
							oBox2.innerHTML = html;
			}
		}
	}