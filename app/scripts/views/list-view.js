define(['backbone', 'collections/item-list', './todo-view'],
    function(Backbone, TodoItemList, TodoView) {
        return Backbone.View.extend({
            events: {
                'click #toggle-all': 'markAllCompleted'
            },
            initialize: function() {
                this.listenTo(this.collection, 'add', this.addOne);
            },
            addOne: function(item) {
                var todoView = new TodoView({
                    model: item
                });
                this.$('#todo-list').append(todoView.el);
            },
            markAllCompleted: function() {
                this.collection.toggleCompleted();
            }
        });
    });
