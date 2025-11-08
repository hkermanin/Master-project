import { useParams } from 'react-router-dom';


const CourseDetail = () => {
    const { courseId } = useParams(); 

    // 💡 اطلاعات تستی دوره (در پروژه واقعی، اینجا درخواست HTTP برای دریافت جزئیات دوره زده می‌شود)
    const course = {
        id: courseId,
        title: "آموزش جامع React و Next.js 14 پروژه محور",
        description: "یادگیری کامل فریم‌ورک‌های مدرن فرانت‌اند، از مفاهیم پایه تا ساخت پروژه‌های حرفه‌ای و آماده برای بازار کار. تمرکز بر روی Hooks، State Management و SSR.",
        price: 990000,
        instructor: "علی احمدی",
        rating: 4.8,
        duration: "30 ساعت",
        sections: [
            { id: 1, title: "مقدمه و نصب ابزارها", lessons: 5, duration: "1 ساعت" },
            { id: 2, title: "مبانی React و JSX", lessons: 10, duration: "3 ساعت" },
            { id: 3, title: "React Hooks پیشرفته و State Management", lessons: 15, duration: "5 ساعت" },
            { id: 4, title: "شروع کار با Next.js و Routing", lessons: 8, duration: "4 ساعت" },
        ],
        students: 1500,
    };

    const handleAddToCart = () => {
        // اینجا منطق افزودن به سبد خرید پیاده‌سازی می‌شود
        alert(`دوره "${course.title}" به سبد خرید اضافه شد.`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            
            <main className="flex-grow max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                
                {/* اطلاعات اصلی دوره (بخش معرفی) */}
                <header className="mb-8 p-6 bg-white rounded-lg shadow-md border-r-4 border-blue-600">
                    <p className="text-sm font-medium text-blue-600">{course.instructor} • آموزشگاه آنلاین</p>
                    <h1 className="text-4xl font-extrabold text-gray-900 mt-2">{course.title}</h1>
                    <p className="mt-4 text-xl text-gray-600">{course.description}</p>
                    
                    <div className="mt-4 flex items-center space-x-6 space-x-reverse text-gray-500">
                        <span className="flex items-center">
                            ⭐️ **{course.rating}** ({course.students} دانشجو)
                        </span>
                        <span>
                            ⏰ {course.duration} آموزش ویدیویی
                        </span>
                    </div>
                </header>

                {/* Grid اصلی: محتوای دوره (چپ) و کارت خرید (راست) */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    
                    {/* ستون اصلی: سرفصل‌ها و توضیحات */}
                    <div className="lg:col-span-2">
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">سرفصل‌های دوره</h2>
                        
                        {/* لیست سرفصل‌ها (Accordion) */}
                        <div className="space-y-4">
                            {course.sections.map((section, index) => (
                                <details 
                                    key={section.id}
                                    className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100 transition duration-150 ease-in-out border border-gray-200"
                                    open={index === 0} 
                                >
                                    <summary className="flex justify-between items-center text-lg font-medium text-gray-900">
                                        <span>{index + 1}. {section.title}</span>
                                        <span className="text-sm text-gray-500 mr-2">
                                            {section.lessons} درس | {section.duration}
                                        </span>
                                    </summary>
                                    <div className="mt-2 pr-4 text-gray-600 border-r-2 border-blue-200 text-sm">
                                        در این بخش به صورت کامل ... (جزئیات دروس)
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* ستون کناری (Sidebar): کارت خرید چسبنده */}
                    <div className="lg:col-span-1 mt-10 lg:mt-0 lg:sticky lg:top-8 self-start">
                        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                            
                            {/* ویدیو یا تصویر کاور */}
                            <div className="h-48 w-full bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500 overflow-hidden">
                                <img src="" alt="Video Preview" className="w-full h-full object-cover" />
                            </div>

                            {/* قیمت */}
                            <div className="text-center mb-6 border-b pb-4">
                                <span className="text-4xl font-extrabold text-green-600">
                                    {new Intl.NumberFormat('fa-IR').format(course.price)}
                                </span>
                                <span className="text-xl font-medium text-gray-500 mr-1">تومان</span>
                            </div>

                            {/* دکمه خرید */}
                            <button
                                onClick={handleAddToCart}
                                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                افزودن به سبد خرید
                            </button>
                            
                            {/* ضمانت و اطلاعات اضافی */}
                            <ul className="mt-4 space-y-2 text-sm text-gray-600 pt-4">
                                <li className='flex items-center'><span>✔️ دسترسی مادام‌العمر</span></li>
                                <li className='flex items-center'><span>✔️ به‌روزرسانی رایگان محتوا</span></li>
                                <li className='flex items-center'><span>✔️ گارانتی بازگشت وجه ۷ روزه</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    );
};

export default CourseDetail;