import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,

  actions: {

    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },

    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        time: this.get('time'),
      };
      this.set('isImageShowing', false);
      this.sendAction('savePost2', params);
    }
  }
});
