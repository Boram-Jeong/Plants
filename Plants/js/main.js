var dst_eng = [
		"atm",
		"bakery",
		"bank",
		"bar",
		"bus_station",
		"cafe",
		"clothing_store",
		"convenience_store",
		"department_store",
		"florist",
		"food",
		"gas_station",
		"grocery_or_supermarket",
		"hair_care",
		"hospital",
		"library",
		"liquor_store",
		"movie_theater",
		"museum",
		"night_club",
		"park",
		"parking",
		"pharmacy",
		"police",
		"restaurant",
		"school",
		"shoe_store",
		"shopping_mall",
		"spa",
		"store",
		"subway_station",
		"university",
		"zoo"
]

var dst_kor = [
               "현금지급기",
               "베이커리",
               "은행",
               "바(bar)",
               "버스정류장",
               "카페",
               "옷가게",
               "편의점",
               "백화점",
               "화원",
               "음식점",
               "주유소",
               "슈퍼마켓",
               "미용실",
               "병원",
               "도서관",
               "숩 판매점",
               "영화관",
               "박물관",
               "클럽",
               "공원",
               "주차장",
               "약국",
               "경찰서"         
 ]


var backEventListener = null;

var unregister = function() {
    if ( backEventListener !== null ) {
       document.removeEventListener( 'tizenhwkey', backEventListener );
       backEventListener = null;
     window.tizen.application.getCurrentApplication().exit();
 }
}
   /* document.addListener('tizenhwkey', function(button) {
    	switch(e.keyName)
    	        {
    	            case 'back':
    	            	$.mobile.back();
    	                switch($.mobile.activePage)
    	                {
    	                    case 'one': // use your first page or another page where the application should close if the use press back
    	                    	$.mobile.back();
    	                    		tizen.application.getCurrentApplication().exit();
    	                        break;
    	                    default: // if no case available, the back button returns back to previous page
    	                        $.mobile.back();
    	                }
    	                break;
    	            case 'menu':
    	                // TODO: write a code for pressing menu button
    	                break;
    	        }
    	});*/
    $(window).on("tizenhwkey", function(ev) 
    		{
    		   if (ev.originalEvent.keyName === "back") 
    		   {
    			   
    			   window.history.back()
    		      /* Call window.history.back() to go to previous browser window */
    		      /* or add script to add another behavior */
    		   }
    		})
    
//Initialize function
var init = function () {
    // register once
    if ( backEventListener !== null ) {
        return;
    }
    // TODO:: Do your initialization job
    console.log("init() called");
  
   var backEvent = function(e) {
       if ( e.keyName == "back" ) {
          try {
                if ( $.mobile.urlHistory.activeIndex <= 0 ) {
                    // if first page, terminate app
                   unregister();
                } else {
                    // move previous page
                    $.mobile.urlHistory.activeIndex -= 1;
                    $.mobile.urlHistory.clearForward();
                    window.history.back();
              }
           } catch( ex ) {
                unregister();
           }
        }
    }
    
    // add eventListener for tizenhwkey (Back Button)
    document.addEventListener( 'tizenhwkey', backEvent );
    backEventListener = backEvent;
};

$(document).bind( 'pageinit', init );
$(document).unload( unregister );