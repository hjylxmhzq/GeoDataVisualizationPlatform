import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header.js'
import Product from './component/product.js'
import HeaderImg from '../../dist/static/img/slider.jpg'

function App() {
    return (
        <div>
            <Header nav='大亚湾可视化平台' title='大亚湾可视化平台' href="#" description='粤港澳专业数据显示网站' imghref={HeaderImg} />
            <Product title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' />
            <Product title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' style={{backgroundColor: '#fafafa'}} />
            <Product title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' />
            <Product title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' style={{backgroundColor: '#fafafa'}} />
            <Product title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));