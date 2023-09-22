import React, { FC } from 'react'

import styles from './styles.module.css'

interface TopicProps {
    content: string
}

const Topic: FC<TopicProps> = ({ content }) => {
    return <div className={styles.topic}>{content}</div>
}

export default Topic
