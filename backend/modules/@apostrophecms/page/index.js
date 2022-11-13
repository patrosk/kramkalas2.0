// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Default Home'
      },
      {
        name: 'about-page',
        label: 'About'
      },
      {
        name: 'contact-page',
        label: 'Contact'
      },
      {
        name: 'home-page',
        label: 'Home'
      }
    ]
  }
};
