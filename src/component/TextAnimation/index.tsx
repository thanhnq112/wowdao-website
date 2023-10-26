import Image from "next/image";
import style from './textAnimation.module.css'
import { montserrat } from "@/utils/fonts";

export default function TextAnimation() {
    return (
        <div className={style.container}>

            {/* <div className={style.starElement}>
            </div> */}
            <div className={`${montserrat.className} ${style.text}`}>
                <Image className={style.starImg} src={"/blink.svg"} width={50} height={50} alt="" priority />
                Develop and launch an MVP that supports computer vision products Create a crawling tool that supports a variety of computer vision data formats Launch an MVP of the end-to-end platform that allows contestants to test the product and provide feedback.
            </div>
        </div>
    )
}