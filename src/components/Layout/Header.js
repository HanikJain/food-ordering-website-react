import classes from "./Header.module.css"

import React, {Fragment} from 'react'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>Meal Monkey</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </Fragment>   
    )
}
