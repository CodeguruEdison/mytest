import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import { DisplayText } from './DisplayText';
import "@testing-library/jest-dom/extend-expect";
describe('Test Display Text',()=>{

    it('renders without crashing',()=>{
        const {baseElement} =render(<DisplayText/>);
        expect(baseElement).toBeInTheDocument();
    })
    it('receives input text',()=>{
        const testUser ="testUser";
        const {getByTestId} =render(<DisplayText/>);
        const input =getByTestId('user-input');
        fireEvent.change(input,{target:{value:testUser}});
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(testUser);
    })
    it('shows welcome message',()=>{
        const testUser ="testUser";
        const msg = `Welcome to React Testing ${testUser}`;
        const {getByTestId} = render(<DisplayText/>);
        const input = getByTestId('user-input');
        const label =getByTestId('final-msg');
        fireEvent.change(input,{target:{value:testUser}});
        const btn =getByTestId('input-submit');
        fireEvent.click(btn);
        expect(label).toBeInTheDocument();
        expect(label.innerHTML).toBe(msg);


    })
})