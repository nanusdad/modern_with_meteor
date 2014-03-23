Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('about', {
    path: '/about',
    template: 'about'
  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */
  this.route('posts', {
    path: '/posts'
  });
});
