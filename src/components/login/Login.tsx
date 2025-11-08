import { Link } from "react-router-dom";

export default function Login(){
        const handleLogin = (e) => {
        e.preventDefault();
        // 👈 اینجا منطق ورود کاربر (ارسال داده به بک‌اند) پیاده‌سازی می‌شود
        console.log('ورود با موفقیت انجام شد (طراحی فرانت)');
    };

    return (
        // Flexbox برای قرار دادن فرم در مرکز صفحه
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl">
                
                {/* سربرگ فرم */}
                <div className='text-center'>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        ورود به حساب کاربری
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        با ورود، به دوره‌های خریداری شده خود دسترسی پیدا کنید.
                    </p>
                </div>
                
                {/* فرم ورود */}
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    
                    {/* فیلد ایمیل */}
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">آدرس ایمیل</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="آدرس ایمیل"
                            />
                        </div>

                        {/* فیلد رمز عبور */}
                        <div>
                            <label htmlFor="password" className="sr-only">رمز عبور</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="رمز عبور"
                            />
                        </div>
                    </div>

                    {/* بخش یادآوری رمز و فراموشی رمز */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="mr-2 block text-sm text-gray-900">
                                مرا به خاطر بسپار
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                رمز عبور را فراموش کرده‌اید؟
                            </a>
                        </div>
                    </div>

                    {/* دکمه ورود */}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            ورود
                        </button>
                    </div>
                </form>

                {/* لینک به صفحه ثبت نام */}
                <div className="text-sm text-center">
                    <span className="font-medium text-gray-600">
                        حساب کاربری ندارید؟ 
                    </span>
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 mr-1">
                         ثبت نام کنید.
                    </Link>
                </div>
            </div>
        </div>
    );
}

