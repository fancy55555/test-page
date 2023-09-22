import React from 'react'

import styles from './styles.module.css'

import Navbar from '@/widgets/navbar/ui'
import Content from '@/widgets/content/ui'

const Main = () => {
    return (
        <main className={styles.main}>
            <Navbar />
            <Content />
        </main>
    )
}

export default Main
