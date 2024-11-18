/**
 * Centraliza as exportações dos objetos de pageObj.
 * Certifique-se de que `global` esteja corretamente configurado em cada um deles.
 */
import registerUser from "../pageObj/registerUserPage";
import deleteUser from "../pageObj/deleteUserPage";
import products from "../pageObj/productsPage";
import cart from "../pageObj/cartPage";

export const helpers = {
  registerUser,
  deleteUser,
  products,
  cart,
};

/**
 * Função utilitária para localizar elementos com base no atributo `data-qa`.
 */
export async function findElement(selector: string) {
  const tags = ["input", "button", "textarea", "select", "div", "span", "a", "ul", "li"];
  for (const tag of tags) {
    const locator = `//${tag}[@data-qa='${selector}']`;
    const element = await $(locator);

    if (await element.isExisting() && await element.isDisplayed()) {
      return element;
    }
  }
  throw new Error(`Elemento com "data-qa='${selector}'" não encontrado.`);
}

/**
 * Função utilitária para localizar elementos com base em `id`, `name` ou `class`.
 */
export async function findAttribute(selector: string) {
  const attributes = ["id", "name", "class"];
  for (const attribute of attributes) {
    const locator = `//*[@${attribute}="${selector}"]`;
    const element = await $(locator);

    if (await element.isExisting() && await element.isDisplayed()) {
      return element;
    }
  }
  throw new Error(`Elemento com "${selector}" não encontrado.`);
}
