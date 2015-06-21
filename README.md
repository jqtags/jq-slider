It simply repeats the content inside

```html
<jq-slider id="sampleslider"
min="50"  value="70"  max="90"
rx-on-chnage="mychangefun"
>
</jq-slider>
```
Using jQuery you can get/set value

```javascript

$("sampleslider").value(70);

```
