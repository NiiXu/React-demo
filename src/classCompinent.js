import React from "react";
import ReactDOM from "react-dom";

class ClassComponent extends React.PureComponent {
    //初始化props,state但不能调用setState
    constructor(props) {
        super(props);
        this.state = {
            x: 1,
            width:null
        }
        this.divRef = React.createRef()
    }

    onClick = () => {
        // this.setState({
        //     x:this.state.x+1
        // })
        this.setState((state) => ({x: state.x + 1}))
    }

    //true表示更新UI,false表示阻止
    //
    // shouldComponentUpdate(newProps, newState, nextContext) {
    //     if (newState.x === this.state.x) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    //加载数据请求
    componentDidMount() {
        // const div = document.getElementById('xxx')
        // const {width} = div.getBoundingClientRect()
        // this.setState({width})
        const div = this.divRef.current
        const {width} = div.getBoundingClientRect()
        this.setState({width})
    }

    //视图更新后执行
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    //组件将要被移除后销毁的代码
    componentWillUnmount() {

    }

    render() {
        let message
        if (this.state.x % 2 === 0) {
            message = <div>偶数</div>
        } else {
            message = <div>奇数</div>
        }
        return (
            <>
                {this.state.x % 2 === 0 ?
                    <div>偶数</div> : <span>奇数</span>}
                <button onClick={this.onClick}>+1</button>
                <div ref={this.divRef}>{this.state.width}</div>
            </>
        )
    }
}

class B extends React.Component {
    constructor() {
        super();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('props变化了')
        console.log('旧的', this.props)
        console.log('新的', nextProps)
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default ClassComponent
