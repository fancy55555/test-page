import React from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import { IItem } from '@/entities/articles/ui'

import Heading from '@/shared/ui/heading'
import Cell from '@/entities/cell/ui'

interface IIncident extends IItem {
    src: string
}

const Incidents = () => {
    const data: Array<IIncident> = [
        {
            id: 0,
            src: '/images/raster/test-0.jpg',
            date: '1.01.2023',
            time: '13:53',
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
            src: '/images/raster/test-1.jpg',
            date: '1.01.2023',
            time: '13:53',
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
            src: '/images/raster/test-2.jpg',
            date: '1.01.2023',
            time: '13:53',
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
            src: '/images/raster/test-3.jpg',
            date: '1.01.2023',
            time: '13:53',
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
        <div className={styles.incidents}>
            <div className={styles.top}>
                <Heading priority={2} content='Происшествия' />
                <Image src='/images/vector/arrows.svg' alt='' width={25} height={25} />
            </div>
            <div className={styles.row}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className={styles.container}>
                            <Image src={item.src} alt='' width={265} height={165} />
                            <Cell item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Incidents
