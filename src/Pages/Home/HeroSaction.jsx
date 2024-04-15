export default function HeroSaction(){
    return (
    <section id="herosaction" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Tasnim</p>
                <h1 className="hero--section--title">
                Front-End Developer &
                    <span className="hero--section--title--color"> UI/UX Designer</span>{" "}
                    <br/>
                </h1>
                {/* <p className="hero--section--description">
                    ttt
                    <br/>
                    ttt
                </p> */}
            </div>
            <button className="btn btn-primary">Downliad Cv</button>
        </div>
        <div className="hero--section--img">
        <img src="./img/IMG_2719.PNG" alt="Hero Section" />
      </div>
    </section>
    );
}