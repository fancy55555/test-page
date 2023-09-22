import React, { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

const Navbar = () => {
    const data = [
        {
            id: 0,
            src: '/images/vector/tape.svg',
            name: 'Лента',
            href: '/'
        },
        {
            id: 1,
            src: '/images/vector/incidents.svg',
            name: 'Происшествия',
            href: '/incidents'
        },
        {
            id: 2,
            src: '/images/vector/auto.svg',
            name: 'Авто',
            href: '/auto'
        },
        {
            id: 3,
            src: '/images/vector/business.svg',
            name: 'Бизнес',
            href: '/business'
        },
        {
            id: 4,
            src: '/images/vector/health.svg',
            name: 'Здоровье',
            href: '/health'
        },
        {
            id: 5,
            src: '/images/vector/crypto.svg',
            name: 'Крипто',
            href: '/crypto'
        },
        {
            id: 6,
            src: '/images/vector/estate.svg',
            name: 'Недвижимость',
            href: '/estate'
        },
        {
            id: 7,
            src: '/images/vector/education.svg',
            name: 'Образование',
            href: '/education'
        },
        {
            id: 8,
            src: '/images/vector/politics.svg',
            name: 'Политика',
            href: '/politics'
        },
        {
            id: 9,
            src: '/images/vector/tourism.svg',
            name: 'Туризм',
            href: '/tourism'
        },
        {
            id: 10,
            src: '/images/vector/showbiz.svg',
            name: 'Шоу-бизнес',
            href: '/showbiz'
        },
        {
            id: 11,
            src: '/images/vector/sport.svg',
            name: 'Спорт',
            href: '/sport'
        },
        {
            id: 12,
            src: '/images/vector/style.svg',
            name: 'Стиль',
            href: '/style'
        },
        {
            id: 13,
            src: '/images/vector/science.svg',
            name: 'Наука и технологии',
            href: '/science'
        },
        {
            id: 14,
            src: '/images/vector/economics.svg',
            name: 'Экономика',
            href: '/economics'
        }
    ]

    return (
        <nav className={styles.navbar}>
            {data.map((item) => {
                return <Item key={item.id} src={item.src} name={item.name} href={item.href} />
            })}
        </nav>
    )
}

interface ItemProps {
    src: string
    name: string
    href: string
}

const Item: FC<ItemProps> = ({ src, name, href }) => {
    return (
        <a className={styles.item} href={href}>
            <Image className={styles.icon} src={src} alt='' width={25} height={25} />
            <span>{name}</span>
        </a>
    )
}

export default Navbar
