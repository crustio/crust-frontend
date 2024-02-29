(function(){
	function w () {
		var r = document.documentElement;
		var a = r.getBoundingClientRect().width;
    if(a>1139){
      return
    }
		if (a > 750) {
			a = 750;
		};
		rem = a / 26.666;
    console.log(r.style)
    r.setAttribute('style', 'font-size: '+rem + 'px!important');
    console.log(rem)
	};
	var t;
	w();
})();
