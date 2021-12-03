import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});


test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

        const firstNameField = screen.getByLabelText(/first name:/i)
        const lastNameField = screen.getByLabelText(/last name:/i)
        const addressField = screen.getByLabelText(/address:/i)
        const cityField = screen.getByLabelText(/city:/i)
        const stateField = screen.getByLabelText(/state:/i)
        const zipField = screen.getByLabelText(/zip:/i)
        const checkout = screen.getByRole('button')

        userEvent.type(firstNameField, 'Joshua')
        userEvent.type(lastNameField, 'Patton')
        userEvent.type(addressField, '123 Test Lane')
        userEvent.type(cityField, 'Testville')
        userEvent.type(stateField, 'New Jersey')
        userEvent.type(zipField, '11111')
        userEvent.click(checkout)
        
        const confirmation = screen.getByTestId('successMessage')
        expect(confirmation).toBeInTheDocument()


        

});
