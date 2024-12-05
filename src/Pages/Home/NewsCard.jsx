import { Link } from "react-router-dom";



const NewsCard = ({ news }) => {
    const { title, author, thumbnail_url, image_url,details,_id } = news

    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>

                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    details.length > 200 ? <p> {details.slice(0,200)} <Link className="text-blue-600 font-bold" to={`/news/${_id}`}>Read More</Link> </p> : details
                }
                </p>

            </div>
        </div>
    );
};

export default NewsCard;