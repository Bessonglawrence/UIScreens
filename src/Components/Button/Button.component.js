import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ButtonComponent extends Component {

    render() {

        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity>
                {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14a9ba',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 2,
        shadowColor: '#cccccc99',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative',
        height: 47,
        width: '92%',
        marginVertical: 10
    }
}

export default ButtonComponent;