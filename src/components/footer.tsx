import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="w-full h-[800px]">

            <div className="flex flex-col items-center mx-auto bg-carrot py-[55px] text-white w-[75%] rounded-md transform translate-y-[80px] relative z-10">
                <p className="text-[18px]">Newsletter</p>
                <h1 className="mb-16 max-md:text-[24px] max-md:mb-5">Subscribe To Our NewsLetter</h1>
                <p className="text-[14px]">And never miss latest Updates!</p>

                <div className="flex justify-center mt-5 w-8/12 bg-blue-400 max-md:w-10/12 max-sm:flex-col">
                    <input className="bg-carrot w-full border text-[20px] text-white placeholder-white px-[10px] border-white outline-none"
                        type="text"
                        placeholder="email address"
                    />
                    <button className="bg-white text-carrot text-[24px] px-3">Subscribe</button>
                </div>
            </div>

            <div className="bg-yellow pt-[250px] pb-[10px] flex max-xl:flex-col max-xl:items-center">

                <div className="w-4/12 flex flex-col items-center text-center">
                    <h2 className="text-[26px] mb-5">Contacts Us</h2>

                    <p className="text-[16px] max-xl:mb-5">9 W 53rd st, New York, NY 10019, USA</p>
                    <p className="text-[16px] ">+254 12-344-1230</p>
                    <p className="text-[16px] leading-tight">+1 212-555-1230</p>
                </div>

                <div className="w-4/12 flex flex-col items-center max-xl:mt-20 max-xl:w-full">
                    <h1 className="font-bold tracking-widest text-[42px]">TASTEBITE</h1>
                    <p className="text-[16px] py-[50px] max-xl:text-center">* a unique recipe sharing and discovery platform*</p>
                </div>

                <div className="w-4/12 flex flex-col  pl-[180px] max-xl:pl-0 max-xl:items-center max-xl:mt-7">

                    <h2 className="text-[26px] mb-5">Follow Us</h2>


                    <Link to={'/'} className="flex items-center">
                        <TiSocialFacebook className="text-[28px] mr-2" />
                        <p className="text-[16px]">Facebook</p>
                    </Link>

                    <Link to={'/'} className="flex items-center w-fit">
                        <TiSocialTwitter className="text-[28px] mr-2" />
                        <p className="text-[16px]">Twitter</p>
                    </Link>

                    <Link to={'/'} className="flex items-center w-fit">
                        <RxInstagramLogo className="text-[28px] mr-2" />
                        <p className="text-[16px]">Instagram</p>
                    </Link>

                </div>

            </div>

            <div className="text-center bg-yellow pb-[120px] max-xl:pb-[70px] max-xl:pt-10">
                <p className="text-[16px]">2024 Tastebite. All Rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer;
