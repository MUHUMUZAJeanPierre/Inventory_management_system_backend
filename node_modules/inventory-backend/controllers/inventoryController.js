const Inventory = require("../models/inventoryModel");

// ✅ GET All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.status(200).json({
      success: true,
      message: "All items retrieved successfully",
      data: items,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ GET Single Item
exports.getItemById = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({
      success: true,
      message: "Item retrieved successfully",
      data: item,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ CREATE New Item
exports.createItem = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();

    res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: newItem,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// ✅ UPDATE Item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ DELETE Item
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedItem)
      return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ GET Overdue Items
exports.getOverdueItems = async (req, res) => {
  try {
    const overdueItems = await Inventory.find({ status: "Overdue" });

    res.status(200).json({
      success: true,
      message: "Overdue items retrieved successfully",
      data: overdueItems,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ✅ GET Damaged Items
exports.getDamagedItems = async (req, res) => {
  try {
    const damagedItems = await Inventory.find({ condition: "Damaged" });

    res.status(200).json({
      success: true,
      message: "Damaged items retrieved successfully",
      data: damagedItems,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
