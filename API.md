###Attributes
Options can be passed either as a data (data-slider-foo) attribute, or as part of an object in the slider call.

| Name | Type |	Default |	Description |
| ---- | ---- | ------- | -----------|
| id | string | '' | set the id of the slider element when it's created |
| min |	float	| 0 |	minimum possible value |
| max |	float |	10 |	maximum possible value |
| step | float |	1 |	increment step |
| *precision | float |	number of digits after the decimal of _step_ value |	The number of digits shown after the decimal. Defaults to the number of digits after the decimal of _step_ value. |
| *orientation |	string | 'horizontal' |	set the orientation. Accepts 'vertical' or 'horizontal' |
| value |	float,array |	5	| initial value. Use array to have a range slider. |
| range |	bool |	false	| make range slider. Optional if initial value is an array. If initial value is scalar, max will be used for second value. |
| *selection |	string |	'before' |	selection placement. Accepts: 'before', 'after' or 'none'. In case of a range slider, the selection will be placed between the handles |
| tooltip |	string |	'show' |	whether to show the tooltip on drag, hide the tooltip, or always show the tooltip. Accepts: 'show', 'hide', or 'always' |
| tooltip_split |	bool |	false |	if false show one tootip if true show two tooltips one for each handler |
| *handle |	string |	'round' |	handle shape. Accepts: 'round', 'square', 'triangle' or 'custom' |
| *reversed | bool | false | whether or not the slider should be reversed |
| *enabled | bool | true | whether or not the slider is initially enabled |
| *natural_arrow_keys | bool | false | The natural order is used for the arrow keys. Arrow up select the upper slider value for vertical sliders, arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not. By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value. |
| *ticks | array | [ ] | Used to define the values of ticks. Tick marks are indicators to denote special values in the range. This option overwrites min and max options. |
| *ticks_positions | array | [ ] | Defines the positions of the tick values in percentages. The first value should alwasy be 0, the last value should always be 100 percent. |
| *ticks_labels | array | [ ] | Defines the labels below the tick marks. Accepts HTML input. |
| *ticks_snap_bounds | float | 0 | Used to define the snap bounds of a tick. Snaps to the tick if value is within these bounds. |
| *scale | string | 'linear' | Set to 'logarithmic' to use a logarithmic scale. |
| *focus | bool | false | Focus the appropriate slider handle after a value change. |

* Will be added in future.

###Events
| Event | Description | Value |
| ----- | ----------- | ----- |
| slide | This event fires when the slider is dragged | The new slider value |
| slideStart | This event fires when dragging starts | The new slider value |
| slideStop | This event fires when the dragging stops or has been clicked on | The new slider value |
| change | This event fires when the slider value has changed | An object with 2 properties: "oldValue" and "newValue" |
| slideEnabled | This event fires when the slider is enabled | N/A |
| slideDisabled | This event fires when the slider is disabled | N/A |



