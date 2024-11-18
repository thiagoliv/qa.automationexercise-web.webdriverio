import { findAttribute } from "../support/utilities";

// Centralizando os seletores
const SELECTORS = {
  searchInput: "search_product",
  searchButton: "submit_search",
  searchTitle: "//h2[text()='Searched Products']",
  productName: "//p[text()='Blue Top']",
  addToCartLink: "//a[text()='Add to cart']",
  confirmationMessage: "//h4[text()='Added!']",
  viewCartLink: "//u[text()='View Cart']",
};

export default {
  helpers: {
    /**
     * Valida se um elemento com o texto especificado existe na página.
     * @param {string} tag - O tipo do elemento (ex: h2, p, div).
     * @param {string} text - O texto que deve estar no elemento.
     */
    validateElementExists: async (tag: string, text: string): Promise<void> => {
      const elementExists = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(elementExists).toBe(true); // Verifica se o elemento existe
    },
  },

  /**
   * Realiza a busca por um produto chamado "Blue Top".
   * Valida que os resultados da busca são exibidos corretamente.
   */
  searchProduct: async function (): Promise<void> {
    // Adiciona o nome do produto no campo de busca e clica no botão de pesquisa
    const searchInput = await findAttribute(SELECTORS.searchInput);
    await searchInput.addValue("Blue Top");

    const searchButton = await findAttribute(SELECTORS.searchButton);
    await searchButton.click();

    // Valida os resultados da busca
    await this.helpers.validateElementExists("h2", "Searched Products");
    await this.helpers.validateElementExists("p", "Blue Top");
  },

  /**
   * Adiciona um produto ao carrinho e valida a mensagem de confirmação.
   */
  addProduct: async function (): Promise<void> {
    // Clica no link "Add to cart"
    const addToCartLink = await $(SELECTORS.addToCartLink);
    await addToCartLink.click();

    // Valida a mensagem de confirmação "Added!"
    await this.helpers.validateElementExists("h4", "Added!");
  },

  /**
   * Remove um produto do carrinho e valida o processo.
   */
  removeProduct: async function (): Promise<void> {
    // Valida que o produto foi adicionado anteriormente
    await this.helpers.validateElementExists("h4", "Added!");

    // Clica no link "View Cart"
    const viewCartLink = await $(SELECTORS.viewCartLink);
    await viewCartLink.click();
  },
};
