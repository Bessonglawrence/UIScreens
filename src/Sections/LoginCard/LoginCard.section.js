import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground, Image, ActionSheetIOS} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './LoginCard.style';

class LoginCard extends Component {
    render(){
        const {login}=this.props;
        return (

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    switch(login.id){
                        case 1:
                            Actions.minilogin();
                            break;
                        case 2:
                            Actions.roundLogin();
                            break;
                        case 3:
                            Actions.smartlogin();
                            break;
                        case 4:
                            Actions.blacklogin();
                            break;
                        case 5:
                            Actions.tablogin();
                            break;
                        case 6:
                            Actions.designedlogin();
                            break;
                }}}>
                    <ImageBackground
                    source = {login.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <View style={[{backgroundColor: login.color},styles.ratingView]}>
                                <Text style={styles.rating}>
                                    {login.id}
                                </Text>
                            </View>
                            <Text style={styles.name}>
                                {login.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default LoginCard;