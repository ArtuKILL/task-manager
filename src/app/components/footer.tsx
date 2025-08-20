import { SiGithub, SiGmail, SiInstagram, SiLinkerd } from "@icons-pack/react-simple-icons";
import AppLogo from "./logo";
import { ReactElement } from "react";
import FooterContent, { Term } from "./footerContent";

interface SocialMediaLink {
  name: string;
  url: string;
  icon: ReactElement | string;
}

export default function Footer() {

  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: "github",
      url: process.env.GITHUB_URL || "https://github.com",
      icon: <SiGithub />
    },
    {
      name: "instagram",
      url: process.env.INSTAGRAM_URL || "https://instagram.com",
      icon: <SiInstagram />
    },
    {
      name: "email",
      url: process.env.CONTACT_EMAIL ? `mailto:${process.env.CONTACT_EMAIL}` : "",
      icon: <SiGmail />
    }
  ];
  const socialMediaIcons = socialMediaLinks.map(
    (social, index) => (
      <li key={`social-${index}`} className="text-white hover:text-black">
        <a href={social.url} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      </li>
    )
  );

  const legalTerms: Term[] = [
    {
      label: "Terms of Use",
      path: "/"
    },
    {
      label: "License",
      path: "/"
    },
  ];

  const exploreTerms: Term[] = [
    {
      label: "Contact",
      path: process.env.CONTACT_EMAIL ? `mailto:${process.env.CONTACT_EMAIL}` : ""
    },
    {
      label: "About",
      path: "/"
    }
  ];

  return (
    <div className="h-fit w-full bg-gray-600 p-10 text-white">
      <div className="flex-row space-y-5">
        <div className="flex justify-between">
          <div className="flex-row items-center justify-center w-fit">
            <AppLogo />
            <ul className="flex justify-center space-x-5 mt-3">
              {socialMediaIcons}
            </ul>
          </div>

          <FooterContent title="Legal" terms={legalTerms} />
          <FooterContent title="Explore" terms={exploreTerms} />
          <div/>
        </div>
        <div className="flex-row justify-center items-center border-t border-gray-500 text-center pt-2">
          <p>Hecho con ❤️ por Arturo Lecuona.</p>
          <p>© 2025 - {process.env.APP_NAME}</p>
        </div>
      </div>
    </div>
  );
}
