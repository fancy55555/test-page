import React, { FC } from 'react'

import styles from './styles.module.css'

import Image from 'next/image'

interface LogoProps {
    src: string
}

const Logo: FC<LogoProps> = ({ src }) => {
    return (
        <a className={styles.logo} href='/'>
            <Image src={src} alt='Logo' width={115} height={40} />
        </a>
    )
}

export default Logo
