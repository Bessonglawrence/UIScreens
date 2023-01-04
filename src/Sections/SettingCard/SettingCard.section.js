import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground, Image, ActionSheetIOS} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './SettingCard.style';

class SettingsCard extends Component {
    render(){
        const {setting}=this.props;
        return (

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    switch(setting.id){
                        case 1:
                            Actions.cardsetting();
                            break;
                        case 2:
                            Actions.whitesetting()
                            break;
                }}}>
                    <ImageBackground
                    source = {setting.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <Text style={[styles.name],{color: setting.color}}>
                                {setting.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default SettingsCard;