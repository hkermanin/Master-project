import CourseCard from "./CourseCard";

const imgCourse = 'https://cheyab.ir/wp-content/uploads/elearning-content-tyoes-main.jpg';
const allCourses = [
    { id: 1, title: 'آموزش جامع React و Next.js', instructor: 'علی احمدی', rating: 4.8, price: 990000, imageUrl: `${imgCourse}`},
    { id: 2, title: 'طراحی رابط کاربری (UX/UI) با Figma', instructor: 'مریم حسینی', rating: 5.0, price: 750000, imageUrl: `${imgCourse}`},
    { id: 3, title: 'مبانی علم داده (Data Science) با Python', instructor: 'کامران نوری', rating: 3.5, price: 1200000, imageUrl: `${imgCourse}`},
    { id: 4, title: 'آموزش جامع Node.js و Express', instructor: 'رضا کریمی', rating: 4.5, price: 850000, imageUrl: `${imgCourse}`},
    { id: 5, title: 'مبانی هوش مصنوعی و یادگیری ماشین', instructor: 'نگین سلیمانی', rating: 4.9, price: 1500000, imageUrl: `${imgCourse}`},
    { id: 6, title: 'صفر تا صد سئو و بازاریابی محتوا', instructor: 'فرهاد ناصری', rating: 4.2, price: 600000, imageUrl: `${imgCourse}`},
];


export default function Home(){
    
        return (
        <div className="bg-gray-50 min-h-screen">

            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        تمام دوره‌های آموزشی
                    </h1>
                    <p className="mt-2 text-xl text-gray-600">
                        مهارت‌های آینده را در دست بگیرید.
                    </p>
                </header>

                <div className=" ">
                    
                    <div className="lg:col-span-3">
                        <div className="text-sm text-gray-600 mb-4">
                            نمایش ۶ دوره از مجموع ۱۲۰ دوره موجود
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {allCourses.map(course => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">قبلی</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white">۱</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">۲</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">۳</a>
                                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">بعدی</a>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}





