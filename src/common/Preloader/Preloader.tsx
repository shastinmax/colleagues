import React from 'react';

import s from './Preloader.module.scss'

import preloader from 'assets/image/Preloader/Preloader.svg'

export const Preloader = () => (
    <div className={s.preloader}>
        <img className={s.preloader__img} src={preloader} alt="loader"/>
    </div>
);

