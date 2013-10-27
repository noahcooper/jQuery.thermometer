/*
 * jQuery.thermometer - https://github.com/noahcooper/jQuery.thermometer
 * Version: 1.0 (11-AUG-2013)
 * Requires: jQuery v1.6.4+
 *
 * Released under the MIT license.
 * https://github.com/noahcooper/jQuery.thermometer/blob/master/MIT-LICENSE.txt
 */

(function($) {
  $.fn.thermometer = function(options) {
    var settings = $.extend({
      percent: 0, 
      orientation: 'horizontal', 
      animate: true, 
      speed: 1000
    }, options || {});
    
    return this.each(function() {
      var _percent = $(this).data('percent') || settings.percent, 
      _orientation = $(this).data('orientation') || settings.orientation, 
      _animate = $(this).data('animate') === false ? false : settings.animate, 
      _speed = $(this).data('speed') || settings.speed;
      
      /* set the orientation */
      _orientation = _orientation.toLowerCase() === 'vertical' ? 'v' : 'h';
      
      /* set min and max percentage */
      if(isNaN(_percent) || _percent < 0) {
        _percent = 0;
      }
      else if(_percent > 100) {
        _percent = 100;
      }
      
      /* override the default "slow" duration used by jQuery.animate() */
      if($.type(_speed) === 'string' && _speed.toLowerCase() === 'slow') {
        _speed = 1500;
      }
      
      $(this).html('<div class="thermometer-outer thermometer-outer-' + _orientation + '">' + 
                     '<div class="thermometer-inner thermometer-inner-' + _orientation + '">' + 
                     '</div>' + 
                   '</div>');
      
      var initialInnerSize = _animate ? 0 : (_percent + '%');
      if(_orientation === 'v') {
        $(this).find('.thermometer-outer').css('position', 'relative');
        $(this).find('.thermometer-inner').css({
          position: 'absolute', 
          bottom: '0', 
          height: initialInnerSize
        });
      }
      else {
        $(this).find('.thermometer-inner').css('width', initialInnerSize);
      }
      
      if(_animate) {
        var animateProperties = {};
        if(_orientation === 'v') {
          animateProperties.height = _percent + '%';
        }
        else {
          animateProperties.width = _percent + '%';
        }
        $(this).find('.thermometer-inner').animate(animateProperties, _speed);
      }
    });
  };
})(jQuery);