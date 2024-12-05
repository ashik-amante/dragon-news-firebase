import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Rightside from "../shared/RightSideNAv/Rightside";
import Navbar from "../shared/Navbar/Navbar";


const NewsDetail = () => {
    const {id} = useParams()
    return (
        <div>
           <Header></Header>
           <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-5xl ">News Details of </h1>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                <Rightside></Rightside>
                </div>
            </div>
            <h1>News details</h1>
        </div>
    );
};

export default NewsDetail;