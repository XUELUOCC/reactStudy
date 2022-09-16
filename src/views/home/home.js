import React, { Component } from 'react'
import Child from '../test/child'

export default class Home extends Component{
    state={
        name:'姓名',
        age:'18',
        school:'学校',
        flag:false,
        user:[
            {
                name:'张三',
                id:1
            },
            {
                name:'李四',
                id:2
            },
            {
                name:'王五',
                id:3
            },
        ]
    }
//1.组件挂载阶段
    //将传入的props映射到state中,会在render之前调用
    static getDerivedStateFromProps(props,state){
        console.log('挂载之前，映射props到state中',props,state)
        return null
    }
    //组件挂载完成
    componentDidMount(){
        console.log('组件挂载完成')
    }
    
//2.组件更新阶段（状态更新）
    // static getDerivedStateFromProps(props,state){}
    //组件更新之前执行，是组件是否更新的阀门，默认返回true,返回false组件就不会更新，参数：最新的props和state
    shouldComponentUpdate(nextProps,nextState){
        console.log('组件发生更新',nextProps,nextState)
    }
    //在最后一次dom更新前触发，返回null或者快照值(可以是任意值)，return后返回给componentDidUpdate 参数：更新前的props和state
     getSnapshotBeforeUpdate(preProps,preState){
        console.log('更新前触发，拿到此时的快照值',preProps,preState)
    }
    //组件更新结束，参数：更新后的props，state，更新前的快照值
    componentDidUpdate(preProps,preState,snapshot){
        console.log('组件更新结束',preProps,preState,snapshot)
    }
//3.卸载组件
    componentWillUnmount(){
        console.log('组件将要卸载')
    }

    btnClick=()=>{   //需要通过箭头函数保证this指向,否则this指向不一致，无法取到其中的状态
        console.log('点击了',this.state.name)
        this.setState({
            flag:!this.state.flag
        })
    }
    getChildData=(data)=>{
        console.log('fggggg接收得子组件得值',data)
    }
    render(){
        return(
            <div>
                <div>首页显示</div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.school}</p>
                {
                    this.state.flag?(<div>显示</div>) : (<div>隐藏</div>)
                }
                <button onClick={this.btnClick}>点击按钮</button>
                <ul>{
                        this.state.user.map((item,index)=>{
                            return(
                                 <li key={item.id}>姓名：{item.name}</li>
                            )
                        })
                    }
                   
                </ul>
                <Child user={this.state.user} getChildData={this.getChildData}></Child>
            </div>
            
        )
    }
} 