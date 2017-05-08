FlowRouter.route( '/page1', {
  action: function() {
    BlazeLayout.render( 'page1' );
  },
});

FlowRouter.route( '/page2', {
  action: function() {
    BlazeLayout.render( 'page2' );
  },
});