_tag_('jqtags.slider',function(slider){
	
	//_require_(":seiyria/bootstrap-slider");
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
	        },
	        tooltipSplit : {
		        type : 'boolean',
	        	default : true
	        },
	        tooltip : {
	        	type : 'string',
        		default : "hide"
	        }
	    },	
	    attachedCallback: function () {
	    	var self = this;
	    	if(Slider ===!undefined){
		    	var $input = document.createElement("input");
		    	this.$.appendChild($input);
		    	//var $input = $("<input rx-value='model.value'>")[0];
		    	//jq(this.$).append($input);
		        
		        //console.warn("$input.dataset[i]",$input.dataset)
		        setTimeout(function(){
			    	//console.warn("00", self.$.max);
			    	[
			    	 ["Max", "max"],["Min", "min"],["Value2","value2"],["TooltipSplit","tooltipSplit"],
			    	 ["Tooltip","tooltip"]
			    	].map(function(key){
			    		$input.dataset['slider'+key[0]] = self.$[key[1]];
			    	});
			    	
		        	self.$slider = new Slider($input);
		        	self.setValue();
		        	//console.info("self.$slider",self.$slider);
		        	jq(self.$).find("input,div.slider").on('change',function(e,target){
			        	 //console.log("changif",e);
			        	 self.$.value=self.$slider.getValue();
			        	 return self.onChange(e);
				     });
		        })
	    	} else {
	    		self.$slider_ui = jq(this.$).slider({
					range : true,
					min : self.$.min,
					max : self.$.max,
					//values : [0, 50000],
					slide : function(event, ui) {
			        	 self.$.value=ui.values[0]+","+ui.values[1];
			        	 return self.onChange(event);
					}
	    		});
	    		self.setValue()
	    	}
	    },
	    detachedCallback : function(){
	    	
	    },
	    onChange : function(e,target){
	    	this.valueChange();
	    	if(e.target!==this.$){
	    		return window.preventPropagation(e);
	    	}
	    },
	    setValue : function(){
    		var value = (this.$.value+"").split(",");
    		if(this.$slider){
    	    	if(value.length === 2){
    		    	this.$slider["setValue"]([value[0]-0,value[1]-0]);
    	    	} else {
    	    		this.$slider["setValue"](value[0]-0);
    	    	}
    		} else if(this.$slider_ui){
    	    	if(value.length === 2){
    		    	this.$slider_ui.slider("option","values",[value[0]-0,value[1]-0]);
    	    	} else {
    	    		this.$slider_ui.slider("option","value",value[0]-0);
    	    	}
    		}
	    },
	    valueOnSet : function(e){
	    	if(this.$slider || this.$slider_ui){
	    		this.setValue();
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