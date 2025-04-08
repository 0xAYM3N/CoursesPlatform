import './TopCourses.css';

function TopCourses() {
    return (
        <div className="top-courses">
            <div className="container">
                <div className="top-title">
                    <h1>كورسات مميزة</h1>
                </div>

                <div className="boxses">
                    <div className="box">
                        <img src="/courses/img.png" />
                        <h1>Helllllo World</h1>
                    </div>
                    <div className="box">
                        <img src="/courses/image.png" />
                        <h1>Helllllo World</h1>
                    </div>
                    <div className="box">
                        <img src="/courses/img.png" />
                        <h1>Helllllo World</h1>
                    </div>
                    <div className="box">
                        <img src="/courses/img.png" />
                        <h1>Helllllo World</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCourses;