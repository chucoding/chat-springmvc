<%@ page contentType="text/html; charset=UTF-8"  %>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<script src="https://code.jquery.com/jquery-3.6.1.slim.min.js" integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
	<script src="/resources/js/chat.js"></script>
</head>
<body>
<div class="container">
	<div class="col-6">
		<label><b>채팅방</b></label>
	</div>
	<div>
		<div id="msgArea" class="col">
		</div>
		<div>
			메시지 : 
			<input type="text" id="msg">
			<button type="button" id="button-send" onClick="send()">전송</button>
		</div>
	</div>
	<div class="col-6">
	</div>
</div>
</body>
</html>
