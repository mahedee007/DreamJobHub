import Banner from "../Banner/Banner";
import Categories from "../Catagories/Categories";
import Jobs from "../Jobs/Jobs";

import Section from "../Section/Section";

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <Section title={'Job Category List'} subTitle={"Explore thousands of job opportunities with all the information you need. Its your future"}/>
            <Categories/>
            <Section title={'Featured Jobs'} subTitle={'Explore thousands of job opportunities with all the information you need. Its your future'}/>
            <Jobs/>
        </div>
    );
};

export default Home;