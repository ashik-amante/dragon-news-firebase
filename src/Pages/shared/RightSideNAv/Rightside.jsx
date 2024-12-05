import { FaFacebook, FaGoogle, FaInstagram, FaX } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import qz1 from '../../../assets/playground.png'
import qz2 from '../../../assets/swimming.png'
import qz3 from '../../../assets/class.png'

const Rightside = () => {
    return (
        <div>
            <div className="p-4 space-y-2 mb-4">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Button
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Button

                </button>
            </div>
            <div className="p-4  mb-4">
                <h2 className="text-3xl mb-2">Find Us On</h2>
                <a className="flex p-4 items-center gap-6 border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    facebook
                </a>
                <a className="flex p-4 items-center gap-6 border-x " href="">
                    <FaX></FaX>
                    X.com
                </a>
                <a className="flex p-4 items-center gap-6 border rounded-b-lg" href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q zone  */}
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-2">Q Zone</h2>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
               
            </div>
        </div>
    );
};

export default Rightside;