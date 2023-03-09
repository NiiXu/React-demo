import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

import useUpdate from "./useUpdate";
const FnComponent = (props) => {
    const [state, setState] = React.useState({
        name: "nfen",
        n: 0,
        hiVisible: true
    })

    useUpdate(()=>{
        console.log("变了")
    },state.n)

    //挂载    相当于componentDidMount
    useEffect(() => {
        console.log("use effect")
    }, [])

    //n变了的时候执行   相当于componentDidUpdate
    useEffect(() => {
        // console.log("n 变了")
    }, [state.n]) //不写是整个state变了时执行

    //n变了的时候执行   相当于componentDidUpdate
    const hVisibile = () => {
        setState({...state, hiVisible: !state.hiVisible})
    }

    return (
        <>
            <div>{state.n}</div>
            <button onClick={() => {
                setState({...state, n: state.n + 1})
            }}>+1
            </button>
            <button onClick={hVisibile}>+1</button>

            {state.hiVisible ? <Hi name={state.name}></Hi> : null}
        </>
    )
}

const Hi = (props) => {

    // useEffect(() => {
    //     return () => {
    //         console.log('销毁了')
    //     }
    // })

    return (
        <>
            <div>{props.name}</div>
        </>
    )
}
export default FnComponent
