//components/__test__/AgeGuess.test.js
import { test, expect } from "vitest";

//import mount
import { mount } from "@vue/test-utils";

import App from "../App.vue";

// Testo le funzioni del componente App.
describe("App", () => {

    // Testo la funziona che mostra e nasconde il testo.
    test("Mostra/nascondi testo", async () => {

        expect(App).toBeTruthy();

        const wrapper = mount(App, {

        });
        // expect(wrapper.text()).toContain("Guess User Age App");
    });

});
