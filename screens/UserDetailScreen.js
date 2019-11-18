import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch} from 'react-redux';


const UserDetailScreen = props => {
    const user = useSelector(state => state.user.user);

    return (
        <View>
            <Text style={styles.title}>{user.name} </Text>
            <Text style={styles.txt}>About: {user.about} </Text>
            <Text style={styles.txt}>Karma points {user.karma} </Text>
            <Text style={styles.txt}>Posts: {user.posts} </Text>
            <Text style={styles.txt}>Created at: {user.timestamp} </Text>
        </View>
    )
}

UserDetailScreen.navigationOptions = {
    headerTitle: 'User detail'
}

const styles = StyleSheet.create({
    txt: {
        padding: 10
    },

    title: {
        padding: 20,
        fontSize: 20
    }
})

export default UserDetailScreen;