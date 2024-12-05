import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";


const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get( 'name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password,name,photo);
        // create user
        createUser(email,password)
        .then(result=> console.log(result.user))
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>

                <h1 className="text-5xl font-bold text-center mt-10">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center te">Already  have an account ? <Link className="text-blue-700 font-bold" to='/login'>Log In</Link> </p>
            </div>
        </div>
    );
};

export default Register;