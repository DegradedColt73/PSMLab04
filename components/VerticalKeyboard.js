import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles/KeyboardStyle';

export default class VerticalKeyboard extends React.Component{
    render(){
        return(
            <View style={styles.keyboardArea}>
                <View style={styles.keyboardRow}>
                    <TouchableOpacity style={[styles.keyboardButton, {backgroundColor: "#626365"}]}><Text style={styles.textSetup}>AC</Text></TouchableOpacity>
                    <View style={styles.freeSpace}></View>
                    <TouchableOpacity style={[styles.keyboardButton, styles.hardRightColumnButton]}><Text style={styles.textSetup}>÷</Text></TouchableOpacity>
                </View>
                <View style={styles.keyboardRow}>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.keyboardButton, styles.hardRightColumnButton]}><Text style={styles.textSetup}>X</Text></TouchableOpacity>
                </View>
                <View style={styles.keyboardRow}>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.keyboardButton, styles.hardRightColumnButton]}><Text style={styles.textSetup}>-</Text></TouchableOpacity>
                </View>
                <View style={styles.keyboardRow}>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.keyboardButton, styles.hardRightColumnButton]}><Text style={styles.textSetup}>+</Text></TouchableOpacity>
                </View>
                <View style={styles.keyboardRow}>
                    <TouchableOpacity style={[styles.keyboardButton, styles.keyboardZeroButton]}><Text style={styles.textSetup}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton}><Text style={styles.textSetup}>,</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.keyboardButton, styles.hardRightColumnButton]}><Text style={styles.textSetup}>=</Text></TouchableOpacity>
                </View>
            </View>
        );
    };
};