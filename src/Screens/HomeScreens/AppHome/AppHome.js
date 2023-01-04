import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Animated, FlatList } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

import data from '../../../../res/data';
import {HomeCard} from '../../../Sections/HomeCard/HomeCard.section';
import styles from './AppHomeStyle';


const AppHome = () => {

    const [homes, setHomes] = useState([]);

    useEffect(()=>{
        const homes = data;
        setHomes({homes: homes})
    })

//    const  scrollEnded = (obj) => {
//         scrolledDistance = obj.nativeEvent.contentOffset.y;
//     }

    return(
        // <FlatList
        //     contentContainerStyle={styles.mainContainer}
        //     //onScrollEndDrag={scrollEnded}
        //     data={homes}
        //     renderItem={({ item, index }) => { 
        //         {
        //             return (
        //                 <View key={index}>
        //                     <HomeCard home={item} key={item.id} /> 
        //                 </View>
        //             )
        //         }
        //     }}
        //     keyExtractor={item => (item.id).toString()}
        // />
        <View>
            {
                homes.map((key, index) =>{
                    <View key={index}></View>
                })
            }
        </View>
    )
}

export default AppHome;