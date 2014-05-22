define(['underscore', 'backbone', 'models/item'
    ], function(_, Backbone, TodoItem){
        return Backbone.Collection.extend({
            model: TodoItem,
            initialize: function() {
                this.completeToggle = true;
            },
            toggleCompleted: function() {
                var itemList = this;
                itemList.each(function(item) {
                    item.toggleCompleted();
                });
            },
            isAllCompleted: function() {
                return this.every(this.pluck('completed'), true);
            }
        });
    });
