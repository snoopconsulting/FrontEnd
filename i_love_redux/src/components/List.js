import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  componentDidMount() {
    this.props.setList([
      {id: 1, name: 'Pedro'}
    ]);
  }

  item = (item, i) => {
    return (
      <div key={i}>
        {`ID: ${item.id} - Nombre: ${item.name}`}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.items.map((item, i) => {
          return this.item(item, i);
        })}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;