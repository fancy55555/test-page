import React, { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import Logo from '@/shared/ui/logo'

import { formatTimestamp } from '@/shared/helpers'

const Header = () => {
    const data = [
        {
            id: 0,
            src: '/images/vector/calendar.svg',
            content: formatTimestamp(Date.now())
        },
        {
            id: 1,
            src: '/images/vector/usd.svg',
            content: '96.34'
        },
        {
            id: 2,
            src: '/images/vector/eur.svg',
            content: '104.61'
        },
        {
            id: 3,
            src: '/images/vector/btc.svg',
            content: '25.725'
        }
    ]

    return (
        <header className={styles.header}>
            <Logo src='/images/vector/full-logo.svg' />
            <div className={styles.blocks}>
                {data.map((item) => {
                    return <Block key={item.id} src={item.src} content={item.content} />
                })}
            </div>
        </header>
    )
}

interface BlockProps {
    src: string
    content: string
}

const Block: FC<BlockProps> = ({ src, content }) => {
    return (
        <div className={styles.block}>
            <Image className={styles.icon} src={src} alt='' width={25} height={25} />
            <span className={styles.string}>{content}</span>
        </div>
    )
}

export default Header
