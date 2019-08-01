import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div onClick={this.handlerClickItemDel}>
                {this.props.content}
            </div>
        )
    }
    handlerClickItemDel = () => {
        // console.log(this.props.index)
        this.props.clickItem(this.props.index)
    }
}
