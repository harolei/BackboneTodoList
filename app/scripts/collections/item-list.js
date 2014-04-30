define(['underscore', 'backbone', 'models/item'
    ], function(_, Backbone, TodoItem){
        return Backbone.Collection.extend({
            model: TodoItem
        });
    });
