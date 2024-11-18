import { helpers } from "../support/utilities";

describe("Visualizar lista de produtos disponíveis /products", () => {
  it("Deve buscar produto específico", async () => {
    await helpers.products.helpers.validateElementExists("h2", "All Products");
    await helpers.products.searchProduct();
  });
});
