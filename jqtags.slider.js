_tag_('jqtags.slider',function(slider){
	
	_require_(":seiyria/bootstrap-slider");
	var jq = _module_('jQuery');
	var Slider = _module_("Slider");
	var sliderFun = $.fn.bootstrapSlider ? "bootstrapSlider" : "slider"
	
	return ({
	    tagName: "jq-slider",
	    //template : "",
	    events: {
	        //"change input":"toggleValue"
	       // "change" : "onChange"
	    },
	    accessors: {
	        value: {
	            type: "string",
	            default : "0",
	            onChange : "valueOnSet"
	        },
	        max : {
	        	type : 'string',
	        	default : "0",
	        	onChange : "setAttr"
	        },
	        min : {
	        	type : 'string',
	        	default : "10",
	        	onChange : "setAttr"
	        }
	    },	
	    attachedCallback: function () {
	    	var self = this;
	    	var $input = document.createElement("input");
	    	this.$.appendChild($input);
	    	//var $input = $("<input rx-value='model.value'>")[0];
	    	//jq(this.$).append($input);
	        
	        //console.warn("$input.dataset[i]",$input.dataset)
	        setTimeout(function(){
		    	//console.warn("00", self.$.max);
		    	["Max","Min","Value"].map(function(key){
		    		$input.dataset['slider'+key] = self.$[key.toLowerCase()];
		    	});
		    	
	        	self.$slider = new Slider($input)
	        	//console.info("self.$slider",self.$slider);
	        	jq(self.$).find("input,div.slider").on('change',function(e,target){
		        	 //console.log("changif",e);
		        	 self.$.value=self.$slider.getValue();
		        	 return self.onChange(e);
			     });
	        	
	        })
	    },
	    detachedCallback : function(){
	    	
	    },
	    onChange : function(e,target){
	    	this.valueChange();
	    	if(e.target!==this.$){
	    		return window.preventPropagation(e);
	    	}
	    },
	    valueOnSet : function(e){
	    	if(this.$slider){
	    		var value = (this.$.value+"").split(",");
	    		//console.info("valueOnSet",value);
		    	if(value.length === 2){
			    	this.$slider["setValue"]([value[0]-0,value[1]-0]);
		    	} else {
		    		this.$slider["setValue"](value[0]-0);
		    	}
		    	//this.$.value = 
		    	//console.info("valueOnSet",e)
		    	this.valueChange();
	    	}
	    },
	    valueChange : function(){
	    	//console.debug("trigger changes*******************")
			slider.trigger(this.$,"input");
	    	slider.trigger(this.$,"change");
	    },
	    setAttr : function(attrName,oldVal,newVal){
	    	if(this.$slider){
		    	//console.error("setAttr",attrName,oldVal,newVal);
		    	this.$slider["setAttribute"](attrName,newVal);
	    	}
	    },
	    refresh : function(){
	    	this.$slider[sliderFun]("refresh");
	    }
	});
	
});