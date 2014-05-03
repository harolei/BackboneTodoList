todoApp = todoApp || {};

define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()),
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$input = this.$('.edit');
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change:completed', this.setToggleClass)
        },
        events: {
            'click .destroy': 'deleteItem',
            'click .toggle': 'completeItem',
            'dblclick label': 'editItem'
        },
        deleteItem: function() {
            this.model.destroy();
        },
        completeItem: function() {
            this.model.set('completed',!this.model.get('completed'));
        },
        setToggleClass: function() {
            this.$el.toggleClass('completed', this.model.get('completed'));
        },
        editItem: function() {
            this.$el.addClass('editing');
            this.$input.focus();
        }
    });
});
