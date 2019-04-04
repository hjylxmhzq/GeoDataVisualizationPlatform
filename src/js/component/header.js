import style from '../../style/header.less'
import React from 'react'

export default function Header(props){
    return (
        <div className={style.headerbox}>
            <nav className={style.header}>
                <a className={style.headerlink} href={props.href}>{props.nav}</a>
            </nav>
            <div className={style.cover}>
                <img className={style.headerimg} src={props.imghref} alt="大亚湾可视化平台" title="大亚湾可视化平台"/>
                <p className={style.title}>{props.title}</p>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}