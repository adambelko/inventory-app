const Item = require("../models/item");
const asyncHandler = require("express-async-handler");

// Display list of all items.
exports.item_index = asyncHandler(async (req, res, next) => {
    const allItems = await Item.find({}, "name price")
        .sort({ name: 1 })
        .populate("category")
        .exec();
    res.render("index", { title: "All Items", items_list: allItems });
});

// Display detail page for a specific item.
exports.item_detail = asyncHandler(async (req, res, next) => {
    const itemDetail = await Item.findById(req.params.id)
        .populate("category")
        .exec();

    res.render("item_detail", {
        title: "Item detail",
        item_detail: itemDetail,
    });
});

// Display item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item create GET");
});

// Handle item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item create POST");
});

// Display item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item delete GET");
});

// Handle item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item delete POST");
});

// Display item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item update GET");
});

// Handle item update on POST.
exports.item_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Item update POST");
});
