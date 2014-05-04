define(['backbone', 'collections/item-list'],
    function(Backbone, TodoItemList) {
        return Backbone.View.extend({
            events: {
                'change': 'createNewItem'
            },
            createNewItem: function() {
                if (this.$el.val() != '') {
                    this.collection.add({
                        title: this.$el.val()
                    });
                    this.$el.val('');
                }
            }
        });
    });
