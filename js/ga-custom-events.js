(function ( Drupal ) {
  Drupal.behaviors.gaCustomEventsBehavior = {
    attach: function (context, settings) {
      var elements = document.querySelectorAll('[data-ga-event]');
      for( var i=0;i<elements.length;i++) {
        var gtmEvent = elements[i].getAttribute('data-ga-event');
        var gtmCategory = elements[i].getAttribute('data-ga-category');
        var gtmAction = elements[i].getAttribute('data-ga-action');
        var gtmLabel = elements[i].getAttribute('data-ga-label');
        if( gtmEvent != undefined && gtmCategory != undefined && gtmAction != undefined && gtmLabel != undefined ) {
          elements[i].addEventListener('click', function(){
            Drupal.behaviors.gaCustomEventsBehavior.addDataLayerEvent(this);
          });
        }
      }
    },
    addDataLayerEvent: function(element) {
      if ( window.dataLayer != undefined ) {
        var gtmEvent = element.getAttribute('data-ga-event');
        var gtmCategory = element.getAttribute('data-ga-category');
        var gtmAction = element.getAttribute('data-ga-action');
        var gtmLabel = element.getAttribute('data-ga-label');
        window.dataLayer.push({
          'event': gtmEvent,
          'category': gtmCategory,
          'action': gtmAction,
          'label': gtmLabel,
        });
      }
    }
  };
})( Drupal );
