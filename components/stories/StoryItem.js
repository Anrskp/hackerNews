import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const StoryItem = props => {
    return (
        <View style={styles.story}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.user}>by : {props.user}</Text>
            <Text style={styles.user}>points : {props.points}</Text>
            
            <View style={styles.action}>
                <Button title="View Details" onPress={props.onViewDetail} />
                <Button title="View User" onPress={props.onViewUser} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    story: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 250,
        margin: 20,
    },

    title: {
        fontSize: 18,
        margin: 30,
        maxHeight: 100
    },

    user: {
        fontSize: 14,
        color: '#888',
        margin: 10
        
    },

    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default StoryItem;