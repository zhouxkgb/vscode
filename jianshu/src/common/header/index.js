import React,{Component} from 'react';
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoList,
    SearchInfoTitile,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchWrapper
} from './style';
import { actionCreators} from "./store";

class Header extends Component{
    getListArea = () => {
        const {
            focus,
            list,
            page,
            countPage,
            mouseIn,
            handlerMouseEnter,
            handlerMounseLeave,
            handlerClickChangePage
        } = this.props
        const pageList = []
        const newList = list.toJS()
        if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focus || mouseIn){
            return (
            <SearchInfo onMouseEnter={handlerMouseEnter}
                        onMouseLeave={handlerMounseLeave}>
                <SearchInfoTitile>热门搜索
                    <SearchInfoSwitch onClick={()=>{handlerClickChangePage(page,countPage)}}>换一批</SearchInfoSwitch>
                </SearchInfoTitile>
                <SearchInfoList>
                    {pageList}                          
                </SearchInfoList>
            </SearchInfo>)
        }
    }
    render(){
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                    <CSSTransition timeout={200} in={this.props.focus} classNames="slide">
                    <NavSearch className={this.props.focus?'focused':''}
                                onFocus={this.props.handlerInputFocus}
                                onBlur={this.props.handlerInputBlur}>                        
                    </NavSearch>
                    </CSSTransition>
                    <span className={this.props.focus?'focused iconfont':'iconfont'}>&#xe69d;</span>
                    {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe61d;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

 }



const mapState2props = (state)=>{
    return {
        focus: state.getIn(['header','focus']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        countPage:state.getIn(['header','countPage']),
    }
}

const mapDispatch2props = (dispatch)=>{
    return {
        handlerInputFocus : () => {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        handlerInputBlur : () => {
            dispatch(actionCreators.searchBlur())
        },
        handlerMouseEnter:()=>{
            dispatch(actionCreators.searchInfoMouseIn())
        },
        handlerMounseLeave:()=>{
            dispatch(actionCreators.searchInfoMouseOut())
        },
        handlerClickChangePage: (page,countPage) => {
            if(page<countPage){
                dispatch(actionCreators.searchInfoChange(page+1))
            }else{
                dispatch(actionCreators.searchInfoChange(1))
            }
        }
    }
}
export default connect(mapState2props, mapDispatch2props)(Header)