import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements';

import { FullContainer, ImageFullScreenView, OrderTotal, Checkbox } from '../common';
import { toggleTask } from '../../actions';

class TaskChecklist extends Component {

  _onPress(item){
    this.props.toggleTask(this.props.detailRoom, item);
  }

  _renderItem = ({item}) => (
    <Checkbox onPress={() => this._onPress(item)} active={item.active} title={item.taskDisplayName} />
  );

  render() {
    return (
      <FullContainer>
        <ImageFullScreenView source={this.props.detailRoom.roomImage} />

        <View style={styles.listContainerStyle}>
          <FlatList
            data={this.props.detailRoom.roomTasks}
            renderItem={this._renderItem}
            keyExtractor={item => item.taskName}
          />
        </View>

        <OrderTotal price={this.props.price} />

      </FullContainer>
    );
  }
}

const styles = {
  listContainerStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingBottom: 75,
    paddingTop: 25
  }
}

const mapStateToProps = ({ appointment, auth }) => {
  const { detailRoom, price } = appointment;
  return { detailRoom, price };
}

export default connect(mapStateToProps, { toggleTask })(TaskChecklist);
