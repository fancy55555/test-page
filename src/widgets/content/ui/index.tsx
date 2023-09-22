import React from 'react'

import styles from './styles.module.css'

import Tape from '@/entities/tape/ui'
import Articles from '@/entities/articles/ui'
import Incidents from '@/entities/incidents/ui'
import Ad from '@/entities/ad/ui'

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.block}>
                <Tape />
                <Ad />
            </div>
            <Articles />
            <Incidents />
        </div>
    )
}

export default Content
