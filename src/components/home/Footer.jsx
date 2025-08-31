import { Icon } from "@iconify/react";
import Link from "next/link";
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Blog", href: "/blog" },
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
  },
];

const getFullYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-100 to-orange-200 text-white px-6 md:px-20 py-10 flex flex-col items-center justify-center w-full gap-5">
      <div className="max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-4 p-4 items-center">
        {/*logo  */}
        <div className="flex flex-col gap-2 text-sm font-medium w-full items-center justify-center">
          <h1 className="text-2xl font-bold font-serif text-gray-400">
            DevBlog
          </h1>
        </div>
        {/*linkler  */}
        <div className="flex flex-col gap-2 text-sm font-medium w-full items-center justify-center">
          <h2 className="text-lg font-bold font-serif underline text-gray-400 ">
            Linkler
          </h2>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>{" "}
        {/*linkler  */}
        <div className="flex flex-col gap-2 text-sm font-medium w-full items-center justify-center">
          <h2 className="text-lg font-bold font-serif underline text-gray-400 ">
            Linkler
          </h2>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-blue-300 transition-colors duration-300"
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
                  className="w-8 h-8 hover:text-secondary-600 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-200 transition-colors duration-300 p-1 rounded-2xl"
                />
              </a>
            ))}
          </div>
          <a
            href="mailto:destek@pakfiliz.com"
            className="text-secondary-600 hover:underline"
          >
            destek@pakfiliz.com
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
