import Ember from 'ember';

export default Ember.Controller.extend({

  groupsService: Ember.inject.service(),

  actions: {
    sendMessage (groupId, messageModel) {
      const groupsService = this.get('groupsService');

      groupsService.sendGroupMessage(groupId, messageModel.subject, messageModel.message)
      .then(resp => {
        this.set('msg', {
          message: 'Message Sent',
          class: 'success'
        });
      })
      .catch(e => {
        this.set('msg', {
          message: 'Message Failed!',
          class: 'danger'
        });
      });
    }
  }
});
