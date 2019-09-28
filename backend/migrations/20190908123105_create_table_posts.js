
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.string('title').notNull();
        table.string('description', 2000);
        table.string('imageUrl',1000);
        table.binary('content').notNull();
        table.integer('userId').unsigned();
        /*FK*/
        table.foreign('userId').references('id')
        .inTable('users');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
