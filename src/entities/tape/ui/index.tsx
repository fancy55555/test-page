import React, { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import Heading from '@/shared/ui/heading'
import Topic from '@/shared/ui/topic/ui'

const Tape = () => {
    const data = [
        {
            id: 0,
            content: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
            time: '14:59',
            topic: 'Политика'
        },
        {
            id: 1,
            content: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
            time: '14:59',
            topic: 'Политика'
        },
        {
            id: 2,
            content: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
            time: '14:59',
            topic: 'Политика'
        },
        {
            id: 3,
            content: 'Сотни россиян застряли в Египте из-за отмен рейсов.',
            time: '14:59',
            topic: 'Политика'
        }
    ]

    return (
        <div className={styles.tape}>
            <Heading priority={2} content='Лента' />
            <div className={styles.items}>
                {data.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            content={item.content}
                            time={item.time}
                            topic={item.topic}
                        />
                    )
                })}
            </div>
        </div>
    )
}

interface ItemProps {
    content: string
    time: string
    topic: string
}

const Item: FC<ItemProps> = ({ content, time, topic }) => {
    return (
        <div className={styles.item}>
            <Image
                className={styles.icon}
                src='/images/vector/fire.svg'
                alt=''
                width={20}
                height={20}
            />
            <div className={styles.body}>
                <p className={styles.content}>{content}</p>
                <div className={styles.info}>
                    <div className={styles.time}>{time}</div>
                    <Topic content={topic} />
                </div>
            </div>
        </div>
    )
}

export default Tape
