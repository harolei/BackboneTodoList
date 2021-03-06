define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },
        toggleCompleted: function() {
            this.set('completed', !this.get('completed'));
        },
        changeTitle: function(title) {
            this.set('title', title);
        }
    });
});