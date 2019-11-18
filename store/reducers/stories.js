import STORIES from '../../dummy-data/data';
import { GET_STORIES } from '../actions/stories';

const initialState = {
    stories: STORIES
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STORIES:
            return {
                stories: action.stories
            }
    }
    return state;
}