_spam_('jqtags.slider.demo',function(demo,_demo_){
	
	_require_(":seiyria/bootstrap-slider",":jqtags/jq-slider");
	//_require_(":webmodules/jquery_ui",":jqtags/jq-slider");
	
	demo._ready_ = function(){
		//$("head").append('<link rel="import" href="'+CONTEXT_PATH+'lib/pitana/pt-progressbar/src/pt-progressbar.html">');
	};
	
	
	_demo_._init_ = function(){
		var self = this;
		this.model({
			min : "50",
			value : "70",
			max : "98"
		});
		this.load({
			src : "test.html",
			data : {
				name : "Lalit Tanwar",
			}
		}).done(function(){
			self.$$.on("change","jq-slider#sampleslider", function(e){
				console.info("jquery.on CHANGE====",e)
				//self.model().dateValue = e.target.value;
			});
			self.$$.on("input","jq-slider#sampleslider", function(e){
				console.info("jquery.on INPUT====",e)
				//self.model().dateValue = e.target.value;
			});
			
			setInterval(function(){
				//self.model().value=(50 + ((self.model().value*2+48) % 20));
				//self.model().max=89;
				//self.model().min=52;
			},2000);
			
		});
		
	};
	
	_demo_.mychangefun = function(e){
		this.model().value=e.target.value;
		console.info("_demo_.mychangefun eee====",e.target.value);
	};
	
});