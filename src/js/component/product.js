import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../../style/product.less';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.style = this.props.style
        this.state = {
            content: this.props.placeholder,
            contentBoxStyle: {},
            refresh: true
        }
    }

    handleClick() {
        this.props.handleClick(this.props.content);
    }

    render() {
        return (
            <div 
                className={style.outerbox}
            >
            <div 
                id={this.props.id} 
                className={style.productbox}
            >
                <h1 className={style.title}>
                    {this.props.title}
                </h1>
                <p className={style.description}>
                    {this.props.description}
                </p>
                <div 
                    style={this.state.contentBoxStyle}
                    onClick={this.handleClick.bind(this)}    
                    className={style.contentbox}
                >
                    {this.state.content}
                </div>
            </div>
            </div>
        )
    }
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object
}

Product.defaultProps = {
    placeholder: <div style={{width: '100%', height: '100%'}}></div>
}