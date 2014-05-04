define(['backbone', 'collections/item-list', './todo-view'],
    function(Backbone, TodoItemList, TodoView) {
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(this.collection, 'add', this.addOne);
            },
            addOne: function(item) {
                var todoView = new TodoView({
                    model: item
                });
                this.$el.append(todoView.el);
            }
        });
    });
