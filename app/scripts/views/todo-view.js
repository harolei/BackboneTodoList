define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item-template').html()),
        initialize: function() {
            this.render();
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'change', this.render);
        },
        events: {
            'click .destroy': 'deleteItem',
            'click .toggle': 'toggleItem',
            'dblclick label': 'editItem',
            'blur .edit': 'endEditItem',
            'change .edit': 'endEditItem'
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.setCompletedClass();
            return this;
        },
        deleteItem: function() {
            this.model.destroy();
        },
        toggleItem: function() {
            this.model.toggleCompleted();
        },
        setCompletedClass: function() {
            this.$el.toggleClass('completed', this.model.get('completed'));
            this.$('.toggle').checked = this.model.get('completed');
        },
        editItem: function() {
            this.$el.addClass('editing');
            this.$('.edit').focus();
        },
        endEditItem: function() {
            this.$el.removeClass('editing');
            this.model.changeTitle(this.$('.edit').val());
        }
    });
});
