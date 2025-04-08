import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="text">
                    <h1>ماذا تريد أن تتعلم ؟</h1>
                </div>

                <form action="" className="search-bar">
                    <input type="text" name="search" placeholder="بحث ..." />
                    <button className="search-btn" type="submit">بحث</button>
                </form>

                <div className="statistic">
                    <div className="box">
                        <i className="fa-solid fa-laptop"></i>
                        <div className="static">
                            <span>322</span>
                            <h2>دورة اون لاين</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <div className="static">
                            <span>322</span>
                            <h2>طالب</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-book"></i>
                        <div className="static">
                            <span>322</span>
                            <h2>درس اون لاين</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-clock"></i>
                        <div className="static">
                            <span>322</span>
                            <h2>ساعة تعليمية</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;