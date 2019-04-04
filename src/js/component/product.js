import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../../style/product.less';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.productbox}>
                <h1 className={style.title}>
                    {this.props.title}
                </h1>
                <p className={style.description}>
                    {this.props.description}
                </p>
                <div className={style.contentbox}>{this.props.content}</div>
            </div>
        )
    }
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object
}