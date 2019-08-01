import * as constants from './ActionType';
import axios from "axios";
import { fromJS } from 'immutable';

const homeList = (result) => ({
    type: constants.HOME_LIST,
    topicList: fromJS(result.topicList),
    articleList: fromJS(result.articleList),
    recommendList: fromJS(result.recommendList),
    writerList: fromJS(result.writerList)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(
            (res) => {
                const result = res.data.data
                dispatch(homeList(result))
            }
        ).catch(
            () => {
                console.log("error")
            }
        )
    }
}