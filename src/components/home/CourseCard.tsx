import { Link } from 'react-router-dom'; // برای لینک دادن به صفحه جزئیات دوره

const CourseCard = ({ course }) => {
    // تخریب (Destructuring) props برای استفاده راحت‌تر
    const { id, title, instructor, rating, price, imageUrl } = course;
    console.log(course)

    return (
        // کارت دوره با افکت سایه هنگام هاور
        <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">
            
            {/* تصویر دوره */}
            <div className="w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
                {/* در پروژه واقعی، imageUrl را به تگ <img> متصل کنید */}
                <img 
                    src={imageUrl || 'https://via.placeholder.com/400x300'} 
                    alt={title} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                />
            </div>

            <div className="p-4">
                {/* نام دوره (لینک به صفحه جزئیات) */}
                <h3 className="mt-1 text-lg font-medium text-gray-900 line-clamp-2 min-h-[50px]">
                    {/* Link به آدرس داینامیک course/:id */}
                    <Link to={`/course/${id}`}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {title}
                    </Link>
                </h3>
                
                {/* مدرس و امتیاز */}
                <p className="mt-2 text-sm text-gray-500">مدرس: **{instructor}**</p>
                <div className="flex items-center mt-1">
                    <span className="text-yellow-500">
                        {'⭐️'.repeat(Math.floor(rating))} 
                    </span>
                    <span className="text-xs text-gray-600 mr-1">({rating})</span>
                </div>
                
                {/* قیمت و دکمه */}
                <div className="mt-4 flex justify-between items-center border-t pt-3">
                    <p className="text-xl font-bold text-green-600">
                        {new Intl.NumberFormat('fa-IR').format(price)} تومان
                    </p>
                    
                    <button 
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150"
                        onClick={() => alert(`رفتن به صفحه جزئیات دوره ${title}`)} // مثال کلیک
                    >
                        مشاهده
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;