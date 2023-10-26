import Image from "next/image";
import style from './ipnft.module.css'

export default function IPNFT() {
    return (
        <div className={style.container}>
            <Image className={style.dots} src={"/dots.png"} width={720} height={326} alt="" priority />

            <div className={style.title}>
                <div className={style.titleMain}>IP-NFTs pool for AI innovations</div>
                {/* <div className={style.titleDes}>Creating a member-controlled AI ecosystem with expert support, merit-based governance, IP protection, and blockchain decentralization.</div> */}
            </div>

            <div className={style.mainContent}>
                <div className={style.earth}>
                    <Image className={style.earthImg} src={"/earth.png"} width={720} height={326} alt="" priority />
                    <Image className={style.earthMiniImg} src={"/earth-mini.png"} width={720} height={326} alt="" priority />
                    <span className={style.earthText}>AI Patent Pool</span>
                </div>

                <div className={style.contentLeft}>
                    <div className={style.content}>
                        <div className={style.mainElement}>
                            <div className={style.mainElementBg}></div>
                            <span className={style.mainElementText}>AI innovators &#40;licensor&#41;</span>
                        </div>
                    </div>

                    <div className={style.interact}>
                        <div className={style.arrowComponent}>
                            <Image className={style.arrowImg} src={"/arrow-black-right.svg"} width={720} height={326} alt="" priority />
                            <Image className={style.arrowImg} src={"/arrow-blue-left.svg"} width={720} height={326} alt="" priority />
                        </div>

                        <div className={style.description}>IP-NFT &#40;license of trade secrets, copyrights or patent&#41;</div>

                        <div className={style.funds}>
                            <Image className={style.fundsImg} src={"/item-funds.svg"} width={720} height={326} alt="" priority />
                            <span className={style.fundsText}>Funds</span>
                        </div>

                    </div>
                </div>

                <div className={style.contentRight}>
                    <div className={style.interact}>
                        <div className={style.arrowComponent}>
                            <Image className={style.arrowImg} src={"/arrow-black-right.svg"} width={720} height={326} alt="" priority />
                            <Image className={style.arrowImg} src={"/arrow-blue-left.svg"} width={720} height={326} alt="" priority />
                        </div>

                        <div className={style.description}>IP-NFT &#40;license of trade secrets, copyrights or patent&#41;</div>

                        <div className={style.funds}>
                            <Image className={style.fundsImg} src={"/item-funds.svg"} width={720} height={326} alt="" priority />
                            <span className={style.fundsText}>Funds</span>
                        </div>

                    </div>

                    <div className={style.content}>
                        <div className={style.mainElement}>
                            <div className={style.mainElementBg}></div>
                            <span className={style.mainElementText}>Enterprices</span>
                        </div>
                    </div>
                </div>

                <div className={style.contentCenter}>
                    <div className={style.arrow2way}>
                        <Image className={style.arrow2wayImg} src={"/arrow-2way.svg"} width={720} height={326} alt="" priority />
                    </div>

                    <span className={style.descToArrow}>Access</span>
                    <div className={style.contentCenterMain}>
                        <div className={style.mainElement}>
                            <div className={style.mainElementBg}></div>
                            <span className={style.mainElementText}>DAO members</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}