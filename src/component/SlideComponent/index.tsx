import Image from "next/image";
import style from './slideComponent.module.css'
import { dataTeams } from '../../utils/Data/dataTeams'


type SlideComponentProps = {
    slotInSlide: number;
    index: number;
}

export default function SlideComponent(props: SlideComponentProps) {
    // console.log(dataTeams);
    // console.log(props.slotInSlide);
    // console.log(props.index);
    // console.log('check');

    const elementsArray1 = dataTeams.slice(props.index, props.index + props.slotInSlide / 2)
    const elementsArray2 = dataTeams.slice(props.index + props.slotInSlide / 2, props.index + props.slotInSlide)
    // console.log(elementsArray);



    return (
        <div className={style.container}>
            <div className={style.row}>
                {elementsArray1.map((e, index) => {
                    return (
                        <div className={style.blockContent} key={index}>

                            <div className={style.avatarBg}>
                                <Image className={style.frameBg} src={'/avatar-bg.png'} width={720} height={326} alt="" priority />
                            </div>
                            <div className={style.avatar}>
                                <Image className={style.avatarImg} src={e.image} width={720} height={326} alt="" priority />
                            </div>

                            <span className={style.name}>{e.name}</span>
                            <span className={style.description}>{e.description}</span>
                        </div>
                    )
                })}
            </div>
            <div className={style.row}>
                {elementsArray2.map((e, index) => {
                    return (
                        <div className={style.blockContent} key={index}>

                            <div className={style.avatarBg}>
                                <Image className={style.frameBg} src={'/avatar-bg.png'} width={720} height={326} alt="" priority />
                            </div>
                            <div className={style.avatar}>
                                <Image className={style.avatarImg} src={e.image} width={720} height={326} alt="" priority />
                            </div>

                            <span className={style.name}>{e.name}</span>
                            <span className={style.description}>{e.description}</span>
                        </div>
                    )
                })}
            </div>

            {/* <svg className={style.frame} viewBox="0 0 162 159" xmlns="http://www.w3.org/2000/svg">
                <path id="frame" d="M30.3212 145.09C50.789 160.32 76.367 159.086 80.6841 158.816C90.8865 158.176 107.1 157.167 117.14 145.721C124.531 137.3 122.377 130.302 130.407 119.485C139.276 107.561 148.054 108.858 154.318 101.977C169.044 85.766 160.257 38.8795 131.669 16.0937C99.6288 -9.44804 41.9295 -5.28716 14.3417 33.6018C-11.8852 70.5634 0.471172 122.872 30.3212 145.09Z" fill="white">
                </path>
            </svg> */}

            <svg className={style.frame} viewBox="0 0 162 159" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="frame" clipPathUnits="objectBoundingBox" transform="scale(0.0062)">
                    <path d="M30.3212 145.09C50.789 160.32 76.367 159.086 80.6841 158.816C90.8865 158.176 107.1 157.167 117.14 145.721C124.531 137.3 122.377 130.302 130.407 119.485C139.276 107.561 148.054 108.858 154.318 101.977C169.044 85.766 160.257 38.8795 131.669 16.0937C99.6288 -9.44804 41.9295 -5.28716 14.3417 33.6018C-11.8852 70.5634 0.471172 122.872 30.3212 145.09Z" fill="white">
                    </path>
                </clipPath>
            </svg>
        </div>
    )
}
