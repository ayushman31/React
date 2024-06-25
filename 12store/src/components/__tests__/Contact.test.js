import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load the heading", ()=> {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside the Contact Component", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

});

test("Should load the Submit text", ()=> {

    render (<Contact/>);

    const submit = screen.getByText("Submit");

    expect(submit).toBeInTheDocument();
});

test("Should load input name inside Contact component", () => {

    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes in the Contact Component", () => {

    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    //console.log((inputBoxes));;
    console.log((inputBoxes.length));;

    expect(inputBoxes.length).toBe(2); 
})