import React, { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import Heading from '@/shared/ui/heading'
import Topic from '@/shared/ui/topic/ui'

import Cell from '@/entities/cell/ui'

export interface IItem {
    id: number
    date: string
    time: string
    content: string
    topic?: string
    comments: Array<any>
    favourites: Array<any>
    reactions: Array<IReaction>
}

interface IReaction {
    id: number
    src: string
    quantity: number
}

const Article = () => {
    const data: Array<IItem> = [
        {
            id: 0,
            date: '1.01.2023',
            time: '13:53',
            topic: 'Политика',
            content: 'Синоптик спрогнозировал срок наступления бабьего лета',
            comments: [{}, {}, {}, {}, {}],
            favourites: [{}, {}, {}, {}, {}],
            reactions: [
                {
                    id: 0,
                    src: '/images/vector/emoji-0.svg',
                    quantity: 20
                },
                {
                    id: 1,
                    src: '/images/vector/emoji-1.svg',
                    quantity: 20
                },
                {
                    id: 2,
                    src: '/images/vector/emoji-2.svg',
                    quantity: 20
                }
            ]
        },
        {
            id: 1,
            date: '1.01.2023',
            time: '13:53',
            topic: 'Политика',
            content: 'Синоптик спрогнозировал срок наступления бабьего лета',
            comments: [{}, {}, {}, {}, {}],
            favourites: [{}, {}, {}, {}, {}],
            reactions: [
                {
                    id: 0,
                    src: '/images/vector/emoji-0.svg',
                    quantity: 20
                },
                {
                    id: 1,
                    src: '/images/vector/emoji-1.svg',
                    quantity: 20
                },
                {
                    id: 2,
                    src: '/images/vector/emoji-2.svg',
                    quantity: 20
                }
            ]
        },
        {
            id: 2,
            date: '1.01.2023',
            time: '13:53',
            topic: 'Политика',
            content: 'Синоптик спрогнозировал срок наступления бабьего лета',
            comments: [{}, {}, {}, {}, {}],
            favourites: [{}, {}, {}, {}, {}],
            reactions: [
                {
                    id: 0,
                    src: '/images/vector/emoji-0.svg',
                    quantity: 20
                },
                {
                    id: 1,
                    src: '/images/vector/emoji-1.svg',
                    quantity: 20
                },
                {
                    id: 2,
                    src: '/images/vector/emoji-2.svg',
                    quantity: 20
                }
            ]
        },
        {
            id: 3,
            date: '1.01.2023',
            time: '13:53',
            topic: 'Политика',
            content: 'Синоптик спрогнозировал срок наступления бабьего лета',
            comments: [{}, {}, {}, {}, {}],
            favourites: [{}, {}, {}, {}, {}],
            reactions: [
                {
                    id: 0,
                    src: '/images/vector/emoji-0.svg',
                    quantity: 20
                },
                {
                    id: 1,
                    src: '/images/vector/emoji-1.svg',
                    quantity: 20
                },
                {
                    id: 2,
                    src: '/images/vector/emoji-2.svg',
                    quantity: 20
                }
            ]
        }
    ]

    return (
        <div className={styles.articles}>
            <div className={styles.top}>
                <Heading priority={2} content='Читайте также' />
                <Image src='/images/vector/arrows.svg' alt='' width={25} height={25} />
            </div>
            <div className={styles.row}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className={styles.item}>
                            <Cell item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Article
