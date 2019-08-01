import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from './store'
import { connect } from 'react-redux';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className='banner-img'
                        src='//upload.jianshu.io/admin_banners/web_images/4685/15af36f728068dfa8860f2a6259c19a5a84f0921.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeData()
    }

}
const mapDispatch = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getList())
    }
})

export default connect(null, mapDispatch)(Home)
