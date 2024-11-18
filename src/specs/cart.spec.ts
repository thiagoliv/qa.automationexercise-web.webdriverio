import { helpers } from "../support/utilities";

describe("Validação de detalhes do produto na página /products", () => {
  it("Deve abrir os detalhes de um produto e validar as informações exibidas", async () => {
    await helpers.products.helpers.validateElementExists("h2", "All Products");
    await helpers.products.searchProduct();
    await helpers.cart.viewProductDetails();
  });
});
