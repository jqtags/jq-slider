_spam_('jqtags.slider.demo',function(demo,_demo_){
	
	utils.require(":jqtags/jq-slider");
	
	_demo_._init_ = function(){
		var self = this;
		this.model({
			dateValue : ""	
		});
		this.load({
			src : "test.html"
		}).done(function(){
			self.$$.on("change","#sampleslider", function(e){
				console.info("jquery.on value changed====",e)
				//self.model().dateValue = e.target.value;
			});
		});
	};
	
	_demo_.mychangefun = function(e){
		console.info("_demo_.mychangefun eee====",e);
	}
	
});