import Link from "next/link";
import Image from "next/image";
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Link href={"/"}>
                    <Image className={style.logoItem} src={"/logo.svg"} width={162} height={24} alt="Logo" priority />
                </Link>
            </div>
            <div className={style.title}>The first decentralized autonomous organization of the Open-source AI community</div>

            <div className={style.contact}>
                <div className={style.email}>contact@wowdao.ai</div>

                <div className={style.socials}>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/facebook.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/instagram.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/linkedin.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/twitter.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/tiktok.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/youtube.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/discord.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                    <Link href={'/'} className={style.socialItem}>
                        <Image className={style.socialItemImg} src={"/telegram.png"} width={24} height={24} alt="facebook" priority />
                    </Link>
                </div>

            </div>

            <div className={style.break}></div>
            <div className={style.policy}>Terms and Conditions / Privacy Policy</div>
        </div>
    )
}