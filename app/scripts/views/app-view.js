define(['backbone', 'collections/item-list', './todo-view'],
    function(Backbone, TodoItemList, TodoView) {
        return Backbone.View.extend({
            el: '#todoapp',
            events: {
                'change #new-todo': 'createNewItem'
            },
            initialize: function() {
                this.todoList = new TodoItemList();
                this.listenTo(this.todoList, 'add', this.addOne);
            },
            createNewItem: function() {
                if ($('#new-todo').val() != '') {
                    this.todoList.add({
                        title: this.$('#new-todo').val(),
                        completed: false
                    });
                    $('#new-todo').val('');
                }
            },
            addOne: function(item) {
                var todoView = new TodoView({
                    model: item
                });
                $('#todo-list').append(todoView.el);
            }
        });
    });
