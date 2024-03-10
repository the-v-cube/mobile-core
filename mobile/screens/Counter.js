import React from 'react';
import{Text,View, Button} from "react-native";
import { styles } from "../styles/Basic";

export default class Counter extends React.Component{
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
        console.log(`value:  ${this.state.value + 1}`)
    }
    decrementValue = () => {
        this.setState(
            {
                value: this.state.value - 1,
                total_taps: this.state.total_taps + 1
            }
        )
        console.log(`value:  ${this.state.value - 1}`)
    }
    render(){
        return(
        <View style ={styles.container}>
            <Text style={styles.text}>{this.state.value}</Text>
            <View style={{flexDirection:'row'}}>
               <Button onPress = {this.decrementValue} title = "Decrease"/>
                <Text>   </Text>
                <Button onPress = {this.incrementValue} title = "Increase"/>
            </View>
        </View>
        );
    }
}
