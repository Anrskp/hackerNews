import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import StoriesOverviewScreen from '../screens/StoriesOverviewScreen';
import StoryDetailScreen from '../screens/StoryDetailScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const MainNavigator = createStackNavigator({
    StoriesOverview: StoriesOverviewScreen,
    StoryDetail: StoryDetailScreen,
    UserDetail: UserDetailScreen
});

export default createAppContainer(MainNavigator);