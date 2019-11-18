import User from '../../models/user';

export const GET_USER = 'GET_USER';

export const fetchUser = (id) => {
    return async dispatch => {
        const response = await fetch(
            'https://hacker-news.firebaseio.com/v0/user/' + id + '.json'
        );

        const resData = await response.json();
        let user = new User(resData.id, resData.about, resData.karma, resData.submitted.length, resData.created)
        
        dispatch({ type: GET_USER, user: user})
    }
}