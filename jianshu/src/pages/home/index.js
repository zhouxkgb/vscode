import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from "./components/Topic";
import ArticleList from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from './store'
import { connect } from 'react-redux';
class Home extends Component {
    handlerClickTop = () => {
        window.scrollTo(0, 0);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.showScroll)
    }
    componentDidMount() {
        this.props.getHomeData()
        this.bindEvents()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.showScroll)
    }
    render() {
        const { isScroll } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img'
                        src='//upload.jianshu.io/admin_banners/web_images/4685/15af36f728068dfa8860f2a6259c19a5a84f0921.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic></Topic>
                    <ArticleList></ArticleList>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    isScroll ? <BackTop onClick={this.handlerClickTop}>回到顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }
}
const mapDispatch = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getList())
    },
    showScroll() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleScrollTop(true))
        } else {
            dispatch(actionCreators.toggleScrollTop(false))
        }
    }
})
const mapState = (state) => ({
    isScroll: state.getIn(['home', 'isScroll'])
})

export default connect(mapState, mapDispatch)(Home)
