import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
