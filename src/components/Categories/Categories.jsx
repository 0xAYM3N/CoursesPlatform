import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
    return (
        <div className="categories">
            <div className="container">
                <div className="top-title">
                    <h1>تصنيفات الكورسات</h1>
                </div>

                <div className="boxses">
                    <div className="box">
                        <i className="fa-solid fa-code"></i>
                        <div className="static">
                            <h2>برمجة</h2>
                        </div>
                    </div>
                    
                    <div className="box">
                        <i className="fa-solid fa-laptop"></i>
                        <div className="static">
                            <h2>أنظمة التشغيل</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-database"></i>
                        <div className="static">
                            <h2>قواعد البيانات</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-user-secret"></i>
                        <div className="static">
                            <h2>أمن المعلومات</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-code"></i>
                        <div className="static">
                            <h2>برمجة</h2>
                        </div>
                    </div>
                    
                    <div className="box">
                        <i className="fa-solid fa-laptop"></i>
                        <div className="static">
                            <h2>أنظمة التشغيل</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-database"></i>
                        <div className="static">
                            <h2>قواعد البيانات</h2>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fa-solid fa-user-secret"></i>
                        <div className="static">
                            <h2>أمن المعلومات</h2>
                        </div>
                    </div>
                </div>

                <div className="show-all">
                    <Link to="/AllCategories">عرض جميع التصنيفات</Link>
                </div>
            </div>
        </div>
    )
}

export default Categories;

