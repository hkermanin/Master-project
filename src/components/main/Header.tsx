import { Link } from "react-router-dom";

export default function Header(){
    return(
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">
              📚 آموزشگاه آنلاین
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex text-xl">
            <Link to="/" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-3 pt-1 font-medium">
            دوره ها
            </Link>

               <Link to="/about" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-3 pt-1 font-medium">
            درباره ما
            </Link>

               <Link to="/contact" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 items-center px-3 pt-1 font-medium">
            تماس با ما
            </Link>
            
          </div>

          <div className="flex items-center gap-2">
            <Link to="/card">
            <button className="p-1 hover:cursor-pointer rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
              🛒
            </button>
            </Link>
            <Link to="/login" className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ">
              ورود
            </Link>
            <Link to="/register" className="hidden sm:inline-flex px-3 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 ">
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
}