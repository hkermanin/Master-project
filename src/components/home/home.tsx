
import CourseCard from "./CourseCard";

const allCourses = [
    { id: 1, title: 'آموزش جامع React و Next.js', instructor: 'علی احمدی', rating: 4.8, price: 990000, imageUrl: ''},
    { id: 2, title: 'طراحی رابط کاربری (UX/UI) با Figma', instructor: 'مریم حسینی', rating: 5.0, price: 750000, imageUrl: ''},
    { id: 3, title: 'مبانی علم داده (Data Science) با Python', instructor: 'کامران نوری', rating: 3.5, price: 1200000, imageUrl: ''},
    { id: 4, title: 'آموزش جامع Node.js و Express', instructor: 'رضا کریمی', rating: 4.5, price: 850000, imageUrl: ''},
    { id: 5, title: 'مبانی هوش مصنوعی و یادگیری ماشین', instructor: 'نگین سلیمانی', rating: 4.9, price: 1500000, imageUrl: ''},
    { id: 6, title: 'صفر تا صد سئو و بازاریابی محتوا', instructor: 'فرهاد ناصری', rating: 4.2, price: 600000, imageUrl: ''},
];


export default function Home(){
    
        return (
        <div className="bg-gray-50 min-h-screen">
            {/* <Navbar /> */} 

            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                
                {/* بخش عنوان و جستجو */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        تمام دوره‌های آموزشی
                    </h1>
                    <p className="mt-2 text-xl text-gray-600">
                        مهارت‌های آینده را در دست بگیرید.
                    </p>
                </header>

                {/* Grid اصلی: فیلتر (Sidebar) و لیست دوره‌ها (Main Content) */}
                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    
                    {/* ستون فیلتر و مرتب‌سازی (Sidebar) */}
                    <aside className="lg:col-span-1 mb-8 lg:mb-0 sticky top-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
                                فیلتر دوره‌ها
                            </h2>
                            
                            {/* فیلتر ۱: دسته‌بندی */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">دسته‌بندی</label>
                                <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500">
                                    <option>همه دسته‌ها</option>
                                    <option>برنامه‌نویسی</option>
                                    <option>طراحی وب</option>
                                    <option>علم داده</option>
                                </select>
                            </div>
                            
                            {/* فیلتر ۲: مرتب‌سازی */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">مرتب‌سازی</label>
                                <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500">
                                    <option>جدیدترین</option>
                                    <option>پرفروش‌ترین</option>
                                    <option>بالاترین امتیاز</option>
                                </select>
                            </div>

                            {/* فیلتر ۳: قیمت */}
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">محدوده قیمت</label>
                                {/* اینجا می‌توانید یک اسلایدر یا چک‌باکس‌های رایگان/پولی قرار دهید */}
                                <div className='flex items-center space-x-2 space-x-reverse'>
                                     <input type="checkbox" id="free" className='h-4 w-4 text-blue-600 border-gray-300 rounded' />
                                     <label htmlFor="free" className='text-sm text-gray-700'>دوره‌های رایگان</label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* ستون اصلی: نمایش دوره‌ها */}
                    <div className="lg:col-span-3">
                        <div className="text-sm text-gray-600 mb-4">
                            نمایش ۶ دوره از مجموع ۱۲۰ دوره موجود
                        </div>
                        
                        {/* Grid برای نمایش کارت‌های دوره */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {allCourses.map(course => (
                                // استفاده مجدد از کامپوننت CourseCard
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>

                        {/* Pagination (صفحه‌بندی) */}
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

            {/* <Footer /> */} 
        </div>
    );
}





