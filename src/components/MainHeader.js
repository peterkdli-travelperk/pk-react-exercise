import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from  './MainHeader.module.css';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/welcome'> WELCOME</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/products'> Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
