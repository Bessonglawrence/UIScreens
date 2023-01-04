import React, { Component } from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
class Input extends Component {
    
    constructor(props) {
      super(props);
    
      this.state = {
        isFocused: false,
        showpasswordicon: true,
      };
    }

    // onFocus used to change bordercolor and icon color when user clicks on a field
    onFocusChange = () => {
        this.setState({ isFocused: true });
    }

    // function to show password icon when unlocked or locked 
    renderIcon() {
        const passwordunlocked = <Icon name={this.props.passwordiconunlocked} size={30} color='#14a9ba'/*'#a6a6a6'*//>
        const passwordlocked = <Icon name={this.props.passwordiconlocked} size={30} color='#14a9ba'/*'#a6a6a6'*//>

        if(this.state.showpasswordicon == true ){
            return <Text>{passwordunlocked}</Text>
        } else {
            return <Text>{passwordlocked}</Text>
        }
    }

    // function to decide weather or not to show password icon
    showpassword = () => {
        if (this.props.secureTextEntry == true && this.state.showpasswordicon == true) {
            return true;
        } else {
            return false
        }
    }

    render() {

        const { inputStyle, lableStyle, containerStyle, mainwrapperstyle, iconstyle, inputwrapperstyle } = styles;
        const { lable, value, onChangeText, placeholder, secureTextEntry, icon } = this.props;

        // icon for the field inputs
        const myicon = <Icon   name={icon} size={20} color={this.state.isFocused ?  'black' :  '#14a9ba' } />

        return (
            <View
                onFocus={this.onFocusChange}
                style={[mainwrapperstyle, this.state.isFocused ? { borderColor: 'black' } : { borderColor: '#ccc' }]}
            >
                <View style={containerStyle}>
                        <View style={{flexDirection: 'row', paddingVertical: 15}}>
                            <View style={{ flex: 0.6, justifyContent: 'center', paddingHorizontal: 6, alignItems: 'center' }}>
                                <Text style={iconstyle}>{myicon}</Text>
                            </View>

                            {lable &&
                            <View style={{ flex: 2.9, justifyContent: 'center' }}>
                                <Text style={lableStyle}>{lable}</Text>
                            </View>
                            }
                        </View>

                        <View style={{ flex: 6.1, justifyContent: 'center'}}>
                            <TextInput
                                onFocus={this.onFocusChange}
                                secureTextEntry={this.showpassword()}
                                placeholder={placeholder}
                                autoCorrect={false} // to stop auto correction on email field
                                style={[inputStyle, this.state.isFocused ? { fontStyle: 'normal', color: 'black' } : { fontStyle: 'italic', color: 'white' }]}
                                value={value}
                                autoCapitalize={this.props.autoCapitalize ?? 'sentences'}
                                keyboardType={this.props.keyboardType ?? 'default'}
                                onChangeText={onChangeText}
                            />
                        </View>

                   <TouchableOpacity onPress={() => this.setState({ showpasswordicon: !this.state.showpasswordicon })} style={[iconstyle],{backgroundColor:'white', alignSelf: 'flex-end', marginRight: 10}}>
                        {this.renderIcon()}
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}
const styles = {
    mainwrapperstyle: {
        borderWidth: 1,
        borderRadius: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 2,
        marginVertical: 10,
        marginHorizontal: 10
    },
    inputStyle: {
        height: 43,
        width: '100%',
        fontSize: 18,
        marginTop: 5,
        paddingHorizontal: 20
    },
    lableStyle: {
        fontSize: 18,
        paddingLeft: 7,
        color: '#14a9ba',
    },
    containerStyle: {
        alignItems: 'center',
    },
    iconstyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Input;