jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

jQuery.noconflict();
   jQuery(".Page").on("swipeUp",function($){
    	console.log("one");
        //event.preventDefault();
        console.log(this);
        var n = +$(this).attr("id");
        console.log(n);
        //console.log(deviceHeight*n);
        $("html,body").animate(
        {
        	scrollTop:deviceHeight*n+"px"
        },500);       
    });