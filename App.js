import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }
  clickCheckBox(){
    if(this.state.checked){
      this.setState({ checked: false })
    }
    if(!this.state.checked){
      this.setState({ checked: true })
    }
  }
  renderCheckBox(){
    if(this.state.checked){
      return (
        <View>
          <CheckBox title='click me again' checked={this.state.checked} onPress={this.clickCheckBox.bind(this)} />
        </View>
      )
    }
  }
  renderOtherCheckBox(){
    if(!this.state.checked){
      return (
        <View>
          <CheckBox title='click me' checked={this.state.checked} onPress={this.clickCheckBox.bind(this)} />
        </View>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
        {this.renderOtherCheckBox()}
        </View>
        <View>
        {this.renderCheckBox()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
