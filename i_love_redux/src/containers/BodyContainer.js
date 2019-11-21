import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import { setList } from '../actions/ListAction';

function mapStateToProps(state) {
  return {
    items: state.list.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setList: (items) => dispatch(setList(items))
  };
}

class BodyContainer extends Component {
  render() {
    return (
      <div>
        Body
        <List items={this.props.items}
          setList={this.props.setList} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer);