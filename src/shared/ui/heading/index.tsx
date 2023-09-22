import React, { FC } from 'react'

import styles from './styles.module.css'

interface HeadingProps {
    priority: number
    content: string
}

const Heading: FC<HeadingProps> = ({ priority, content }) => {
    const Tag = `h${priority}` as keyof JSX.IntrinsicElements

    return <Tag className={styles.heading}>{content}</Tag>
}

export default Heading
