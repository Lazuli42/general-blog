import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    delete(post){
      if (confirm('is you for positive?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
