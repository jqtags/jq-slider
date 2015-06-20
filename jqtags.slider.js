_tag_('jqtags.slider',function(test){
	
	_require_(":seiyria/bootstrap-slider");
	var jq = _module_('jQuery');
	
	return ({
	    tagName: "jq-slider",
	    events: {
	        "slide input":"toggleValue"
	    },
	    accessors: {
	        value: {
	            type: "string"
	        }
	    },	
	    attachedCallback: function () {
	    	var self = this;
	    	
	    	this.$inputTag = jq('<input type="text" value=""/>');
	    	
	    	jq(this.$).append(this.$inputTag);
	        
	        for(var i in this.$.dataset){
	        	this.$inputTag[0].dataset[i] = this.$.dataset[i]
	        }
	        
	        this.$inputTag.slider({}).on('slide',function(e){
	        	self.toggleValue(e);
	        });
	        
	    },
	    toggleValue : function(e){
	    	this.$.value=e.value;
	    }
	});
	
});