import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize(
    'vgshop',
    'root',
    'minh0123',
    {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

  // --------------------------User-----------------------------------------

export const User = sequelize.define("users", {
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

sequelize.sync().then(() => {
    console.log('User table created successfully!');
 }).catch((error) => {
    console.error('Unable to create User : ', error);
 });

 // --------------------------Game-----------------------------------------

 export const Game = sequelize.define("games", {
    game_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    publisher_id: {
        type: DataTypes.STRING,
        references: {
            model: "publishers",
            key: "publisher_id",
        },
        allowNull: false
    },
    category_id: {
        type: DataTypes.STRING,
        references: {
            model: "categories",
            key: "category_id",
        },
        allowNull: false
    },
    game_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sold_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    released: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('Game table created successfully!');
 }).catch((error) => {
    console.error('Unable to create Game : ', error);
 });

 // --------------------------Publisher-----------------------------------------

 export const Publisher = sequelize.define("publishers", {
    publisher_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    publisher_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('Publisher table created successfully!');
 }).catch((error) => {
    console.error('Unable to create Publisher : ', error);
 });

 // --------------------------Category-----------------------------------------

 export const Category = sequelize.define("categories", {
    category_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('Category table created successfully!');
 }).catch((error) => {
    console.error('Unable to create Category : ', error);
 });

 // --------------------------Order-----------------------------------------

 export const Order = sequelize.define("orders", {
    order_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        references: {
            model: "user",
            key: "user_id",
        },
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

sequelize.sync().then(() => {
    console.log('Order table created successfully!');
 }).catch((error) => {
    console.error('Unable to create Order : ', error);
 });