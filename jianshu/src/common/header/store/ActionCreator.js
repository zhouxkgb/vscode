import * as constants from './ActionType';
import axios from "axios";
import {fromJS} from 'immutable';

const searchList = (data) => ({
    type: constants.SEARCH_LIST,
    data: fromJS(data),
    countPage:Math.ceil(data.length/10)
})

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
})
export const searchInfoMouseIn =()=>({
    type: constants.SEARCH_MOUSE_IN
})
export const searchInfoMouseOut = () => ({
    type: constants.SEARCH_MOUSE_OUT
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
export const searchInfoChange = (page) => ({
    type: constants.SEARCH_CHANGE_PAGE,
    page
})
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then(
            (res)=>{
                const data =res.data
                dispatch(searchList(data.data))
            }
        ).catch(
            ()=>{
                console.log("error")
            }
        )
    }
}