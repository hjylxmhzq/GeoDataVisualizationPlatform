import style from '../../style/header.less'
import React from 'react'

export default function Header(props){
    return (
        <div>
            <nav class={style.header}>
                <a class={style.headerlink} href={props.href}>{props.nav}</a>
            </nav>
            <div class={style.cover}>
                <img class={style.headerimg} />
                <p class={style.title}>{props.title}</p>
                <p class={style.description}>{props.description}</p>
            </div>
        </div>
    )
}