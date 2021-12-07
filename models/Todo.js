module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
           allowNull: false
       },
       activity_group_id: {
           type: DataTypes.INTEGER,
           allowNull: false
       },
       title: {
           type: DataTypes.STRING,
           allowNull: false
       },
       comment: {
           type: DataTypes.TEXT,
           allowNull: false
       },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false
        }
    }, {
        tableName: 'todos',
        timestamps: false
    });

    return Todo
}