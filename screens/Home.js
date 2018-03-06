import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
    },
});

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render () {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                {/* <TextInput style={styles.input} /> */}
                <Button
                    title="Go to Next Screen"
                    onPress={() => this.props.navigation.navigate('Next')}
                />
            </View>
        );   
    }

}

export default Home;