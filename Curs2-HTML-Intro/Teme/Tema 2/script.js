(function(){
	var config = {
		max_results: 3,
		max_per_page: 3,
		page: 1
	},
	no_of_pages = Math.ceil( config.max_results / config.max_per_page ),
	results = [];

	function init(){
		for( var x = 0; x < config.max_results; x++ ){
			results[x] = "Result " + x;
		}
		document.getElementById("first").onclick = function() { 
			pager("first");
			return false;
		};
		document.getElementById("second").onclick = function() { 
			pager("second"); 
			return false;
		};
		document.getElementById("third").onclick = function() { 
			pager("reset"); 
            return false;
            
		document.getElementsById("pagination").onclick = function(e) { 
			var page = e.srcElement.getAttribute("data-page");
			if(page){
				pager("second", page);
			}
			return false;
		};
		update_page();
	}
	
	
	function pager(action, page) {
		switch (action) {
			case "first":
				if( (config.page + 1) < no_of_pages ){ 
					++config.page;
				}
				break;
			 
			case "second":
				if( (config.page - 1) >= 1 ){
					 --config.page;
				}
				break;
			
			case "third":
				config.page = 1;
				break;
			
			default:
				break;
		}
		update_page();
	}
	function build_nav() {
		var i,
			page_nav = "";
							
		for( i = config.page; i < no_of_pages; i++ ){
			page_nav += "<ol><a data-page=" + i + ">" + i + "</a></ol>\n";
		}
		return page_nav;
	}
					
	function update_page(){
		document.getElementById("first").innerText = config.page;
		document.getElementById("pagination").innerHTML = build_nav();
	}
	window.addEventListener("load", function() {
		init();
	});