import * as constants from './ActionType';
import axios from "axios";
import { fromJS } from 'immutable';

const detailList = (result) => ({
    type: constants.GET_DETAIL,
    title: fromJS(result.title),
    content: fromJS(result.content)
})


export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then(
            (res) => {
                const result = res.data.data
                dispatch(detailList(result))
            }
        ).catch(
            () => {
                console.log("error")
            }
        )
    }
}

