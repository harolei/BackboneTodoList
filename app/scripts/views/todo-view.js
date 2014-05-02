todoApp = todoApp || {};

define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.View.extend({
        tagName:  'li',
        template: _.template($('#item-template').html()),
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.listenTo(this.model, 'destroy', this.remove);
        },
        events: {
            'click .destroy': 'deleteItem'
        },
        deleteItem: function(){
            this.model.destroy();
        }
    });
});
