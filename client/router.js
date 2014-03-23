Router.configure({
  layoutTemplate: 'layout',
  autoRender: false,
  autoStart: false
});

Router.map(function () {

  var self = this;

  console.log('rroutes' + JSON.stringify(rroutes));
  rroutes.forEach(function(element){
    console.log(element);
    self.route(element.rname, {
      path: element.rpath,
      template: element.rtemplate
    });
  });

  Router.start();

});


