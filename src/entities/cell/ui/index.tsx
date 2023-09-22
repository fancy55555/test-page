import React, { FC } from 'react'

import Image from 'next/image'

import styles from './styles.module.css'

import Topic from '@/shared/ui/topic/ui'

import { IItem } from '@/entities/articles/ui'

interface CellProps {
    item: IItem
}

const Cell: FC<CellProps> = ({ item }) => {
    return (
        <div className={styles.item}>
            <div className={styles.top}>
                {item.topic && <Topic content={item.topic} />}
                <span className={styles.time}>
                    {item.date}, {item.time}
                </span>
            </div>
            <p className={styles.content}>{item.content}</p>
            <div className={styles.bottom}>
                <div className={styles.reactions}>
                    {item.reactions.map((reaction) => {
                        return (
                            <div key={reaction.id} className={styles.reaction}>
                                <Image src={reaction.src} alt='' width={15} height={15} />
                                <span>{reaction.quantity}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.cell}>
                    <div className={styles.cell}>
                        <Image src='/images/vector/comments.svg' alt='' width={20} height={20} />
                        <span>{item.comments.length}</span>
                    </div>
                </div>
                <div className={styles.cell}>
                    <div className={styles.cell}>
                        <Image src='/images/vector/favourites.svg' alt='' width={20} height={20} />
                        <span>{item.favourites.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cell
