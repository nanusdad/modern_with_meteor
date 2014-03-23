var rroutes = [{
  rname: 'home',
  rpath: '/',
  rtemplate: 'home'
},{
  rname: 'about',
  rpath: '/about',
  rtemplate: 'about'
},{
  rname: 'services',
  rpath: '/services',
  rtemplate: 'services'
},{
  rname: 'contact',
  rpath: '/contact',
  rtemplate: 'contact'
}];

Router.configure({
  layoutTemplate: 'layout',
  autoRender: false,
  autoStart: false
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
   var self = this;

  console.log('rroutes' + JSON.stringify(rroutes));
  rroutes.forEach(function(element){
    console.log(element);
    self.route(element.rname, {
      path: element.rpath,
      template: element.rtemplate
    });
  });

  /*
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('about', {
    path: '/about',
    template: 'about'
  });
  */
  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
  
  this.route('posts', {
    path: '/posts'
  });
*/
      Router.start();
});


