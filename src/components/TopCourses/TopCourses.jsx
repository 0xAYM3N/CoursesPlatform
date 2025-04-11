import { Link } from 'react-router-dom';
import './TopCourses.css';

function TopCourses() {
    return (
        <div className="top-courses">
            <div className="container">
                <div className="top-title">
                    <h1>كورسات مميزة</h1>
                </div>

                <div className="boxses">
                    <div class="box">
                        <img src="/courses/image.png" />
                        <h3 class="title">السلام عليكم</h3>
                        <div className="btn">
                            <a href="">عرض قائمة التشغيل</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src="/courses/image.png" />
                        <h3 class="title">السلام عليكم</h3>
                        <div className="btn">
                            <a href="">عرض قائمة التشغيل</a>
                        </div>
                    </div>
                    <div class="box">
                        <img src="/courses/image.png" />
                        <h3 class="title">السلام عليكم</h3>
                        <div className="btn">
                            <a href="">عرض قائمة التشغيل</a>
                        </div>
                    </div>
                </div>

                <div className="show-all">
                    <Link to="/AllCategories">عرض جميع الكورسات</Link>
                </div>
            </div>
        </div>
    )
}

export default TopCourses;