import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header.js'

function App() {
    return (
        <div>
            <Header nav='大亚湾可视化平台' title='大亚湾可视化平台' href="#" description='粤港澳专业数据显示网站'/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));