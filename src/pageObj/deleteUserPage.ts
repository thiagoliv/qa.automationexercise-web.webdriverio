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
  delete: async function (tag: string, text: string): Promise<void> {
    (await $(`//${tag}[text()='${text}']`)).click();
    this.global.verify("b", "Account Deleted!");
    (await $(`//a[text()='Continue']`)).click();
  },
};
