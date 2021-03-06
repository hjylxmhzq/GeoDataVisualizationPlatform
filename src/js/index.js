import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './component/background.js';
import Header from './component/header.js';
import Democard from './component/democard.js'
import Selector from './component/selector.js';
import Product from './component/product.js';
import Footer from './component/footer.js';
import HeaderImg from '../../dist/static/img/slider.jpg';
import SampleImg from '../../dist/static/img/sample.png'
import Sample from './charts/sample.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            democontent: '',
            showdemo: false
        }
    }

    handleDemoClick(content) {
        this.setState({ democontent: content, showdemo: true });
    }

    handleDemoClose() {
        this.setState({ democontent: '', showdemo: false });
    }

    render() {
        return (
            <div style={{position: 'relative'}}>
                <Background />
                <Democard show={this.state.showdemo} content={this.state.democontent} id={'democard'} handleClose={this.handleDemoClose.bind(this)} />
                <Header nav='大亚湾可视化平台' title='大亚湾可视化平台' href="#" description='粤港澳专业数据显示网站' imghref={HeaderImg} />
                <Selector 
                    awayFromTop={352}
                    data={[['product', '产品森林'],['truck', '卡车数据'],['other', '其它'],['other1', '其它1'],['other2', '其它2']]}
                />
                <Product id='product' title='产品森林' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' content={<Sample />} handleClick={this.handleDemoClick.bind(this)} placeholder={<img src={SampleImg} width='100%' height='100%' />} style={{backgroundColor: '#fafafa'}} />
                <Product id='truck' title='卡车数据' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' content={<Sample />} handleClick={this.handleDemoClick.bind(this)} placeholder={<img src={SampleImg} width='100%' height='100%' />} style={{backgroundColor: '#fafafa'}} />
                <Product id='other' title='other' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' content={<Sample />} handleClick={this.handleDemoClick.bind(this)} placeholder={<img src={SampleImg} width='100%' height='100%' />} style={{backgroundColor: '#fafafa'}} />
                <Product id='other1' title='other1' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' content={<Sample />} handleClick={this.handleDemoClick.bind(this)} placeholder={<img src={SampleImg} width='100%' height='100%' />} style={{backgroundColor: '#fafafa'}} />
                <Product id='other2' title='other2' description='介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介' content={<Sample />} handleClick={this.handleDemoClick.bind(this)} placeholder={<img src={SampleImg} width='100%' height='100%' />} style={{backgroundColor: '#fafafa'}} />
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));