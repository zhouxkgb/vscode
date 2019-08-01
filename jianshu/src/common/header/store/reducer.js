import * as constants from './ActionType';
import { fromJS } from "immutable";
const defaultState = fromJS({
    focus:false,
    mouseIn:false,
    list:[],
    page:1,
    countPage:1
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focus', true)  
        case constants.SEARCH_BLUR:
            return state.set('focus', false)
        case constants.SEARCH_MOUSE_IN:
            return state.set('mouseIn', true)
        case constants.SEARCH_MOUSE_OUT:
            return state.set('mouseIn', false)
        case constants.SEARCH_CHANGE_PAGE:
            return state.set('page', action.page)
        case constants.SEARCH_LIST:
            return state.merge({
                list:action.data,
                countPage:action.countPage
            })
        default:
            return state
    }
}