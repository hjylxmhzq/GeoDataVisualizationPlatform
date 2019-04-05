import React, { Component } from 'react';
import style from '../../style/footer.less';
import Qrcode from '../../../dist/static/img/qrcode.jpg'

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <div className={style.text}>©2019 SYSU城市化研究院. All rights reserved.</div>
            <div className={style.qrcode}>{<img src={Qrcode} height='100%' width='100%' />}</div>
        </footer>
    )
}