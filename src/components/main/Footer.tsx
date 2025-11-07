import { Link } from 'react-router-dom';

const Footer = () => {
  // داده‌های لینک‌ها برای استفاده مجدد
  const navigation = {
    main: [
      { name: 'دوره‌ها', href: '/courses' },
      { name: 'درباره ما', href: '/about' },
      { name: 'تماس با ما', href: '/contact' },
    ],
    legal: [
      { name: 'حریم خصوصی', href: '/privacy' },
      { name: 'قوانین و مقررات', href: '/terms' },
      { name: 'سوالات متداول', href: '/faq' },
    ],
    social: [
      { name: 'تلگرام', icon: '📞', href: 'https://t.me/yourid' },
      { name: 'اینستاگرام', icon: '📸', href: 'https://instagram.com/yourid' },
    ],
  };

  return (
    <footer className="bg-gray-900 mt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* بخش اصلی فوتر (Grid Layout) */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* ستون ۱: لوگو و معرفی مختصر */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-2xl font-bold text-blue-400">
                📚 آموزشگاه آنلاین
            </Link>
            <p className="text-sm text-gray-400">
              با بهترین دوره‌های آنلاین، تخصص‌های مورد نیاز بازار کار را فرا بگیرید.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xl transition">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ستون ۲ و ۳: لینک‌های ناوبری (Grid در Grid) */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* بخش لینک‌های اصلی */}
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  لینک‌های اصلی
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* بخش اطلاعات تماس */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  تماس با ما
                </h3>
                <ul role="list" className="mt-4 space-y-4 text-base text-gray-400">
                    <li>تلفن: 021-12345678</li>
                    <li>ایمیل: info@example.com</li>
                </ul>
              </div>
            </div>

            {/* بخش لینک‌های حقوقی */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  بخش حقوقی
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* کپی‌رایت */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} آموزشگاه آنلاین. کلیه حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;