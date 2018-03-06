import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';

class Checkbox extends Component {

  state = {
    checked: this.props.active
  }

  check() {
    let b = !this.state.checked;
    this.setState({ checked: b });
    this.props.onPress();
  }

  render() {
    return (
      <CheckBox
        right
        title={this.props.title}
        checked={this.state.checked}
        iconRight
        containerStyle={styles.containerStyle}
        textStyle={styles.textStyle}
        iconType='material-community'
        checkedIcon='checkbox-marked-circle'
        uncheckedIcon='checkbox-blank-circle-outline'
        checkedColor='rgb(30,53,71)'
        size={32}
        onPress={() => this.check()}
      />
    )
  }
}

// const Checkbox = ({ onPress, title, children, active}) => {
//   return (
//     <CheckBox
//       right
//       title={title}
//       checked={active}
//       iconRight
//       containerStyle={styles.containerStyle}
//       textStyle={styles.textStyle}
//       iconType='material-community'
//       checkedIcon='checkbox-marked-circle'
//       uncheckedIcon='checkbox-blank-circle-outline'
//       checkedColor='white'
//       size={32}
//       onPress={onPress}
//     />
//   );
// };

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 24,
    color: 'rgb(72,69,69)',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  }
};

export { Checkbox };
