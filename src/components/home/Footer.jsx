import { Icon } from "@iconify/react";
import Link from "next/link";
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Article", href: "/article" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: "mdi:instagram",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: "mdi:twitter",
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: "mdi:facebook",
    href: "https://facebook.com",
    label: "Facebook",
  }, {
    icon: "mdi:linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: "mdi:github",
    href: "https://github.com",
    label: "GitHub",
  },
];

const getFullYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b border-t border-gray-300 to-amber-100  from-amber-50 text-gray-700 px-6 md:px-20 py-10 flex flex-col items-center justify-center w-full gap-5">
      <div className="max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-4 p-4 items-center">
        {/*logo  */}
        <div className="flex flex-col gap-2 text-sm font-medium w-full items-center justify-center">
          <h1 className="text-2xl font-bold font-serif text-gray-800">
            DevBlog
          </h1>
        </div>
        {/*linkler  */}
        <div className="flex flex-col gap-2 text-sm font-medium w-full items-center justify-center">
          <h2 className="text-lg font-bold  font-serif underline underline-offset-4 text-gray-800">
            Linkler
          </h2>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-amber-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Sağ: Sosyal Medya + Mail */}
        <div className="flex flex-col gap-3 text-sm w-full items-center justify-center">
          <div className="flex gap-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className=""
              >
                <Icon
                  icon={icon}
                  className="w-8 h-8 text-gray-600 hover:text-amber-400 hover:bg-amber-50 transition-colors duration-300 p-1 rounded-2xl"
                />
              </a>
            ))}
          </div>
          <a
            href="mailto:goktasabdurrahman44@gmail.com"
            className="text-gray-600 hover:text-amber-400 hover:underline transition-colors duration-300"
          >
            goktasabdurrahman44@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-gray-600">
        <p className="text-sm text-gray-600 font-semibold justify-self-center">
          © {getFullYear()} Goktas. Tüm hakları saklıdır.
        </p>
      </div>
      <div>
        {/* BIGGTECH logosu buraya */}
        <p className="text-sm text-gray-600 font-semibold justify-self-center">
          BIGGTECH
        </p>
      </div>
    </footer>
  );
};
export default Footer;
