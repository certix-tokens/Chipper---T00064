import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";

function NavItem() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "roadmap", label: "Road Map" },
    { id: "howtobuy", label: "How to Buy" },
    { id: "community", label: "Tokenomics" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-xl z-50 px-[29.5px] max-w-[1920px]">
      <nav className="h-[143px] flex flex-row items-center justify-between font-Shantell">
        <img src={logo} alt="Logo" />
        <div className="flex flex-row gap-x-[64.81px] text-[36px] font-Shantell items-center text-center justify-center">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`px-8 py-3 rounded-full transition duration-300 ${
                activeSection === link.id
                  ? "bg-white text-black border-black border-[3px] px-[49.74px] py-[22.61]"
                  : "text-black/70 hover:text-black hover:bg-white/0"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavItem;
