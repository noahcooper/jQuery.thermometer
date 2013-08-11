jQuery.thermometer
==================

**Version: 1.0 (11-AUG-2013)**  
**Requires: jQuery v1.6.4+**

jQuery.thermometer is a jQuery plugin which can be used to create thermometers and progress meters.

Basic Thermometer
-----------------

At its simplest, the markup for a thermometer looks like this:

``` html
<div data-percent="75"></div>
```

The `data-percent` attribute indicates the thermometer's percent to goal, in this case 75%. While this attribute is not required, if it is not defined, the default is 0%.

Of course, using the plugin on this element will prove much easier if it can be identified with some meaningful selector, like:

``` html
<div class="thermometer" data-percent="75"></div>
```

With this className added, calling the plugin is a piece of cake:

``` js
$('.thermometer').thermometer();
```

Once `jQuery.thermometer()` has been called, a thermometer will be inserted into the element. (Note: The thermometer will completely replace the element's existing innerHTML.)

``` html
<div class="thermometer" data-percent="75">
  <div class="thermometer-outer">
    <div class="thermometer-inner"></div>
  </div>
</div>
```

Styling the thermometer is simple:

``` css
.thermometer-outer {
  background: #c4f0ff;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  height: 20px;
  width: 100%;
}
.thermometer-inner {
  background: #3f83f7;
  height: 20px;
}
```

As the thermometer is animated, the plugin will automatically adjust `.thermometer-inner` to set its width (for horizontal thermometers) or height (for vertical thermometers). For this reason, you should not set these properties within your CSS.

Slow Animation
--------------

The plugin animates thermometers using [jQuery.animate()](http://api.jquery.com/animate/). By default, the plugin will use an animation duration of 1 second. The `data-speed` attribute can be used to adjust this. Setting the speed to "slow" will result in a duration of 1.5 seconds instead.

``` html
<div class="thermometer" data-percent="75" data-speed="slow"></div>
```

Fast Animation
--------------

Setting the speed to "fast" will result in an animation duration of 200 milliseconds.

``` html
<div class="thermometer" data-percent="75" data-speed="fast"></div>
```

Explicit Animation Speed
------------------------

Alternatively, the speed can be adjusted using an explicitly defined number of milliseconds.

``` html
<div class="thermometer" data-percent="75" data-speed="600"></div>
```

No Animation
------------

Animation can be completely disabled using the `data-animate` attribute.

``` html
<div class="thermometer" data-percent="75" data-animate="false"></div>
```

Vertical Thermometer
--------------------

By default, thermometers will be displayed horizontally. The `data-orientation` attribute can be used to instead render a vertical thermometer.

``` html
<div class="thermometer" data-percent="75" data-orientation="vertical"></div>
```

Horizontal and vertical thermometers use distinct classNames, "thermometer-outer-h" and "thermometer-inner-h" and "thermometer-outer-v" and "thermometer-inner-v" respectively.

``` html
<div class="thermometer" data-percent="75" data-orientation="vertical">
  <div class="thermometer-outer thermometer-outer-v">
    <div class="thermometer-inner thermometer-inner-v"></div>
  </div>
</div>
```

This allows for styles to be defined differently for each orientation.

``` css
.thermometer-outer {
  background: #c4f0ff;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
}
.thermometer-outer-h {
  height: 20px;
  width: 100%;
}
.thermometer-outer-v {
  height: 200px;
  width: 20px;
}
.thermometer-inner {
  background: #3f83f7;
}
.thermometer-inner-h {
  height: 20px;
}
.thermometer-inner-v {
  width: 20px;
}
```

Configuration Options
---------------------

When `jQuery.thermometer()` is called, it optionally accepts a configuration object which will override the default plugin settings.

``` js
$('.thermometer').thermometer({
  percent: 75, 
  speed: 'slow'
});
```

Even if a configuration object is provided, inline `data-` attributes will always take precedence.