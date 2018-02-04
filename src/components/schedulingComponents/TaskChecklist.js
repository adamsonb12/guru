import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { toggleTask } from '../../actions';

class TaskChecklist extends Component {
  render() {
    return (
      <View>Checklist</View>
    );
  }
}

const mapStateToProps = ({ rooms }) => {
  return {};
}

export default connect(mapStateToProps, {toggleTask})(TaskChecklist);
