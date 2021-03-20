import React from "react";
import ReactPagination from "react-js-pagination";

class Pagination extends React.Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(activePage) {
    const offset = this.props.itemsCountPerPage * (activePage - 1);
    this.props.setPage({
      activePage,
      offset
    });
  }

  render() {
    return (
      <ReactPagination
        activePage={this.props.activePage}
        itemsCountPerPage={this.props.itemsCountPerPage}
        totalItemsCount={this.props.totalItemsCount}
        pageRangeDisplayed={this.props.pageRangeDisplayed}
        onChange={this.handlePageChange}
      />
    );
  }
}

export default Pagination;
