const express = require("express");
const inventoryController = require("../controllers/inventory.controller");

const inventoryRouter = express.Router();

inventoryRouter.post("/create", inventoryController.createInventory);
inventoryRouter.get('/all', inventoryController.getAllInventories);
inventoryRouter.get('/:inventoryId', inventoryController.getSingleInventory);
inventoryRouter.patch("/edit/:inventoryId", inventoryController.editInventory);
inventoryRouter.delete("/delete/:inventoryId/:itemId", inventoryController.deleteInventoryItem);
inventoryRouter.delete("/delete/:inventoryId", inventoryController.deleteInventory);
inventoryRouter.delete("/delete-all", inventoryController.deleteAllInventories);
inventoryRouter.all("/*", inventoryController.notFound);

module.exports = inventoryRouter;