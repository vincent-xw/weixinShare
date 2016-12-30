$(document).ready(function(){
	function Share(){};
	Share.prototype.load = function() {
		$("#title").html("-加载中");
		$.ajax({
			"url":"/php/sample.php",
			"type":"get",
			"data":{
				"url":location.href.split('#')[0]
			},
			success:function(data){
				share.config(data);
			}
		});
	};
	Share.prototype.config = function(data) {
		data = JSON.parse(data);
		$("#title").html("-加载完成");
		wx.config({
		    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: data.appId, // 必填，公众号的唯一标识
		    timestamp: data.timestamp, // 必填，生成签名的时间戳
		    nonceStr: data.nonceStr, // 必填，生成签名的随机串
		    signature: data.signature,// 必填，签名，见附录1
		    jsApiList: [
		    'checkJsApi',
		    'onMenuShareTimeline',
		    'onMenuShareAppMessage'
		    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		wx.ready(function(){
		    wx.checkJsApi({
		      jsApiList: [
		        'onMenuShareTimeline'
		      ],
		      success: function (res) {
		        alert(JSON.stringify(res));
		      }
		    });
		});
		// 注册分享
		$('#onMenuShareTimeline').click(function () {
			wx.onMenuShareTimeline({
			  title: '互联网之子',
			  link: 'http://movie.douban.com/subject/25785114/',
			  imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
			  trigger: function (res) {
			    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			    alert('用户点击分享到朋友圈');
			  },
			  success: function (res) {
			    alert('已分享');
			  },
			  cancel: function (res) {
			    alert('已取消');
			  },
			  fail: function (res) {
			    alert(JSON.stringify(res));
			  }
			});
			alert('已注册获取“分享到朋友圈”状态事件');
		});
		// getSearch
		// this.getAjax(function(data){
		// 	console.log(data);
		// });
		// getUrl
		// var a = this.getUrl();
		$("#share1").click(function(){
			share.getAjax(function(data){
				data = JSON.parse(data);
				wx.onMenuShareTimeline({

				  title: data.name,
				  link: data.url,
				  imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
				  trigger: function (res) {
				    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				    alert('用户点击分享到朋友圈');
				  },
				  success: function (res) {
				    alert('已分享');
				  },
				  cancel: function (res) {
				    alert('已取消');
				  },
				  fail: function (res) {
				    alert(JSON.stringify(res));
				  }
				});
			});
			
		});
		$("#share2").click(function(){
			var a = share.getUrl();
			if(a){
				wx.onMenuShareTimeline({
				  title: a.name,
				  link: a.url,
				  imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
				  trigger: function (res) {
				    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				    alert('用户点击分享到朋友圈');
				  },
				  success: function (res) {
				    alert('已分享');
				  },
				  cancel: function (res) {
				    alert('已取消');
				  },
				  fail: function (res) {
				    alert(JSON.stringify(res));
				  }
				});
			}else{
				alert("无参数不能分享");
			}
			
			
		});
		$("#share3").click(function(){
			share.getAjax(function(data){
				data = JSON.parse(data);
				wx.onMenuShareAppMessage({

				  title: data.name,
				  link: data.url,
				  desc: '欢迎查阅贾学文的分享',
				  type: 'link',
				  imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
			      trigger: function (res) {
			        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			        alert('用户点击发送给朋友');
			      },
			      success: function (res) {
			        alert('已分享');
			      },
			      cancel: function (res) {
			        alert('已取消');
			      },
			      fail: function (res) {
			        alert(JSON.stringify(res));
			      }
				});
			});
			
		});
		$("#share4").click(function(){
			var a = share.getUrl();
			if(a){
				wx.onMenuShareAppMessage({
				  title: a.name,
				  link: a.url,
				  desc: '欢迎查阅贾学文的分享',
				  type: 'link',
				  imgUrl: 'http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg',
				  trigger: function (res) {
				    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
				    alert('用户点击分享到朋友圈');
				  },
				  success: function (res) {
				    alert('已分享');
				  },
				  cancel: function (res) {
				    alert('已取消');
				  },
				  fail: function (res) {
				    alert(JSON.stringify(res));
				  }
				});
			}else{
				alert("无参数不能分享");
			}
		});
		$("#qrcode1").click(function(){

			// 生成二维码
			new QRCode(document.getElementById("code"), "http://share.jiaxuewen.com/?name=jiaxuewen&url=www.taobao.com");
		
		});
		
		// 格式化中文
		function toUtf8(str) {    
		    var out, i, len, c;    
		    out = "";    
		    len = str.length;    
		    for(i = 0; i < len; i++) {    
		        c = str.charCodeAt(i);    
		        if ((c >= 0x0001) && (c <= 0x007F)) {    
		            out += str.charAt(i);    
		        } else if (c > 0x07FF) {    
		            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
		            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
		            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
		        } else {    
		            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
		            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
		        }    
		    }    
		    return out;    
		} 
	wx.error(function(res){
	    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
	});
	};
	Share.prototype.getAjax = function(callback) {
		$.ajax({
			"url":"php/index.php",
			'type':"get",
			success:function(data){
				callback(data);
			}
		});
	};
	Share.prototype.getUrl = function() {
		var urlSearch = window.location.search;
		urlSearch = urlSearch.substr(1);
		var result = {
			domain : window.location.href
		};
		if(urlSearch == ''){
			return false
		}else{
			var tempArr = urlSearch.split("&");
			
			for (var i = tempArr.length - 1; i >= 0; i--) {
				var temp = tempArr[i].split("=");
				result[temp[0]] = temp[1];
			}
			return result;
		}

	};
	var share = new Share();
	share.load();
});