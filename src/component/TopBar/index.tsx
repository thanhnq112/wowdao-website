import Link from "next/link";
import Image from "next/image";
import style from './topBar.module.css'

export default function TopBar() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <Link href={"/"}>
                    <Image className={style.leftLogo} src={"/logo.svg"} width={162} height={24} alt="Logo" priority />
                </Link>
            </div>

            <div className={style.function}>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Organization</div>
                    <Image className={style.downItem} src={"/arrow.png"} width={14} height={14} alt="" priority />
                </div>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Product</div>
                    <Image className={style.downItem} src={"/arrow.png"} width={14} height={14} alt="" priority />
                </div>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Jobs</div>
                    <Image className={style.downItem} src={"/arrow.png"} width={14} height={14} alt="" priority />
                </div>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Community</div>
                    <Image className={style.downItem} src={"/arrow.png"} width={14} height={14} alt="" priority />
                </div>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Wow Token</div>
                </div>
                <div className={style.functionTitle}>
                    <div className={style.functionTitleText}>Event</div>
                </div>
            </div>

            <div className={style.right}>
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

                <div className={style.modeChange}>
                    <svg className={style.modeChangeItem} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7625 11.0477C21.7625 13.3841 20.8343 15.6248 19.1822 17.2769C17.5301 18.929 15.2894 19.8572 12.9529 19.8572V21.2858C18.6072 21.2858 23.191 16.702 23.191 11.0477H21.7625ZM12.9529 19.8572C10.6165 19.8572 8.37577 18.929 6.72367 17.2769C5.07156 15.6248 4.14342 13.3841 4.14342 11.0477H2.71484C2.71484 16.702 7.29865 21.2858 12.9529 21.2858V19.8572ZM4.14342 11.0477C4.14342 8.71123 5.07156 6.4705 6.72367 4.81839C8.37577 3.16629 10.6165 2.23814 12.9529 2.23814V0.80957C7.29865 0.80957 2.71484 5.39338 2.71484 11.0477H4.14342ZM16.2863 13.1905C14.8339 13.1905 13.441 12.6136 12.414 11.5866C11.387 10.5596 10.8101 9.16671 10.8101 7.71433H9.38151C9.38151 9.54559 10.109 11.3018 11.4039 12.5967C12.6988 13.8916 14.455 14.6191 16.2863 14.6191V13.1905ZM20.9767 10.542C20.4897 11.3504 19.8018 12.0192 18.98 12.4833C18.1581 12.9474 17.2301 13.191 16.2863 13.1905V14.6191C17.4762 14.6197 18.6461 14.3127 19.6824 13.7278C20.7187 13.1429 21.5861 12.3 22.2006 11.281L20.9767 10.542ZM10.8101 7.71433C10.8097 6.77049 11.0533 5.84258 11.5174 5.02072C11.9815 4.19886 12.6502 3.51097 13.4587 3.02386L12.7196 1.801C11.7006 2.41528 10.8578 3.28257 10.2729 4.31868C9.68802 5.3548 9.38095 6.52453 9.38151 7.71433H10.8101ZM12.9529 2.23814C12.8564 2.23586 12.7646 2.19546 12.6977 2.12576C12.6568 2.08598 12.6295 2.03433 12.6196 1.97814C12.6158 1.94862 12.6177 1.8629 12.7196 1.801L13.4587 3.02386C13.9377 2.73433 14.092 2.20386 14.0358 1.78671C13.9767 1.35338 13.6358 0.80957 12.9529 0.80957V2.23814ZM22.2006 11.281C22.1377 11.3829 22.052 11.3848 22.0225 11.381C21.9663 11.3711 21.9146 11.3438 21.8748 11.3029C21.8051 11.236 21.7647 11.1442 21.7625 11.0477H23.191C23.191 10.3648 22.6472 10.0239 22.2139 9.96481C21.7967 9.90862 21.2663 10.0629 20.9767 10.542L22.2006 11.281Z" fill="white" />
                    </svg>

                </div>
            </div>
        </div>
    )
}