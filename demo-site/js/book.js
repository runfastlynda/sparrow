$(document).ready(function(){
	var doubanApi = 'https://api.douban.com/v2/book/';
	var re = /(\d+?)\/$/gm; 
	$('.book a').each(function(){
		var self = $(this);
		var bookId;
		var temp = $(this).attr('href');
		while (( m = re.exec(temp)) !== null) {
			if (m.index === re.lastIndex) {
				re.lastIndex++;
			}
			bookId = m;
		}	
		var doubanBookApi = doubanApi+bookId[1];
		$.ajax({
			url: doubanBookApi,
			type: "get",
			dataType: 'jsonp',
			success: function(data){
				var image = data.images.small;
				var img = $(document.createElement('img')); 
				img.attr('src', image);
				self.prepend(img);
			},
			error: function(){
				var img = $(document.createElement('img')); 
				img.attr('src', '../img/sparrow.png');
				self.prepend(img);
			}
		});
	});
});