import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";
import MyLibraryCurrentlyReading from "../pages/MyLibraryCurrentlyReading";
import HomePage from "../pages/HomePage";
import App from "../App";
import Books from "../components/atoms/books/Books";
import {
  Search,
  DownArrow,
  HamBurger,
} from "../components/atoms/icons/IconButton.stories";

test("App rendering", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("Home Page rendering", () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("MyLibrary Page rendering", () => {
  render(
    <Provider store={store}>
      <MyLibraryCurrentlyReading />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});


test("Books loading", () => {
  render(
    <Provider store={store}>
      <Books />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("Icons loading", () => {
  render(
    <Provider store={store}>
      <Search />
      <DownArrow open={true} menuType="explore-menu" handleClick={(e)=>console.log(e.target)}/>
      <DownArrow open={undefined} menuType="explore-menu" handleClick={(e)=>console.log(e.target)}/>
      <DownArrow open={true} menuType="avatar-menu" handleClick={(e)=>console.log(e.target)}/>
      <DownArrow open={undefined} menuType="avatar-menu" handleClick={(e)=>console.log(e.target)}/>

      <HamBurger />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

/*
test("counter starting value", () => {
  render(<Sum />);
  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");
});

test("increment button", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");

  expect(buttonEl.textContent).toBe("Increment");
});

test("decrement button", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");

  expect(buttonEl.textContent).toBe("Decrement");
});

test("counter step input handler", () => {
  render(<Sum />);
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(inputEl.value).toBe("3");
});

test("counter increment button handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");

  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("1");
});

test("counter decrement button handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");

  const countEl = screen.getByTestId("counter");

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("-1");
});

test("counter increment button with input handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("incrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("3");
});

test("counter decrement button with input handler", () => {
  render(<Sum />);
  const buttonEl = screen.getByTestId("decrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "3",
    },
  });

  expect(countEl.textContent).toBe("0");

  fireEvent.click(buttonEl);

  expect(countEl.textContent).toBe("-3");
});

test("counter colour change", () => {
  render(<Sum />);
  const incrButtonEl = screen.getByTestId("incrBtn");
  const decrButtonEl = screen.getByTestId("decrBtn");
  const countEl = screen.getByTestId("counter");
  const inputEl = screen.getByTestId("stepInput");

  fireEvent.change(inputEl, {
    target: {
      value: "25",
    },
  });

  expect(countEl.className).toBe("");

  fireEvent.click(incrButtonEl); //count=25

  expect(countEl.className).toBe("");

  fireEvent.click(incrButtonEl); //count=50

  expect(countEl.className).toBe("green");

  fireEvent.click(decrButtonEl); //count=25

  expect(countEl.className).toBe("");

  fireEvent.click(decrButtonEl); //count=0

  expect(countEl.className).toBe("");

  fireEvent.click(decrButtonEl); //count=-25
  fireEvent.click(decrButtonEl); //count=-50

  expect(countEl.className).toBe("red");
});
*/
