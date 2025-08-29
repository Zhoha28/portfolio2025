import About from '@components/sections/about'
import Hero from '@components/sections/hero'
import Portfolio from '@components/sections/portfolio'
import Resume from '@components/sections/resume'

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Resume />
            <Portfolio />
        </main>
    )
}

export default Home