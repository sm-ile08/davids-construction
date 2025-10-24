import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/deewhyla?igsh=bG15cXV0dXUyZnBs",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/2348061631674",
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              David's General Construction Works Ltd
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Building excellence across Nigeria with quality, durability, and
              affordable construction solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Phone: 08061631674</li>
              <li>Email: dayofabiyi2003@gmail.com</li>
              <li>Location: Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>
            © {currentYear} David's General Construction Works. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
