define(['underscore', 'backbone'], function(_, Backbone) {
    return Backbone.View.extend({
        tagName:  'li',
        template: _.template($('#item-template').html()),
        initialize: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});
