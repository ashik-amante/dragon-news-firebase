import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { SlCalender } from "react-icons/sl";


const LeftSIde = () => {
    const [categories,setCategory] = useState([])
    const [allNews,setAllnews] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setAllnews(data))
    },[])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div>
            <h2 className="text-xl"> All Category </h2>
            <div className="p-4 ">
                {
                    categories.map(category=> <Link className="font-semiboldbold " to={`/category/${category.id}`} key={category.id}>
                        <ul className="p-2 hover:bg-gray-300 mb-4 hover:text-black hover:font-bold hover:text-xl text-center hover:rounded"> <li>{category.name}</li> </ul>
                    </Link> )
                }
            </div>
            <h1 className="text-center mb-4 text-xl">All News</h1>
            <div>
                {
                    allNews.slice(0,3).map(news=> <div className=" mb-4 space-y-3" key={news._id}>
                        <img className="rounded-lg" src={news.image_url} alt="" />
                        <h1>{news.title}</h1>
                        <div className="flex gap-4">
                            <p>Sports</p>
                            <div className="flex gap-2 items-center">
                                <span><SlCalender /></span>
                                <p>{ moment(news.author.published_date).format("MMMM D, YYYY") }</p>
                            </div>
                        </div>
                    </div>  )
                }
            </div>
        </div>
    );
};

export default LeftSIde;