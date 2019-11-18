import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { useSelector } from 'react-redux';

const StoryDetailScreen = props => {
    
    const storyId = props.navigation.getParam('id');
    const selectedStory = useSelector(state => state.stories.stories.find(story => story.id === storyId));

    return (
        <View>
            <Text style={styles.title}>{selectedStory.title}</Text>
            <Text style={styles.txt} onPress={() => Linking.openURL(selectedStory.url)}> URL: {selectedStory.url}</Text>
            <Text style={styles.txt}>timestamp: {selectedStory.timestamp}</Text>
            <Text style={styles.txt}>score: {selectedStory.score}</Text>
            <Text style={styles.txt}>authorID: {selectedStory.authorID}</Text>
        </View>
    )
}

StoryDetailScreen.navigationOptions = {
    headerTitle: 'Story detail'
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

export default StoryDetailScreen;