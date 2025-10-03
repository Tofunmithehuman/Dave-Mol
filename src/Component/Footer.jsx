import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <footer>
                <div className="max-w-screen-2xl m-auto px-4 sm:px-10 py-8">
                    <img src={Logo} alt="Dave Mol" className="w-14" />

                    <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between max-w-lg font-light mt-4">
                        <Link to='/' className="uppercase">Back to Home</Link>
                        <h1>VGC, Lekki <br />
                            Lagos, Nigeria</h1>
                        <h1>
                            <a href="tel:+2349034350247" className="hover:underline">(234) 9034350247</a>
                            <br />
                            <a href="mailto:davemolfashion@gmail.com" className="hover:underline">davemolfashion@gmail.com</a>
                        </h1>
                    </div>

                    <h1 className="font-thin text-xs mt-4 ">Made by <Link to="https://www.instagram.com/tofunmithehuman/" target="_blank">Tofunmithehuman</Link></h1>
                    <div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer