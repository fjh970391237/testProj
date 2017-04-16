document.writeln("<script type=\"text/javascript\" src=\"/public/pageJs/jquery-1.7.2.min.js\"></script>");
document.writeln("<script type=\"text/javascript\" src=\"/public/js/imgpub.js\"></script>");
document.writeln("<script type=\"text/javascript\" src=\"/public/js/jqbase.js\"></script>");
document.writeln("<script type=\"text/javascript\" src=\"/public/pagejs/random.js\"></script>");

function AutoScroll(obj) {
	$(obj).each(function() {
		if ($(this).find("dl").size() > 1) {
			var liheight = 28;
			$(this).find("ul:first").animate( {
				marginTop : "-" + liheight + "px"
			}, 600, function() {
				$(this).css( {
					marginTop : "0px"
				}).find("dl:first").appendTo(this)
			})
		}
	})
}
