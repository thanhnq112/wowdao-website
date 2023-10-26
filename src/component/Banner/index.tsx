import Link from "next/link";
import Image from "next/image";
import style from './banner.module.css'
import { montserrat } from '@/utils/fonts'

export default function Banner() {
    return (
        <div className={style.container}>
            <Image className={style.gridBackground} src={"/banner-bg.png"} width={1440} height={744} alt="building" priority />

            <div className={style.image}>
                <Image className={style.imageBuilding} src={"/building.png"} width={1440} height={1000} alt="building" priority />
                {/* <Image className={style.lightEffect1} src={"/light-effect.png"} width={80} height={80} alt="light" priority />
                <Image className={style.lightEffect2} src={"/light-effect.png"} width={80} height={80} alt="light" priority />
                <Image className={style.lightEffect3} src={"/light-effect.png"} width={80} height={80} alt="light" priority />
                <Image className={style.lightEffect4} src={"/light-effect.png"} width={80} height={80} alt="light" priority />
                <Image className={style.lightEffect5} src={"/light-effect.png"} width={80} height={80} alt="light" priority /> */}
            </div>

            <div className={style.title}>
                <span className={`${montserrat.className} ${style.titleText}`}>The 1st DAO for the</span >
                <span className={`${montserrat.className} ${style.titleText}`}>open source AI community</span>
            </div>

            <div className={style.info}>
                <Link href={'/'} className={style.btn}>
                    <div className={style.btnStar}>
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4011 16.9046C16.6197 16.8049 16.7951 16.6298 16.8952 16.4114L17.0873 15.9921C17.4443 15.2129 18.5521 15.2145 18.9067 15.9948L19.0948 16.4086C19.1949 16.6287 19.3713 16.8051 19.5914 16.9052L20.0052 17.0933C20.7855 17.4479 20.7871 18.5557 20.0079 18.9127L19.5886 19.1048C19.3702 19.2049 19.1951 19.3803 19.0954 19.5989L18.9062 20.0137C18.551 20.7923 17.4454 20.794 17.0878 20.0164L16.8946 19.5962C16.7948 19.3792 16.6208 19.2052 16.4038 19.1054L15.9836 18.9122C15.206 18.5546 15.2077 17.449 15.9863 17.0938L16.4011 16.9046Z" fill="white" />
                            <path d="M6.5111 9.02961C6.7297 8.92988 6.90508 8.75479 7.00516 8.53635L9.08726 3.99209C9.44429 3.21286 10.5521 3.21453 10.9067 3.99483L12.9698 8.53361C13.0699 8.75372 13.2463 8.93013 13.4664 9.03018L18.0052 11.0933C18.7855 11.4479 18.7871 12.5557 18.0079 12.9127L13.4636 14.9948C13.2452 15.0949 13.0701 15.2703 12.9704 15.4889L10.9062 20.0137C10.551 20.7923 9.4454 20.794 9.08784 20.0164L7.00458 15.4862C6.90483 15.2692 6.73076 15.0952 6.51384 14.9954L1.98359 12.9122C1.20603 12.5546 1.2077 11.449 1.98634 11.0938L6.5111 9.02961Z" fill="white" />
                            <path d="M19.7711 4.27961C19.9897 4.17988 20.1651 4.00479 20.2652 3.78635L21.0873 1.99209C21.4443 1.21286 22.5521 1.21453 22.9067 1.99483L23.7198 3.78361C23.8199 4.00372 23.9963 4.18013 24.2164 4.28018L26.0052 5.09326C26.7855 5.44794 26.7871 6.55571 26.0079 6.91274L24.2136 7.73484C23.9952 7.83492 23.8201 8.0103 23.7204 8.2289L22.9062 10.0137C22.551 10.7923 21.4454 10.794 21.0878 10.0164L20.2646 8.22616C20.1648 8.00924 19.9908 7.83517 19.7738 7.73542L17.9836 6.91216C17.206 6.5546 17.2077 5.44904 17.9863 5.09383L19.7711 4.27961Z" fill="white" />
                        </svg>

                    </div>
                    <div className={style.btnText}>Join Us</div>
                </Link>

                {/* <div className={style.social}>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className='' src={"/facebook.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className='' src={"/discord.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className='' src={"/linkedin.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className='' src={"/twitter.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                </div> */}
            </div>

        </div>
    )
}