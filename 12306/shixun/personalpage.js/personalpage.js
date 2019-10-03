var  oUser = document.querySelector('#user'),
oUserNameVal = localStorage.getItem('username');
if (oUserNameVal) {
	oUser.innerHTML = `
	   <a html="">${oUserNameVal}</a> | <a html="" id="logout">注销</a>
	   `;
	   var oLogOut = document.querySelector('#user #logout');
	   oLogOut.onclick =function(){
	   	var bool = confirm('确认是否注销');
	   	if(bool){
	   		localStorage.removeItem('username');
	   		setInterval(function(){
	   			   window.location.reload();
	   		},1000)
	   	}
	 }
}else{
	oUser.innerHTML = `
	<a href="register.html">注册</a> | <a href="login.html">登陆</a>
	`
}
