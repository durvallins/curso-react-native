//https://github.com/cod3rcursos/curso-react-native
import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, SafeAreaView } from 'react-native';
import Button from './components/Button';
import Display from './components/Display'

export default class App extends Component {
    state = {
        displayValue: '0'
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Display value={this.state.displayValue} />
                <SafeAreaView style={styles.Buttons}>
                    <Button label='AC' />
                    <Button label='/' />
                    <Button label='7' />
                    <Button label='8' />
                    <Button label='9' />
                    <Button label='*' />
                    <Button label='4' />
                    <Button label='5' />
                    <Button label='6' />
                    <Button label='-' />
                    <Button label='1' />
                    <Button label='2' />
                    <Button label='3' />
                    <Button label='+' />
                    <Button label='0' />
                    <Button label='.' />
                    <Button label='=' />
                </SafeAreaView >
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }
});

