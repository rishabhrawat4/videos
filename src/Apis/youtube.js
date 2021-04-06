import axios from 'axios';

const KEY = 'AIzaSyB9p2mRW_ySqiBKeiu6IROHlWBPckq4m1w';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})