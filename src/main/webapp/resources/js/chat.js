var sock = new SockJS('https://chat-springmvc.herokuapp.com/chat');
sock.onmessage = onMessage;
sock.onclose = onClose;
sock.onopen = onOpen;

function sendMessage() {
	sock.send($("#msg").val());
	$("#msg").val('');
}
//서버에서 메시지를 받았을 때
function onMessage(msg) {
	
	var data = msg.data;
	var sessionId = null; //데이터를 보낸 사람
	var message = null;
	
	var arr = data.split(":");
	
	for(var i=0; i<arr.length; i++){
		console.log('arr[' + i + ']: ' + arr[i]);
	}
	
	var cur_session = '${user}'; //현재 세션에 로그인 한 사람
	console.log("cur_session : " + cur_session);
	
	sessionId = arr[0];
	message = arr[1];
	
    //로그인 한 클라이언트와 타 클라이언트를 분류하기 위함
	if(sessionId == cur_session){
		var str = "<p>" + sessionId + " : " + message + "</p>";
		$("#msgArea").append(str);
	}
	else{
		var str = "<p>" + sessionId + " : " + message + "</p>";
		$("#msgArea").append(str);
	}
	
}

//채팅창에서 나갔을 때
function onClose(evt) {
	$("#msgArea").append("user님이 퇴장하셨습니다."); //TODO user대신 채팅방 들어온 id값으로
}

//채팅창에 들어왔을 때
function onOpen(evt) {
	$("#msgArea").append("user님이 입장하셨습니다."); //TODO user대신 채팅방 들어온 id값으로
}