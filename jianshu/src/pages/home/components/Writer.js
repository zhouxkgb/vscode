import React, { Component } from 'react'
import { WriterWrapper, WriterTitle, WriterToggle, WriterItem } from '../style';
import { connect } from 'react-redux';
class Writer extends Component {
    render() {
        const { list } = this.props
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者<WriterToggle>换一批</WriterToggle>
                </WriterTitle>
                {
                    list.map((item) => (
                        <WriterItem key={item.get('id')}>
                            <img className='pic' src={item.get('imgUrl')} />
                            <p className='get'>+ 关注</p>
                            <h3 className='author'>{item.get('author')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                        </WriterItem>
                    ))
                }
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})
export default connect(mapState, null)(Writer)