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

const addHomeList = (result, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    articleList: fromJS(result),
    nextPage
})

export const toggleScrollTop = (tag) => ({
    type: constants.TOGGLE_SHOW,
    tag
})

export const getMoreList = (curPage) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + curPage).then(
            (res) => {
                const result = res.data.data
                dispatch(addHomeList(result, curPage + 1))
            }
        ).catch(
            () => {
                console.log("error")
            }
        )
    }
}

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