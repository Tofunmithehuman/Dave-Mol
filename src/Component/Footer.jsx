import Logo from "../assets/Logo.png"

const Footer = () => {
    return (
        <div className="Footer">
            <footer>
                <div className="max-w-screen-2xl m-auto px-4 sm:px-10 py-8">
                    <img src={Logo} alt="Dave Mol" className="w-14" />

                    <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between max-w-sm font-light mt-4">
                        <h1>123, Lekki Street <br />
                            Lagos, Nigeria</h1>
                        <h1>(555) 555-5555 <br />email@example.com</h1>
                    </div>

                    <h1 className="font-thin text-xs mt-4 ">Made by Tofunmithehuman</h1>
                    <div>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer