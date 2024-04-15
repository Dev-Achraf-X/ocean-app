import React, { ReactNode } from "react";
import Logo from "@/components/Logo";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { footerColumns } from "@/constants/footer-links";

function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    <Facebook key="f" className="social-links" />,
    <Instagram key="f" className="social-links" />,
    <Twitter key="f" className="social-links" />,
    <Github key="f" className="social-links" />,
    <Youtube key="f" className="social-links" />,
  ];
  return (
    <footer className="pt-20 pb-4">
      {/* Links */}
      <div className="container mb-12 flex flex-col lg:flex-row">
        <div className="basis-1/3 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making the world a better through construction elegant hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((item, idx) => (
              <li key={idx} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8">
          {footerColumns.map((item, idx) => (
            <article
              key={idx}
              className="capitalize flex flex-col md:text-center lg:text-start"
            >
              <h2 className="font-bold lg:text-lg text-slate-100 mb-6">
                {item.title}
              </h2>
              <ul>
                {item.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="font-normal pb-3 hover:text-sky-600 hover:ps-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      {/* Links */}

      {/* Copyrights */}
      <div className="container border-t border-slate-700">
        <p className="capitalize pt-4 text-center lg:text-start">
          {`© ${currentYear} ocean, Inc. All Rights Reserved.`}
        </p>
      </div>
      {/* Copyrights */}
    </footer>
  );
}

export default Footer;
