import Link from "next/link";
import Image from "next/image";
import style from './roadmap.module.css'
import { dataRoadmap } from '../../utils/Data/dataRoadmap'


export default function Roadmap() {

    return (
        <div className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    Roadmap
                </div>
                <div className={style.titleDes}>Technical Roadmap of the comprehensive AI platform</div>
            </div>

            <div className={style.mainContent}>
                {dataRoadmap.map((element) => {
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