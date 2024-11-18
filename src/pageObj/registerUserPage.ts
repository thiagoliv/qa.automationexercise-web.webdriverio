import { faker } from "@faker-js/faker";
import { findElement } from "../support/utilities";

export default {
  global: {
    /**
 * Verifica se um elemento com um texto específico existe na página.
 * @param tag - Tipo do elemento (ex: `b`, `a`).
 * @param text - Texto a ser validado.
 */
    verify: async (tag: string, text: string): Promise<void> => {
      const isTextExisting = await $(`//${tag}[text()='${text}']`).isExisting();
      expect(isTextExisting).toBe(true);
    },
  },
  createUser: async function () {
    const nameField = await findElement("signup-name");
    const emailField = await findElement("signup-email");
    const signupButton = await findElement("signup-button");

    await nameField.addValue(faker.person.firstName());
    await emailField.addValue(faker.internet.email());
    await signupButton.click();
  },
  form: async function () {
    await this.global.verify("b", "Enter Account Information");

    // Preencher o formulário com informações fictícias
    const passwordField = await findElement("password");
    await passwordField.addValue(faker.internet.password());

    const dayDropdown = await findElement("days");
    const monthDropdown = await findElement("months");
    const yearDropdown = await findElement("years");
    await dayDropdown.selectByVisibleText("10");
    await monthDropdown.selectByVisibleText("July");
    await yearDropdown.selectByVisibleText("1988");

    // Clicar nos checkboxes
    const newsletterCheckbox = await $(`[name="newsletter"]`);
    const optinCheckbox = await $(`[name="optin"]`);
    await newsletterCheckbox.click();
    await optinCheckbox.click();

    // Preencher os campos de endereço
    const firstNameField = await findElement("first_name");
    const lastNameField = await findElement("last_name");
    const companyField = await findElement("company");
    const addressField = await findElement("address");
    const address2Field = await findElement("address2");
    await firstNameField.addValue(faker.person.firstName());
    await lastNameField.addValue(faker.person.lastName());
    await companyField.addValue(faker.company.name());
    await addressField.addValue(faker.location.streetAddress());
    await address2Field.addValue(faker.location.streetAddress());

    // Selecionar país e preencher demais informações
    const countryDropdown = await findElement("country");
    const stateField = await findElement("state");
    const cityField = await findElement("city");
    const zipcodeField = await findElement("zipcode");
    const mobileNumberField = await findElement("mobile_number");

    await countryDropdown.selectByVisibleText("United States");
    await stateField.addValue(faker.location.state());
    await cityField.addValue(faker.location.city());
    await zipcodeField.addValue(faker.location.zipCode());
    await mobileNumberField.addValue(faker.phone.number());

    // Submeter o formulário
    const createAccountButton = await findElement("create-account");
    await createAccountButton.click();

    // Verificar se a conta foi criada
    await this.global.verify("b", "Account Created!");

    const continueButton = await $(`[data-qa="continue-button"]`);
    await continueButton.click();
  },
};
