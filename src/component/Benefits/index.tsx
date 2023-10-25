import Link from "next/link";
import Image from "next/image";
import style from './benefits.module.css'

export default function Benefits() {
    return (
        <div className={style.container}>
            <Image className={style.dots} src={"/dots.png"} width={720} height={326} alt="" priority />

            <div className={style.title}>
                <span className={style.titleText}>Benefits of <span className={style.titleTextBold}>WowDAO</span> <br /> Token Holders</span>
            </div>
            <div className={style.content}>
                <div className={style.contentCenter}>
                    <Image className={style.ellipseBig} src={"/ellipse-big.png"} width={890} height={284} alt="" priority />
                    {/* <Image className={style.ellipseSmallImg} src={"/ellipse-small.png"} width={450} height={144} alt="" priority />
                    <div className={style.contentTitle}>$Wow Token</div> */}

                </div>

                <div className={style.contentCenter}>
                    <Image className={style.ellipseSmallImg} src={"/ellipse-small.png"} width={450} height={144} alt="" priority />
                </div>

                <div className={style.contentCenter}>
                    <div className={style.contentTitle}>$Wow Token</div>
                </div>


                <div className={style.elementItem1}>
                    <Image className={style.elementItemImg} src={"/item-rocket.png"} width={24} height={24} alt="" priority />
                </div>
                <div className={style.elementTitle1}>Early access to AI startups</div>

                <div className={style.elementItem2}>
                    <Image className={style.elementItemImg} src={"/item-heart.png"} width={24} height={24} alt="" priority />
                </div>
                <div className={style.elementTitle2}>Rewards for engagement</div>

                <div className={style.elementItem3}>
                    <Image className={style.elementItemImg} src={"/item-interact.png"} width={24} height={24} alt="" priority />
                </div>
                <div className={style.elementTitle3}>Governance power</div>

                <div className={style.elementItem4}>
                    <Image className={style.elementItemImg} src={"/item-leaf.png"} width={24} height={24} alt="" priority />
                </div>
                <div className={style.elementTitle4}>Profit sharing</div>

                <div className={style.elementItem5}>
                    <Image className={style.elementItemImg} src={"/item-key.png"} width={24} height={24} alt="" priority />
                </div>
                <div className={style.elementTitle5}>Access to AI tools and IP pool of AI innovations</div>


                <div></div>
                <div className={style.ellipseBig}>
                </div>
                <div className={style.ellipseSmall}>
                </div>


            </div>
        </div>
    )
}