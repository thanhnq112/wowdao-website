import Link from "next/link";
import Image from "next/image";
import style from './crowdfunding.module.css'

export default function Crowdfunding() {

    const data = [
        {
            step: 1,
            description: 'Propose projects to be listed'
        },
        {
            step: 2,
            description: 'Wait to be vested'
        },
        {
            step: 3,
            description: 'Sell IP-NFT to raise funds'
        },
        {
            step: 4,
            description: 'Get support from the whole AI community'
        },
        {
            step: 5,
            description: 'Build cutting edge AI products'
        }
    ]

    return (
        <div className={style.container}>
            <Image className={style.dots} src={"/dots.png"} width={720} height={326} alt="" priority />

            <div className={style.title}>
                <div className={style.titleMain}>
                    Crowdfunding platform
                </div>
                <div className={style.titleDes}>Success through crowdfunding: Strong community connection and support shaping the future.</div>
            </div>

            <div className={style.mainComponent}>
                <Image className={style.contentImg} src={"/bg-content.png"} width={1440} height={932} alt="" priority />

                <div className={style.left}>
                    <div className={style.leftText}>AI startups</div>
                    <div className={style.leftLineDecorTop}>
                        <Image className={style.leftLineDecorTopImg} src={"/line-border.png"} width={1440} height={932} alt="" priority />
                    </div>
                    <div className={style.leftLineDecorBottom}>
                        <Image className={style.leftLineDecorBottomImg} src={"/line-border.png"} width={1440} height={932} alt="" priority />
                    </div>

                    <div className={style.leftItemTop}>
                        <Image className={style.itemImgGradientBg} src={"/hexagon-bg-gradient.png"} width={50} height={50} alt="" priority loading="eager" />
                        <Image className={style.itemImgWhiteBg} src={"/hexagon-bg-white.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhite} src={"/hexagon-child.png"} width={50} height={50} alt="" priority />
                        <div className={style.itemBlurBg}></div>
                        <Image className={style.itemImgElement} src={"/item-rocket.png"} width={50} height={50} alt="" priority />
                        <span className={style.itemDescription}>For AI startups</span>
                    </div>

                    <div className={style.leftItemBottom}>
                        <Image className={style.itemImgGradientBg} src={"/hexagon-bg-gradient.png"} width={50} height={50} alt="" priority loading="eager" />
                        <Image className={style.itemImgWhiteBg} src={"/hexagon-bg-white.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhite} src={"/hexagon-child.png"} width={50} height={50} alt="" priority />
                        <div className={style.itemBlurBg}></div>
                        <Image className={style.itemImgElement} src={"/item-investment.svg"} width={50} height={50} alt="" priority />
                        <span className={style.itemDescription}>For investors</span>

                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.rightText}>Hackathons</div>
                    <div className={style.rightLineDecorTop}>
                        <Image className={style.rightLineDecorTopImg} src={"/line-border.png"} width={1440} height={932} alt="" priority />
                    </div>
                    <div className={style.rightLineDecorBottom}>
                        <Image className={style.rightLineDecorBottomImg} src={"/line-border.png"} width={1440} height={932} alt="" priority />
                    </div>

                    <div className={style.rightItemTop}>
                        <Image className={style.itemImgGradientBg} src={"/hexagon-bg-gradient.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhiteBg} src={"/hexagon-bg-white.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhite} src={"/hexagon-child.png"} width={50} height={50} alt="" priority />
                        <div className={style.itemBlurBg}></div>
                        <Image className={style.itemImgElement} src={"/item-organization.svg"} width={50} height={50} alt="" priority />
                        <span className={style.itemDescription}>For enterprises/ organizations</span>
                    </div>

                    <div className={style.rightItemBottom}>
                        <Image className={style.itemImgGradientBg} src={"/hexagon-bg-gradient.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhiteBg} src={"/hexagon-bg-white.png"} width={50} height={50} alt="" priority />
                        <Image className={style.itemImgWhite} src={"/hexagon-child.png"} width={50} height={50} alt="" priority />
                        <div className={style.itemBlurBg}></div>
                        <Image className={style.itemImgElement} src={"/item-database.svg"} width={50} height={50} alt="" priority />
                        <span className={style.itemDescription}>For AI enthusiasts/ Data scientists</span>
                    </div>
                </div>

                <div className={style.center}>
                    <div className={style.centerTitle}>For AI startups</div>
                    <div className={style.centerContent}>
                        {data.map((element) => {
                            const len = data.length
                            if (element.step % 2) {
                                return (
                                    <div key={element.step} className={style.contentBlockBottom} style={{ left: `${20 * (element.step - 1)}%`, width: `${100 / len}%` }}>
                                        <span className={style.contentNumber}>Step 0{element.step}</span>
                                        <span className={style.contentDescription}>{element.description}</span>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div key={element.step} className={style.contentBlockTop} style={{ left: `${20 * (element.step - 1)}%`, width: `${100 / len}%` }}>
                                        <span className={style.contentDescription}>{element.description}</span>
                                        <span className={style.contentNumber}>Step 0{element.step}</span>

                                    </div>
                                )
                            }

                        })}

                        <div className={style.centerLine}></div>
                    </div>
                </div>

                <div className={style.bottom}>
                    <div className={style.bottomEllipse}>
                        <Image className={style.bottomEllipseImg} src={"/ellipse.png"} width={1440} height={932} alt="" priority />
                        <span className={style.bottomTitle}>AI Startups</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

