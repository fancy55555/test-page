import React from 'react'

import styles from './styles.module.css'

const Ad = () => {
    return (
        <div className={styles.ad}>
            <div className={styles.top}>
                <a className={styles.link} href='#' target='_blank'>
                    Ссылка на сайт <span>реклама</span>
                </a>
            </div>
            <div className={styles.content}>Реклама</div>
            <p className={styles.text}>Текст длинного рекламного объявления</p>
        </div>
    )
}

export default Ad
