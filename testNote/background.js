
var t;
var max_time = 100; //限制循环判断最大次数
var already_check = 0; //循环判断次数
$(document).ready(function () {
	t = setInterval("checkSaveBtn()", 100);

	var doc = parent.document.body;
	var body=document.body;
	console.log(body);
	console.log("ces");
	//var iframe = doc.find("iframe");
	let h='100%';//'6400px';
	$("#root .banner",doc).remove();
	$("#root .mianze",doc).remove();
	$("#root .comment-area",doc).remove();
	$("#root .report",doc).remove();
	$("#root .save",doc).remove();
	$("#root #svg",doc).remove();
	$("#root .hint-container",doc).remove();
	$("#root #alert",doc).remove();
	$("#root #image-box",doc).remove();
	$("#root #demo-box",doc).remove();
	$("#root #main-container",doc).css("width","100%");
	$("#root #main-container",doc).css("height",h);
	$("#root #main-container",doc).css("overflow","scroll");
	$("#root #mindmap",doc).css("width","100%");
	$("#root #mindmap",doc).css("height",h);
	$("#root #mindmap",doc).css("overflow","scroll");

	let h_iframe=$("#root #mindmap iframe",doc).height();
	console.log(body.height);
	console.log(h_iframe);
	$("#root #mindmap iframe",doc).css("height","10000px");
	//doc.css("overflow","scroll");

	//$("#mindmap-innern").hide();
	//#mindmap-container
	
	let h_real=$("#__next #mindmap-container .mindmap-design").css("height");
	console.log(h_real);
	console.log("高度");
	//alert(doc.clientHeight);
	//alert(window.screen.height)
	
	//$("body",doc).html("111");
	//$("#root",doc).remove();
	var iframe =$("#mindmap iframe",doc);
	//doc.append(iframe);
	//$("body",doc).html("<iframe src=\"/mindmap/\"></iframe>");
	//$("#root",doc).remove();
	console.log(doc);
	console.log(iframe);
return false;
	$(document).on("click", "#save-to-note",
		function () {
			var body = document.body;
			var frame = $("iframe")[0];
			console.log(frame);
			//判断iframe src包含/md/preview做markdown全屏处理,iframe宽高改为100%,定位article标签markdown-body class，去除min max width和padding
			//从iframe到article每个标签都增加height 100%处理，使文章可滚动,done
			if (frame.src.indexOf("md/preview") >= 0) {
				//全屏markdown预览
				body.appendChild(frame);
				document.getElementById("root").remove();
				$(frame).addClass("max-height");
				$(frame).on("load", function () {
					//iframe加载完成后你需要进行的操作
					var frameDoc = $(this).contents()
					frameDoc.find("html").addClass("max-height");
					frameDoc.find("html body").addClass("max-height");
					frameDoc.find("article").addClass("max-height add-scroll");
				});

			} else if (frame.src.indexOf("mindmap") >= 0) {
				//判断iframe src包含mindmap做思维导图全屏处理
				body.appendChild(frame);
				document.getElementById("root").remove();
			}
		});
});

function checkSaveBtn() {
	if (already_check > max_time) {
		clearInterval(t);
		return;
	}
	already_check++;
	//let h=$("#__next ").css("height");
	
	
	//alert(h)
	if ($('#save-to-note').length > 0) {
		//页面中含有这个元素，执行的代码
		$('#save-to-note').html("全屏");
		
		clearInterval(t);
	}
}
