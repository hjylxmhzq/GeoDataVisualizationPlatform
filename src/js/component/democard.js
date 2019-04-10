import React, { Component } from 'react';
import classnames from 'classnames';
import style from '../../style/democard.less'

export default class Democard extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    componentDidMount() {
        this.setState({show: true});
        this.props.didMount ? this.props.didMount().bind() : '';
    }

    componentWillUnmount() {
        this.props.willUnmount ? this.props.willUnmount().bind(this) : '';
    }

    componentWillUpdate() {

    }

    handleClose(e) {
        e.stopPropagation();
        this.props.handleClose();
        this.setState({
            show: false
        })
    }

    render() {
        return (
            this.props.show ? 
            <div className={classnames(style.democard, {[style.show]: this.props.show})} id={this.props.id}>
            {
                this.props.content
            }
            <div className={style.closeicon} onClick={this.handleClose.bind(this)}>╳</div>
            </div>
            :
            <div className={classnames(style.democard, {[style.show]: this.props.show})} id={this.props.id}></div>
        )
    }
}