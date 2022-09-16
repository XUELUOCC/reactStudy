import React, { Component } from 'react'

export default class child extends Component{
    state={
        value:'aaaaaaa'
    }
    getData=()=>{
        console.log('接收父组件传过来得值',this.props)
        this.props.getChildData(this.state.value)
    }
    render(){
        return(
            <div style={{width:'100px',height:'100px',border:'1px solid red'}}>
                <p>我是子组件</p>
                <button onClick={this.getData}>子组件点击接收</button>
            </div>
        )
    }
}