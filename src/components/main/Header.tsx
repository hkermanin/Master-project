export default function Header(){
    return(
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              📚 آموزشگاه آنلاین
            </a>
          </div>

          <div className="hidden sm:ml-6 sm:flex ">
            {['دوره‌ها', 'درباره ما', 'تماس با ما'].map((item) => (
              <a 
                key={item} 
                href={`/${item}`} // در پروژه‌های واقعی با React Router لینک‌ها را تعریف کنید
                className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-1 pt-1 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
              🛒
              <span className="sr-only">سبد خرید</span>
            </button>

            {/* دکمه ورود و ثبت نام */}
            <a href="/login" className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-3">
              ورود
            </a>
            <a href="/register" className="hidden sm:inline-flex px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 mr-2">
              ثبت نام
            </a>
          </div>
        </div>
      </div>
    </nav>
    )
}