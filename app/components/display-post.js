import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updatePostForm: false,
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    delete(post){
      if (confirm('is you for positive?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
