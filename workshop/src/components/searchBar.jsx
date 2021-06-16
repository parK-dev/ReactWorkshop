import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (e) => {
    const { changeGifIds } = this.props;
    changeGifIds(e.currentTarget.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        placeholder="Search a Gif..."
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
