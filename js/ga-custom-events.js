(function ( Drupal ) {
  Drupal.behaviors.gaCustomEventsBehavior = {
    attach: function (context, settings) {
      // var elements = document.querySelectorAll('[data-ga-event]');
      // for( var i=0;i<elements.length;i++) {
      //
      // }
      const elements = once('ga_custom_events', '[data-ga-event]', context);
      // `elements` is always an Array.
      elements.forEach(this.processingCallback);
      // Drupal.behaviors.gaCustomEventsBehavior.addDataLayerEvent(this);
    },
    processingCallback: function(value, index) {
      value.addEventListener('click', Drupal.behaviors.gaCustomEventsBehavior.addDataLayerEvent);
    },
    addDataLayerEvent: function(event) {
      var element = event.target;
      if ( window.dataLayer != undefined ) {
        var trackingObject = {
          'event': element.getAttribute('data-ga-event'),
          'category': element.getAttribute('data-ga-category'),
          'action': element.getAttribute('data-ga-action'),
          'label': element.getAttribute('data-ga-label'),
        };

        if ( drupalSettings.gacustomevents.settings.enable_debug === true ) {
          console.log('trackingObject', trackingObject);
        }

        if ( drupalSettings.gacustomevents.settings.disable_data_layer === false ) {
          window.dataLayer.push(trackingObject);
        } else {
          console.log('dataLayer.push() has been disabled.');
        }
      } else {
        if ( drupalSettings.gacustomevents.settings.enable_debug === true ) {
          console.warn('window.dataLayer is not defined. You will need to implement Google Tag Manager or Google Analytics to use this feature.');
        }
      }
    }
  };
})( Drupal );
