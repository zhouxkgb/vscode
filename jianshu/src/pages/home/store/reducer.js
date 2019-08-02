import * as constants from './ActionType';
import { fromJS } from "immutable";
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    isScroll: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HOME_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case constants.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.articleList),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SHOW:
            return state.set('isScroll', action.tag)
        default:
            return state
    }
}