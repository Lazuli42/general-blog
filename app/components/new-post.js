import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    savePost1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        time: this.get('time'),
      };
      this.sendAction('savePost2', params);
    }
  }
});
