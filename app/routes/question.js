import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  // model(params) {
  //   return Ember.RSVP.hash({
  //     question: this.store.findRecord('question', params.question_id),
  //     questions: this.store.findAll('question'),
  //     answers: this.store.findAll('answer'),
  //   });
  // },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },

    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        answer.destroyRecord();
        this.transitionTo('question', question);
      }
    }
  }
});
