_tag_('jqtags.slider',function(slider){
	
	//_require_(":seiyria/bootstrap-slider");
	//_require_(":webmodules/jquery_ui");
	var jq = _module_('jQuery');
	var Slider = _module_("Slider");
	var sliderFun = jq.fn.bootstrapSlider ? "bootstrapSlider" : "slider";
	
	return ({
	    tagName: "jq-slider",
	    //template : "",
	    events: {
	        //"click input":"toggleValue"
	       "change input[range]" : "rangeChange"
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
	        range : {
	        	type : 'boolean',
	        	default : true
	        },
	        step : {
	        	type : 'int',
	        	default : 1
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
	    	
	    	Slider = _module_("Slider");
	    	//console.error(_module_("Slider"))
	    	if(Slider !== undefined){
		    	var $input = document.createElement("input");
		    	this.$.appendChild($input);
		    	//var $input = $("<input rx-value='model.value'>")[0];
		    	//jq(this.$).append($input);
		        
		        //console.warn("$input.dataset[i]",$input.dataset)
		        setTimeout(function(){
			    	//console.warn("00", self.$.max);
			    	[
			    	 ["Max", "max"],["Min", "min"],["Value2","value2"],["TooltipSplit","tooltipSplit"],["Step","step"],
			    	 ["Tooltip","tooltip"]
			    	].map(function(key){
			    		$input.dataset['slider'+key[0]] = self.$[key[1]];
			    	});
			    	//console.error("$input",$input);
		        	self.$slider = new Slider($input);
		        	self.setValue();
		        	//console.info("self.$slider",self.$slider);
		        	jq(self.$).find("input,div.slider").on('change',function(e,target){
			        	 //console.log("changif",e);
			        	 self.$.value=self.$slider.getValue();
			        	 return self.onChange(e);
				     });
		        });
	    	} else if(jq.fn.slider){
	    		setTimeout(function(){
	    			//console.error("$slider_ui",self.$slider_ui);
	    			//console.debug("self.$.min",self.$.min,self.$.max,self.$.value, self.$.getAttribute("range"),self.$.range);
		    		self.$slider_ui = jq(self.$).slider({
						range : self.$.range,
						min : self.$.min-0,
						max : self.$.max-0,
						step : self.$.step,
						//values : [0, 50000],
						slide : function(event, ui) {
							if(self.$.range){
								self.$.value=ui.values[0]+","+ui.values[1];
							} else {
								self.$.value = ui.value;
							}
				        	return self.onChange(event);
						}
		    		});
		    		self.setValue()
	    		});
	    	} else {
		    	self.$input = document.createElement("input");
		    	self.$input.type="range";
		    	self.$input.max=self.$.max;
		    	self.$input.min=self.$.min;
		    	self.$input.value=self.$.value;
		    	self.$.appendChild(self.$input);
		    	self.setValue();
	    	}
	    },
	    rangeChange : function(e,target){
	    	this.$.value = e.target.value;
	    	return this.onChange(e,target);
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
    	    	if(this.$.range){
    	    		if(!this.range){
    	    			this.setAttr("range",true,true);
    	    			this.$slider.refresh();
    	    			this.range = true;
    	    		}
    		    	this.$slider["setValue"]([value[0]-0,value[1]-0]);
    	    	} else {
    	    		this.$slider["setValue"](value[0]-0);
    	    	}
    		} else if(this.$slider_ui){
    	    	if(this.$.range){
    	    		this.range = true;
    		    	this.$slider_ui.slider("option","values",[value[0]-0,value[1]-0]);
    	    	} else {
    	    		this.$slider_ui.slider("option","value",value[0]-0);
    	    	}
    		} else if(this.$input){
    			this.$input.value = value;
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