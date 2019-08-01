import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handlerInputChange}/>
                <button onClick={this.handlerClickBtn}>提交</button>
                {
                    this.state.list.map((item,index)=>{
                        return (
                           <TodoItem content={item} key={index} 
                           clickItem={()=>{this.handlerClickItemDel(index)}}/>
                        )
                    })}
            </div>
        )
    }
    handlerInputChange = (e)=>{
        // console.log(e.target.value)
        const value = e.target.value
        this.setState({
            inputValue: value
        })
    }
    handlerClickBtn = () => {
        // console.log(11)
        this.setState((preState)=>({
            list:[...preState.list,preState.inputValue],
            inputValue:''
        }))
    }

    handlerClickItemDel = (index)=>{
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState(() => ({
            list: newList
        }))
    }
}
