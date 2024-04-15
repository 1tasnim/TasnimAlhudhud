import HeroSaction from "../HeroSaction";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home(){
    return(
        <>
        <HeroSaction />
        <MySkills/>
        <MyPortfolio/>
        <ContactMe/>
        <Footer/>
        </>
    );
}