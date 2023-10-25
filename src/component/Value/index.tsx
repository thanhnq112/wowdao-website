import Image from 'next/image'
import style from './value.module.css'

export default function Value() {
    return (
        <div className={style.container}>
            <Image className={style.dots} src={"/dots.png"} width={720} height={326} alt="" priority />

            <div className={style.title}>
                <div className={style.titleMain}>WowDAO value propositions</div>
                <div className={style.titleDes}>Creating a member-controlled AI ecosystem with expert support, merit-based governance, IP protection, and blockchain decentralization.</div>
            </div>

            <div className={style.content}>
                <Image className={style.valueLine} src={"/value-line.png"} width={720} height={144} alt="" priority />
                <div className={style.element}>
                    <div className={style.elementItem1}>
                        <Image className={style.elementItemImg} src={"/item-leaf.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle1}>A Comprehensive sticky AI cosystem</div>

                    <div className={style.elementItem2}>
                        <Image className={style.elementItemImg} src={"/item-puzzle.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle2}>Seamless comprehensive platform</div>

                    <div className={style.elementItem3}>
                        <Image className={style.elementItemImg} src={"/item-brain.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle3}>Renowned AI thought leaders (exc levels)</div>

                    <div className={style.elementItem4}>
                        <Image className={style.elementItemImg} src={"/item-balance.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle4}>Merit-based ownership and governance</div>

                    <div className={style.elementItem5}>
                        <Image className={style.elementItemImg} src={"/item-lock.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle5}>IP safeguards</div>

                    <div className={style.elementItem6}>
                        <Image className={style.elementItemImg} src={"/item-network.png"} width={24} height={24} alt="" priority />
                    </div>
                    <div className={style.elementTitle6}>Decentralize AI development</div>
                </div>
            </div>
        </div>
    )
}