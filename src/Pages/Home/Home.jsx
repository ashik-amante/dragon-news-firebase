
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSIde from '../shared/LeftSidenav/LeftSIde';
import Rightside from '../shared/RightSideNAv/Rightside';
import Breakingnews from './Breakingnews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>

            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-1 border"> <LeftSIde></LeftSIde> </div>
                <div className="text-2xl col-span-2 border ">
                    <h1 className='text-xl'>Dragon news home</h1>
                    <div>
                        {
                            news.map(anews=> <NewsCard key={anews._id} news={anews}></NewsCard>)
                        }
                    </div>
                </div>
                <div className="col-span-1 border"><Rightside></Rightside></div>

            </div>
        </div>
    );
};

export default Home;