const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
    status: {
        type: String,
        required: true,
        enum: ["In Stock", "Out of Stock"],
        default: "In Stock",
    },
});

ItemInstanceSchema.virtual("url").get(function () {
    return `/bookinstance/${this._id}`;
});

module.exports = mongoose.model("ItemInstance", ItemInstanceSchema);
