// import Image from 'next/image'
import styles from './page.module.css'
import TopBar from '@/component/TopBar'
import Banner from '@/component/Banner'
import Value from '@/component/Value'
import Benefits from '@/component/Benefits'
import Crowdfunding from '@/component/Crowdfunding'
import TextAnimation from '@/component/TextAnimation'
import Roadmap from '@/component/Roadmap'
import Teams from '@/component/Teams'
import IPNFT from '@/component/IPNFT'

export default function Home() {
    return (
        <main className={styles.main}>
            {/* <TopBar /> */}
            <Banner />
            <Value />
            <Benefits />
            <TextAnimation />
            <Roadmap />
            <Teams />
            <Crowdfunding />
            <IPNFT />
        </main>
    )
}
