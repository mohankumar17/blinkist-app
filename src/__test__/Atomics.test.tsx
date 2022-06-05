import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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
import TabSmall from "../components/molecules/tabs/TabSmall";
import MenuBar from "../components/organisms/menus/MenuBar";
import Logo from "../components/organisms/headers/BlinklistLogo.png";
import Header from "../components/organisms/headers/Header";
import Article from "../components/molecules/cards/articles/Article";
import Menus from "../components/molecules/menu/Menus";
import SearchBox from "../components/molecules/searchbar/SearchBox";

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
      <DownArrow
        open={true}
        menuType="explore-menu"
        handleClick={(e) => console.log(e.target)}
      />
      <DownArrow
        open={undefined}
        menuType="explore-menu"
        handleClick={(e) => console.log(e.target)}
      />
      <DownArrow
        open={true}
        menuType="avatar-menu"
        handleClick={(e) => console.log(e.target)}
      />
      <DownArrow
        open={undefined}
        menuType="avatar-menu"
        handleClick={(e) => console.log(e.target)}
      />

      <HamBurger />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("Small Tab rendering", () => {
  render(
    <Provider store={store}>
      <TabSmall
        value="snp"
        handleChange={(event: React.SyntheticEvent, newValue: string) =>
          console.log(event)
        }
      />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("MenuBar loading", () => {
  render(
    <Provider store={store}>
      <MenuBar />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("Header loading with logo click", () => {
  render(
    <Provider store={store}>
      <Header LogoPath={Logo} />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const brandLogo = screen.getByTestId("brandLogo-click");

  fireEvent.click(brandLogo);
});

test("Header loading with mylibrary click", () => {
  render(
    <Provider store={store}>
      <Header LogoPath={Logo} />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const myLibrary = screen.getByTestId("myLibrary-click");

  fireEvent.click(myLibrary);
});

test("Not added to library book rendering on Home", () => {
  render(
    <Provider store={store}>
      <Article
        id={1}
        src="https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"
        title="Lives of the Stoics"
        authors="Ryan Holiday, Stephen Hansel"
        time_to_read="15-minute read"
        tot_reads="2.1k reads"
        btnStatus={0}
        isHome={true}
        handleClick={() => {}}
        handleDblClick={() => {}}
      />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const bookCardImgClick = screen.getByTestId("bookCardImg");
  fireEvent.click(bookCardImgClick);

  const bookCardBtnClick = screen.getByTestId("bookCardBtnHome");
  fireEvent.click(bookCardBtnClick);

  expect(bookCardBtnClick.textContent).toBe("Add to library");
});

test("Added to library book rendering on Home", () => {
  render(
    <Provider store={store}>
      <Article
        id={1}
        src="https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"
        title="Lives of the Stoics"
        authors="Ryan Holiday, Stephen Hansel"
        time_to_read="15-minute read"
        tot_reads="2.1k reads"
        btnStatus={1}
        isHome={true}
        handleClick={() => {}}
        handleDblClick={() => {}}
      />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const bookCardImgClick = screen.getByTestId("bookCardImg");
  fireEvent.click(bookCardImgClick);
});

test("Currently reading book rendering on MyLibrary", () => {
  render(
    <Provider store={store}>
      <Article
        id={1}
        src="https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"
        title="Lives of the Stoics"
        authors="Ryan Holiday, Stephen Hansel"
        time_to_read="15-minute read"
        tot_reads="2.1k reads"
        btnStatus={1}
        isHome={false}
        handleClick={() => {}}
        handleDblClick={() => {}}
      />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const bookCardImgClick = screen.getByTestId("bookCardImg");
  fireEvent.click(bookCardImgClick);

  const bookCardBtnClick = screen.getByTestId("bookCardBtnLib");
  fireEvent.click(bookCardBtnClick);

  expect(bookCardBtnClick.textContent).toBe("Finished");
});

test("Finished book rendering on MyLibrary", () => {
  render(
    <Provider store={store}>
      <Article
        id={1}
        src="https://images.blinkist.com/images/books/5f90514d6cee07000608d799/1_1/250.jpg"
        title="Lives of the Stoics"
        authors="Ryan Holiday, Stephen Hansel"
        time_to_read="15-minute read"
        tot_reads="2.1k reads"
        btnStatus={2}
        isHome={false}
        handleClick={() => {}}
        handleDblClick={() => {}}
      />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const bookCardImgClick = screen.getByTestId("bookCardImg");
  fireEvent.click(bookCardImgClick);

  const bookCardBtnClick = screen.getByTestId("bookCardBtnLib");
  fireEvent.click(bookCardBtnClick);

  expect(bookCardBtnClick.textContent).toBe("Read again");
});

test("Menus with type explore", () => {
  render(
    <Provider store={store}>
      <Menus type="explore" />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});

test("Menus with type avatar", () => {
  render(
    <Provider store={store}>
      <Menus type="avatar" />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  const avatarArrowBtn = screen.getByTestId("avatar-menu");
  fireEvent.click(avatarArrowBtn);
});

test("Search Box", () => {
  render(
    <Provider store={store}>
      <SearchBox value="" handleKeyDown={() => {}} />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  const searchBoxText: HTMLInputElement = screen.getByTestId("searchbox");

  fireEvent.change(searchBoxText, {
    target: {
      value: "Boss",
    },
  });

  expect(searchBoxText.value).toBe("Boss");

  fireEvent.keyDown(searchBoxText);
});
