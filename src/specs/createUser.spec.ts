import { helpers } from "../support/utilities";

describe("Fluxo de cadastro e exclusão de usuário /login", () => {
  it("Deve realizar cadastro de um novo usuário", async () => {
    await helpers.registerUser.global.verify("h2", "New User Signup!");
    await helpers.registerUser.createUser();
    await helpers.registerUser.form();
  });

  it("Deve excluir usuário cadastrado", async () => {
    await helpers.deleteUser.delete("a", "Delete Account");
  });
});
