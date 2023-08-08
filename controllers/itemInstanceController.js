import ItemInstance from "../models/item_instance";
import asyncHandler from "express-async-handler";

// Display list of all ItemInstances.
exports.itemInstance_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance list");
});

// Display detail page for a specific itemInstance.
exports.itemInstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: ItemInstance detail: ${req.params.id}`);
});

// Display itemInstance create form on GET.
exports.itemInstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance create GET");
});

// Handle itemInstance create on POST.
exports.itemInstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance create POST");
});

// Display itemInstance delete form on GET.
exports.itemInstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance delete GET");
});

// Handle itemInstance delete on POST.
exports.itemInstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance delete POST");
});

// Display itemInstance update form on GET.
exports.itemInstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance update GET");
});

// Handle itemInstance update on POST.
exports.itemInstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: ItemInstance update POST");
});
