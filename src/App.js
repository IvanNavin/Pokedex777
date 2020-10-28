import React from 'react';
import monkey from './img/monkey.png'

import s from './App.modules.scss'

const App = () => {
    return (
        <>
            <h1 className={s.title}>Yo!<br/>This is ChudoReactPRO.<br/>You are is awesome</h1>
            <img className={s.img} src={monkey} alt="monkey"/>
        </>
    )
}

export default App;