//components/__test__/AgeGuess.test.js
import { describe, test, expect } from "vitest";

//import mount. 
import { mount } from "@vue/test-utils";

// Import the App component. 
import App from "../App.vue"; 

// Testing the app component.
describe("App", () => {

    // Testing the function that on click, shows or hides text.
    test("Mostra o nascondi testo", async () => {

        // I check the App component for general errors. 
        expect(App).toBeTruthy();

        // Mount the component and render it. 
        const wrapper = mount(App);

        console.log(wrapper.element('button'));
        
        // When the button is clicked, the message is shown.
        await wrapper.get('button').trigger('click');
        
        // I check that the text is shown. 
        expect(wrapper.find('h1').exists()).toBe(true);
        
        // When the button is clicked, the message is hidden.
        await wrapper.get('button').trigger('click');

        // I check that the text is not shown. 
        expect(wrapper.find('h1').exists()).toBe(false);
    });

});
