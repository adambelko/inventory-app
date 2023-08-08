#! /usr/bin/env node

console.log("This script populates Categories and Items in MongoDB");

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Item = require("./models/item");
const ItemInstance = require("./models/item_instance");

const categories = [];
const items = [];
const itemInstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createCategories();
    await createItems();
    await createItemInstances();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function categoryCreate(index, name, description) {
    const categoryDetail = { name: name, description: description };

    const category = new Category(categoryDetail);

    await category.save();
    categories[index] = category;
    console.log(`Added category: ${name}`);
}

async function ItemCreate(
    index,
    name,
    description,
    category,
    price,
    stockQuantity
) {
    const itemDetail = {
        name: name,
        description: description,
        category: category,
        price: price,
    };

    const item = new Item(itemDetail);
    await item.save();
    items[index] = item;
    console.log(`Added Item: ${item}`);
}

async function ItemInstanceCreate(index, item, status) {
    const itemInstanceDetail = {
        item: item,
    };

    const itemInstance = new ItemInstance(itemInstanceDetail);
    await itemInstance.save();
    itemInstances[index] = itemInstance;
    console.log(`Added Iteminstance: ${item}`);
}

async function createCategories() {
    console.log("Adding categories");
    await Promise.all([
        categoryCreate(0, "Dairy", "Dairy products made in Australia!"),
        categoryCreate(1, "Fruits", "Fruits to stay refreshed"),
        categoryCreate(2, "Vegetables", "Vegetable  to stay healthy"),
        categoryCreate(
            3,
            "Animal Products",
            "Some meat to for high quality nutrients"
        ),
        categoryCreate(4, "Sweets", "For someone with sweet tooth"),
    ]);
}

async function createItems() {
    console.log("Adding Items");
    await Promise.all([
        ItemCreate(0, "Milk", "From Australian cows only", categories[0], 2.99),
        ItemCreate(1, "Cheese", "For Cheese lovers", categories[0], 6.99),
        ItemCreate(2, "Mandarin", "I'm orange'ish color", categories[1], 0.8),
        ItemCreate(3, "Capsicum", "Eat me", categories[2], 3.99),
        ItemCreate(
            4,
            "Chicken Breast",
            "For those who love chicken meat",
            categories[3],
            8.99
        ),
        ItemCreate(
            5,
            "Beef Mince",
            "For those who seek high protein high calorie food",
            categories[3]
        ),
        ItemCreate(6, "Snickers", "Get some sugar bro", categories[4], 2),
    ]);
}

async function createItemInstances() {
    console.log("Adding item instances");
    await Promise.all([
        ItemInstanceCreate(0, items[0]),
        ItemInstanceCreate(1, items[1]),
        ItemInstanceCreate(2, items[1]),
        ItemInstanceCreate(3, items[2]),
        ItemInstanceCreate(4, items[3]),
        ItemInstanceCreate(5, items[4]),
        ItemInstanceCreate(6, items[4]),
    ]);
}
