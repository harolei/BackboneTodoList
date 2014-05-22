define(['backbone', 'collections/item-list', './create-view', './list-view'],
    function(Backbone, TodoItemList, CreateView, ListView) {
        return Backbone.View.extend({
            initialize: function() {
                var todoList = new TodoItemList();
                new CreateView({
                    collection: todoList,
                    el: $('#new-todo')
                });
                new ListView({
                    collection: todoList,
                    el: $('#main')
                });
            }
        });
    });