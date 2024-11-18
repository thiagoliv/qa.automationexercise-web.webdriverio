// Centralizando os seletores em um objeto para reutilização e organização
const SELECTORS = {
  viewProductLink: "//a[text()='View Product']",
  productTitle: "//h2[text()='Blue Top']",
  quantityInput: '//*[@id="quantity"]',
  addToCartButton: "//button[contains(., 'Add to cart')]",
  viewCartLink: "//u[text()='View Cart']",
  cartTitle: "//u[text()='Shopping Cart']",
  productQuantityButton: '//*[@id="product-1"]/td[4]/button',
};

export default {
  helpers: {
    /**
     * Verifica se um elemento com o texto especificado existe na página.
     * @param {string} tag - O tipo do elemento (ex: h2, div).
     * @param {string} text - O texto a ser validado.
     */
    validateElementExists: async (tag: string, text: string): Promise<void> => {
      const elementExists = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(elementExists).toBe(true); // Valida se o elemento existe
    },
  },

  /**
   * Executa os passos para visualizar os detalhes de um produto,
   * definir a quantidade, adicionar ao carrinho e validar o carrinho.
   */
  viewProductDetails: async function (): Promise<void> {
    // Clique no link "View Product"
    const viewProduct = await $(SELECTORS.viewProductLink);
    await viewProduct.click();

    // Valida o título do produto (Blue Top)
    this.helpers.validateElementExists("h2", "Blue Top");

    // Define a quantidade do produto
    const quantityField = await $(SELECTORS.quantityInput);
    await quantityField.setValue("4");

    // Clique no botão "Add to Cart"
    const addToCartButton = await $(SELECTORS.addToCartButton);
    await addToCartButton.click();

    // Clique no link "View Cart"
    const viewCartLink = await $(SELECTORS.viewCartLink);
    await viewCartLink.click();

    // Valida o título da página do carrinho (Shopping Cart)
    this.helpers.validateElementExists("u", "Shopping Cart");

    // Valida a quantidade no carrinho
    const quantityElement = await $(SELECTORS.productQuantityButton);
    const quantityText = await quantityElement.getText();
    expect(quantityText).toBe("4"); // Verifica se a quantidade está correta
  },
};
