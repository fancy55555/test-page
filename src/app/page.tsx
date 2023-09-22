import Header from '@/widgets/header/ui'
import Main from '@/widgets/main/ui'
import Footer from '@/widgets/footer/ui'

export default function Home() {
    return (
        <div className='wrapper'>
            <div>
                <Header />
                <Main />
            </div>
            <Footer />
        </div>
    )
}
