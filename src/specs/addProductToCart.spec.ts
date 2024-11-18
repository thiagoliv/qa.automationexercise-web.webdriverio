import { helpers } from "../support/utilities";

describe("Adicionar produtos ao carrinho de compras /products", () => {
  it("Deve adicionar produto ao carrinho", async () => {
    await helpers.products.helpers.validateElementExists("h2", "All Products");
    await helpers.products.searchProduct();
    await helpers.products.addProduct();
  });
});
