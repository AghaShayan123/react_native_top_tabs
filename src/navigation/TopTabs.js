import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home, Books, Contacts } from '../screens';

const Tab = createMaterialTopTabNavigator();

export default TopTabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: 'red'
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Books" component={Books} />
            <Tab.Screen name="Contacts" component={Contacts} />
        </Tab.Navigator>
    )
}