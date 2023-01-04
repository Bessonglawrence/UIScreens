import React from 'react';
import Icon  from 'react-native-vector-icons/Feather';
import styles from './TabIcon.style';

const TabIcon = ({title, focused, selected}) => {

    let iconName = "";

    if (title == "Homes") {
        iconName = "home";
    }

    if ( title == "Profiles" ) {
        iconName = "user"
    }

    if ( title == "Logins" ) {
        iconName = "airplay"
    } 

    if ( title == "Settings" ) {
        iconName = "settings"
    }

    return (
        <Icon
            size={20}
            name={iconName}
            style={{ color: focused ? styles.focusedColor : 'lightgrey' }}
       />
    )
}

export default TabIcon;