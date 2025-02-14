const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getItems);
router.get("/:id", inventoryController.getItemById);
router.post("/", inventoryController.createItem);
router.put("/:id", inventoryController.updateItem);
router.delete("/:id", inventoryController.deleteItem);
router.get("/status/overdue", inventoryController.getOverdueItems);
router.get("/status/damaged", inventoryController.getDamagedItems);

module.exports = router;
