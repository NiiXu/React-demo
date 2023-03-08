import React from "react";
import ReactDOM from "react-dom";

import "./demo1.css"

const App = ()=>{
    return(
        <div className={"App"}>
            爸爸
            <Son msg={'儿砸听话'}></Son>
        </div>
    )
}

class Son extends React.Component{
    constructor() {
        super();
        this.state={
            n:0,
            m:0,
        }
    }
    addN = ()=>{
        this.setState(state=>{
            const n = state.n + 1
            console.log(n)
            return {n}
        })
    }
    addM = ()=>{
        this.setState(state=>{
            const m = state.m + 1
            console.log(m)
            return {m}
        })
    }
    render() {
        return (
            <div className={'Son'}>儿子
                n:{this.state.n}
                <button onClick={()=>{
                    this.addN()

                } }>+1</button>
                m:{this.state.m}
                <button onClick={()=>{
                    this.addM()

                } }>+1</button>
                <Grandson></Grandson>
            </div>
        )
    }
}

const Grandson=()=>{
    // const [n,setN] = React.useState(0) //第一项读，第二项写
    const [state,setState] = React.useState({
        n:0,m:0
    })

    return(
        <div className={'Grandson'}>孙子
            <div>n:{state.n}</div>
            <button onClick={()=> setState({...state,n:state.n+1})}></button>
            <div>m:{state.m}</div>
            <button onClick={()=> setState({...state,m:state.m+1})}></button>

            {/*<button onClick={()=>{*/}
            {/*    setN(n+1)*/}
            {/*} }>+1</button>*/}
        </div>
    )
}

export default App
