import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch} from 'react-redux';

import StoryItem from '../components/stories/StoryItem';
import * as storiesAction from '../store/actions/stories';
import * as userAction from '../store/actions/user';

const StoriesOverviewScreen = props => {
    const stories = useSelector(state => state.stories.stories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(storiesAction.fetchStories());
    }, [dispatch]);

    const navigateHandler = (id = null, screen) => {
        props.navigation.navigate(screen, {id: id});
    }

    return (
        <FlatList 
            data={stories} 
            keyExtractor={item => item.id} 
            renderItem={itemData => 
                <StoryItem 
                    title={itemData.item.title} 
                    user={itemData.item.authorID} 
                    points={itemData.item.score} 
                    
                    onViewDetail={() => {
                        navigateHandler(itemData.item.id, 'StoryDetail');
                    }}

                    onViewUser={() => {
                        dispatch(userAction.fetchUser(itemData.item.authorID));
                        navigateHandler(itemData.item.authorID, 'UserDetail');
                    }}/>} 
                />
    );
}

StoriesOverviewScreen.navigationOptions = {
    headerTitle: 'Hacker news stories'
}

export default StoriesOverviewScreen;