import React, { Component } from 'react';
import style from '../../style/footer.less';

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <div className={style.text}></div>
            <div className={styleMedia.qrcode}></div>
        </footer>
    )
}