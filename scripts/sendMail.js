var sendMailUri = "http://oa.gzkinglon.com:8080/MailServer/sendMailServlet";
//var sendMailUri = "http://localhost:8080/MailServer/sendMailServlet";
function sendMail(queryString){
	
	$("#sendMailDiv").hide();
	$("#smallknowledgeShowDiv").hide();
	$("#smallknowledgecontentDiv").empty();
	
	
	$.post(sendMailUri + "?" + queryString,null,function(json){
		
		
		
	},"JSON");
};

function SendContent(){
	
	
};

function feedback(){
	
	$("#smallknowledgeShowDiv").show();
	$("#smallknowledgecontentDiv").empty();
	//$("#smallknowledgecontentDiv").append('<div style="text-align: center;width=100px;"><h3>填写资料，可能得到奖励哦！</h3><br/><br/>电话号码：<input type="text" name="phone" /><br/>分　　数：<input type="text" name="score" value=' + getScore()+' readonly="readonly"/><br/><br/><br/><button onclick="send()">提交</button></div>');
	$("#sendMailDiv").show();
	$("input[name='score']").val(getScore());
}

function send(){
	
	var sendConten = new SendContent();
	
	phone=$("input[name='phone']").val();
	score=$("input[name='score']").val();
	var queryString = "phone=" + phone +"&score="+score;
	sendMail(queryString);
}