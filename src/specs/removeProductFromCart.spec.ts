import { helpers } from "../support/utilities";

describe("Remover produtos do carrinho de compras /products", () => {
  it("Deve adicionar e remover produto", async () => {
    await helpers.products.helpers.validateElementExists("h2", "All Products");
    await helpers.products.searchProduct();
    await helpers.products.addProduct();
    await helpers.products.removeProduct();
  });
});
