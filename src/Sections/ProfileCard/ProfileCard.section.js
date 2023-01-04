import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './ProfileCard.style';

class ProfileCard extends Component {
    render(){
        const {profile}=this.props;
        return (

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    switch(profile.id){
                        case 1:
                            Actions.plainprofile();
                            break;
                        case 2:
                            Actions.purpleprofile();
                            break;
                }}}>
                    <ImageBackground
                    source = {profile.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <View style={styles.ratingView}>
                                <Text style={styles.rating}>
                                    {profile.rating}
                                </Text>
                            </View>
                            <Text style={[styles.name, {color: profile.color}]}>
                                {profile.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default ProfileCard;