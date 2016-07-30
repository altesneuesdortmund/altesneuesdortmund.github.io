$(document).ready(function() {
    $('.tooltip').tooltipster({
    theme: 'tooltipster-punk',
    delay: 0,
    timer: 20000,
    delayTouch: 0,
    'maxWidth': 270,
    contentAsHTML: true,
    touchDevices: true,
    interactive: true,
      // trigger: 'hover'
    trigger: 'custom',
     triggerOpen: {
         click: true,
         tap: true,
         mouseenter: true
         },
        triggerClose: {
         click: true,
         scroll: false,
         tap: true,
         mouseleave: true
         }
});
});
