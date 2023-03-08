import React from "react";


/**
 * 标签里的所有JS代码都要用{}包起来
 * 插入对象也需要用{}包起来 {{name:'chx'}}
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    return (     //return 之后必须要加（）
        <div className={'red'}>APP组件
            < Component numbers={['a', 'b', 'c']}/>
            < Welcome  />
        </div>  //被转译为React.createElement('div',{className:'red'},"n")
    )
}


const Component = (props) => {
    const array = []
    // for (let i = 0; i < props.numbers.length; i++) {
    //     array.push(
    //         <div>{i}:{props.numbers[i]}</div>
    //     )
    // }
    // return <div>{array}</div>
    return props.numbers.map((i,index)=>{
        return <div>{index}:{i} </div>
    })
}

class Welcome extends React.Component{
    constructor() {
        super();
        this.state ={n:0}
    }
    render() {
        return <div>hi</div>
    }
}


export default App
