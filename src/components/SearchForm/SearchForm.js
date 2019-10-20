import React from "react";
import classNames from "classnames";
import "./SearchForm.css";
import Input from "../Input/Input";
import buttonImgSrc from "../../resources/images/i-20-search.png";
import Button from "../Button/Button";

const SearchForm = ({ className, onSubmit, onChange }) => {
  return (
    <form className={classNames("search-form", className)} onSubmit={onSubmit}>
      <Input
        className="search-form__input"
        placeholder="Search"
        onChange={onChange}
      />
      <Button className="search-form__button">
        <img className="button__image" src={buttonImgSrc} alt="search-icon" />
      </Button>
    </form>
  );
};

export default SearchForm;
