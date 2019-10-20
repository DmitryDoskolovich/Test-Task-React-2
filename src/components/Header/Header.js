import React from "react";
import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import classNames from "classnames";

const Header = ({ className, onSubmit, onChange }) => {
  return (
    <header className={classNames("header", className)}>
      <div className="header__content">
        <h1 className="header__title">Messages</h1>
        <p className="header__unread-messages">168</p>
      </div>
      <SearchForm
        className="header__content"
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </header>
  );
};

export default Header;
