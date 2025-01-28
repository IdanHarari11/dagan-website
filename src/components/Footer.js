'use client';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'אודות', href: '/about' },
    { name: 'מיזמים', href: '/projects' },
    { name: 'תרומה', href: '/donate' },
    { name: 'מדיה חברתית', href: '/social' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'fb-icon' },
    { name: 'Instagram', href: '#', icon: 'ig-icon' },
    { name: 'LinkedIn', href: '#', icon: 'li-icon' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">קישורים מהירים</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-blue-400 transition duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">צור קשר</h3>
          <div className="space-y-2">
            <p>טלפון: 03-1234567</p>
            <p>דוא״ל: info@dagan.org.il</p>
            <p>כתובת: רחוב הרצל 1, תל אביב</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">מדיה חברתית</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="hover:text-blue-400 transition duration-200"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">הרשמה לעדכונים</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="כתובת דוא״ל"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
            >
              הרשמה
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>© 2024 תכנית דגן. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
} 