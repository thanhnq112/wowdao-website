import Link from "next/link";
import Image from "next/image";
import style from './roadmap.module.css'

export default function Roadmap() {
    const data = [
        {
            id: 0,
            title: 'Founding',
            time: 'Q4. 2023',
            content: [
                'Flagship Worldwide AI  Hackathon launch',
                'Hackathon platform built',
                'DAO core-members, advisors gatherred'
            ]
        },
        {
            id: 1,
            title: 'Founding',
            time: 'Q4. 2022',
            content: [
                'Flagship Worldwide AI  Hackathon launch',
                'Hackathon platform built',
                'DAO core-members, advisors gatherred'
            ]
        },
        {
            id: 2,
            title: 'DAO initial setup',
            time: 'Q1. 2023',
            content: [
                'Flagship Worldwide AI  Hackathon launch',
                'Hackathon platform built',
                'DAO core-members, advisors gatherred'
            ]
        },
        {
            id: 3,
            title: 'Token distribution',
            time: 'Q3. 2023',
            content: [
                'Flagship Worldwide AI  Hackathon launch',
                'Hackathon platform built',
                'DAO core-members, advisors gatherred'
            ]
        },
        {
            id: 4,
            title: 'DAO launch and grow',
            time: 'Q4. 2023',
            content: [
                'Flagship Worldwide AI  Hackathon launch',
                'Hackathon platform built',
                'DAO core-members, advisors gatherred'
            ]
        }
    ]

    return (
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    Roadmap
                </div>
                <div className={style.titleDes}>Technical Roadmap of the comprehensive AI platform</div>
            </div>

            <div className={style.mainContent}>
                {data.map((element) => {
                    return (
                        <div key={element.id} className={style.blockComponent}
                            style={{
                                left: `${element.id * 25}%`,
                                bottom: `${element.id % 2 ? 10 : 1}%`
                            }}
                        >
                            <div className={style.blockTimeline}>{element.time}</div>

                            <div className={style.blockTitle}>
                                <div className={style.lineConnect}></div>
                                <div className={style.circleBackdropBlur}></div>
                                <div className={style.circle}></div>

                                <span className={style.blockTitleText}>{element.title}</span>
                            </div>

                            <ul>
                                {element.content.map((textContent) => {
                                    return (
                                        <li key={textContent} className={style.blockDesText}>{textContent}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}



            </div>

            <div className={style.window}>
                <Image className={style.windowImg} src={"/window.svg"} width={720} height={326} alt="" priority />
            </div>
        </div>
    )
}