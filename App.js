import React, {Component} from 'react';
import dice1 from './assect/dice1.png';
import dice2 from './assect/dice2.png';
import dice3 from './assect/dice3.png';
import dice4 from './assect/dice4.png';
import dice5 from './assect/dice5.png';
import dice6 from './assect/dice6.png';
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
export class App extends Component {
  state = {
    activeDice: dice1,
  };
  randomDice = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    switch (number) {
      case 1:
        this.setState({activeDice: dice1});
        break;

      case 2:
        this.setState({activeDice: dice2});
        break;

      case 3:
        this.setState({activeDice: dice3});
        break;

      case 4:
        this.setState({activeDice: dice4});
        break;

      case 5:
        this.setState({activeDice: dice5});
        break;

      case 6:
        this.setState({activeDice: dice6});
        break;

      default:
        this.setState({activeDice: dice1});

        break;
    }
  };
  // playGame = () => {
  //   Alert.alert('asda' + this.randomDice());
  // };
  render() {
    return (
      <View style={Style.mainView}>
        <Image source={this.state.activeDice} />
        <TouchableOpacity
          onPress={() => {
            this.randomDice();
          }}>
          <Text style={Style.button}>press Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E74292',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    marginTop: 35,
    fontWeight: 'bold',
    borderWidth: 2,
  },
});

export default App;
