import React, { Component } from 'react';
import style from '../../style/selector.less'

export default class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onTop: true
        }
    }

    componentDidMount() {
        if (this.props.awayFromTop) {
            window.addEventListener('scroll', this.handleScroll.bind(this));
        }
    }

    componentWillUnmount() {
        if (this.props.awayFromTop) {
            window.removeEventListener('scroll', this.handleScroll.bind(this));
        }
    }

    handleScroll(e) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < this.props.awayFromTop) {
            this.setState({onTop: true});
        } else {
            this.setState({onTop: false});
        }
    }

    render() {
        let { data } = this.props;
        let positionStyle = this.state.onTop ? { position: 'absolute', top: this.props.awayFromTop+50 } : { position: 'fixed', top: '50px' }; 
        return (
            <ul className={style.selectorbox} style={positionStyle}>
                {
                    data.map((element, idx) => {
                        return (
                            <li key={idx}><a href={'#'+element[0]}>{element[1]}</a></li>
                        )
                    })
                }
            </ul>
        )
    }
}