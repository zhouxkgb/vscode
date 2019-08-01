import React, { Component } from 'react'

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
                <ul>
                    {this.state.list.map((item,index)=>{
                        return (
                            <li key={index} onClick={()=>{this.handlerClickItemDel(index)}}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    handlerInputChange = (e)=>{
        // console.log(e.target.value)
        const value = e.target.value    
        this.setState({             //setState里面方法是异步的
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
         //console.log(index)
        // 修改state数据，请先拷贝，不要直接修改
        const newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState(() => ({
            list: newList
        }))
    }
}
