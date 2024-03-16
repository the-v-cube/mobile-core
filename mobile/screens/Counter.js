import { Component } from "react";
import { Text,View, Button, SafeAreaView } from "react-native";
import { styles } from "../styles/Basic";

export default class Counter extends Component {
    state = {
        value: 0,
        total_taps: 0
    }

    incrementValue = () => {
        this.setState(
            {
                value: this.state.value +1,
                total_taps: this.state.total_taps + 1
            }
        )
        console.log(`value: ${this.state.value + 1}`)
    }

    decrementValue = () => {
        this.setState(
            {
                value: this.state.value - 1,
                total_taps: this.state.total_taps + 1
            }
        )
        console.log(`value: ${this.state.value - 1}`)
    }

    render() {
        return(
            <SafeAreaView style = {styles.container}>
                <Text style={styles.text}>
                    {this.state.value}
                </Text>
                <View style={styles.container}>
                    <Button onPress={this.decrementValue} title = "Decrease"/>
                    <Button onPress={this.incrementValue} title = "Increase"/>
                </View>
            </SafeAreaView>
        );
    }
}
