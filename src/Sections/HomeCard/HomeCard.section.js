import React, { Component } from 'react';
import {View, Text,TouchableOpacity, ImageBackground, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './HomeCard.style';

class HomeCard extends Component {
    render(){
        const {home}=this.props;
        return (

            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                    switch(home.id){
                        case 1:
                            Actions.rentflicker();
                            break;
                        case 2:
                            Actions.socialapp();
                }}}>
                    <ImageBackground
                    source = {home.image}
                    style = {styles.image}
                    imageStyle={{ borderRadius: 10}}
                    >
                        <View style={styles.mainTextView}>
                            <View style={[{backgroundColor: home.color},styles.ratingView]}>
                                <Text style={styles.rating}>
                                    {home.rating}
                                </Text>
                            </View>
                            <Text style={styles.name}>
                                {home.name}
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default HomeCard;