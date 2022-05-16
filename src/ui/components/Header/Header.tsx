import React from 'react';

import {NavLink} from 'react-router-dom'

import s from './Header.module.scss'

import logo from 'assets/image/Logo/Logo.svg'

export const Header = () => (
        <div className='container'>
            <div className={s.header}>
                <img src={logo} alt="logo"/>
                <div className={s.header__wrapper}>
                    <NavLink className={s.header__wrapper_link}
                             to='/users'>Users</NavLink>
                    <NavLink className={s.header__wrapper_link} to='/login'>Sing
                        up</NavLink>
                </div>
            </div>
            
        </div>
    );

