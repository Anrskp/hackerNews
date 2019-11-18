import Story from '../../models/story';

export const GET_STORIES = 'GET_STORIES';

// Fisher-Yates shuffle.
let shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let randomStories = (arr, amount) => {
    let idArr = arr;
    let stories = [];

    for(let i = 0; i < amount; i++) {
        let rand = Math.floor(Math.random() * idArr.length);
        let target = arr[rand];
        stories.push(target);
        idArr.splice(rand, 1);    
    }

    return stories;
}


export const fetchStories = () => {
    return async dispatch => {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        const resData = await response.json();
        const shuffledData = shuffle(resData);
        //let tenRandomStories = randomStories(resData, 10);

        let stories = [];

        /*
        tenRandomStories.forEach( async (storyID) => {
            let story = await fetch('https://hacker-news.firebaseio.com/v0/item/' + storyID +'.json')
            let storyData = await story.json();
            stories.push(new Story(storyData.id, storyData.title, storyData.url, storyData.time, storyData.score, storyData.by))
        })
        */
        
        for(let i = 0; i < 10; i++) {
            let story = await fetch('https://hacker-news.firebaseio.com/v0/item/' + shuffledData[i] +'.json')
            let storyData = await story.json();
            stories.push(new Story(storyData.id, storyData.title, storyData.url, storyData.time, storyData.score, storyData.by))
        }
        
        stories.sort((a, b) => a.score-b.score)

        dispatch({ type: GET_STORIES, stories: stories})
    }
}