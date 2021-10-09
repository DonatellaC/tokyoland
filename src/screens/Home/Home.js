import React from 'react'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import TopSection from '../../components/TopSection/TopSection'

function Home() {
    return (
        <div>
            <Header />
            <TopSection />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home