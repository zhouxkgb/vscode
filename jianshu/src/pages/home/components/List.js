import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';
class ArticleList extends PureComponent {
    render() {
        const { list, handlerClickMore, curPage } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link to='/detail' key={index}>
                            <ListItem >
                                <img alt='' className='pic' src={item.get('imgUrl')}></img>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => { handlerClickMore(curPage) }}>更多文字</LoadMore>
            </div >
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    curPage: state.getIn(['home', 'articlePage'])

})

const mapDispatch = (dispatch) => ({
    handlerClickMore: (curPage) => {
        dispatch(actionCreators.getMoreList(curPage))
    }
})
export default connect(mapState, mapDispatch)(ArticleList)