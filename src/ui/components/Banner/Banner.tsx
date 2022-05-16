import React from 'react';

import {NavLink} from "react-router-dom";

import s from './Banner.module.scss'

import banner from 'assets/image/Banner/banner.jpg'

export const Banner = () => (
    <div className={s.container}>
        <div className={s.banner} style={{backgroundImage: `url(${banner})`}}>
            <div className={s.banner__inner}>
                <h2 className={s.banner__title}>Test assignment for
                front-end
                developer</h2>
                <p className={s.banner__descr}>What defines a good front-end developer is
                    one that has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they will be building web
                    interfaces with accessibility in mind. They should also be excited to
                    learn, as the world of Front-End Development keeps evolving.</p>
                <div className={s.banner__wrapper_link}>
                    <NavLink className={s.banner__link} to='/login'>Sing
                        up</NavLink>
                </div>
            </div>
        </div>
    </div>
);
