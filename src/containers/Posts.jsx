import React, { Component } from 'react';
import { number, shape } from 'prop-types';
import { observer, PropTypes } from 'mobx-react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

@observer
class Posts extends Component {
  componentWillMount() {
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <BootstrapTable data={posts.toJS()} striped hover>
          <TableHeaderColumn dataField="id" isKey>ID</TableHeaderColumn>
          <TableHeaderColumn dataField="userId">User ID</TableHeaderColumn>
          <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
          <TableHeaderColumn dataField="body">Body</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.observableArrayOf(shape({
    id: number,
  })).isRequired,
};

export default Posts;
