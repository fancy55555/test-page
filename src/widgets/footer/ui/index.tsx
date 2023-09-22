import React from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import Logo from '@/shared/ui/logo'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <Logo src='/images/vector/white-logo.svg' />
                    <p>© TVOЁ 2023. Все права защищены</p>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.links}>
                        <a className={styles.link} href='#'>
                            Контакты
                        </a>
                        <a className={styles.link} href='#'>
                            Редакция
                        </a>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.link} href='#'>
                            Политика конфиденциальности
                        </a>
                        <a className={styles.link} href='#'>
                            Условия использования
                        </a>
                        <a className={styles.link} href='#'>
                            Реклама
                        </a>
                    </div>
                </nav>
                <div className={styles.details}>
                    <p className={styles.text}>
                        По любым вопросам <br /> пишите на{' '}
                        <a className={styles.contact} href='#'>
                            privet@yandex.com
                        </a>
                    </p>
                    <a className={styles.telegram} href='#'>
                        <Image src='/images/vector/telegram.svg' alt='' width={25} height={25} />
                        <span>Подписаться</span>
                    </a>
                </div>
                <button className={styles.button}>Предложить новость</button>
            </div>
        </footer>
    )
}

export default Footer
