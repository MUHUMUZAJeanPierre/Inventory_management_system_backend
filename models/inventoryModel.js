const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["Available", "Assigned", "Overdue", "Damaged"],
      default: "Available",
    },
    condition: {
      type: String,
      enum: ["New", "Good", "Damaged"],
      default: "New",
    },
    borrower: { type: String, default: null },
    dueDate: { type: Date, default: null },
    history: [
      {
        user: String,
        date: { type: Date, default: Date.now },
        condition: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", InventorySchema);
