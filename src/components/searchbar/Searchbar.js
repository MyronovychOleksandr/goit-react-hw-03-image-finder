import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm}>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className={s.searchFormButton}
          >
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
