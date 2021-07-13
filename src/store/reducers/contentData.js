import JelleKuiperLogo from "../../assets/ProjectLogos/JelleKuiper-Logo.svg";
import KinderLogo from "../../assets/ProjectLogos/Kinder-Logo.svg";
import DragonsQuillLogo from "../../assets/ProjectLogos/DragonsQuill-Logo.svg";
import HitpointCalculatorLogo from "../../assets/ProjectLogos/HitpointCalculator-Logo.svg";
import FinancialOfficesLogo from "../../assets/ProjectLogos/FinancialOffices-Logo.png";
import StreepgedichtLogo from "../../assets/ProjectLogos/Streepgedicht-Logo.svg";
import MartinKoolhovenLogo from "../../assets/ProjectLogos/MartinKoolhoven-Logo.svg";
import TitiaHoogendoornLogo from "../../assets/ProjectLogos/TitiaHoogendoorn-Logo.svg";

const initialState = {
  projectsMetaData: [
    {
      id: "jk",
      name: "Jelle Kuiper",
      tagline: "A theater producer and marriage officiant",
      imageSrc: "/ProjectsImages/JelleKuiper/JelleKuiper-trouwambtenaar.jpg",
      imageAlt: "Jelle Kuiper officiating a wedding ceremony",
      logoSrc: JelleKuiperLogo,
      logoAlt: "Jelle Kuiper logo",
      textLogo: true
    },
    {
      id: "ki",
      name: "Kinder",
      tagline: "Improving the charitable sector and creating a Kinder world",
      imageSrc: "/ProjectsImages/Kinder/Kinder-receptionPhoto.jpg",
      imageAlt:
        "Koen Hoogendoorn wearing a Kinder shirt at a reception desk helping people",
      logoSrc: KinderLogo,
      logoAlt: "Kinder logo"
    },
    {
      id: "dq",
      name: "Dragon's Quill",
      tagline: "Helps people write structured RPG adventures",
      imageSrc: "/ProjectsImages/DragonsQuill/DragonsQuill-playingPhoto.jpg",
      imageAlt: "Koen playing dungeons and dragons",
      logoSrc: DragonsQuillLogo,
      logoAlt: "Dragon's Quill logo"
    },
    {
      id: "hc",
      name: "Hitpoint Calculator",
      tagline:
        "Helps people who suck at math to track hitpoints in D&D battles",
      imageSrc:
        "/ProjectsImages/HitpointCalculator/HitpointCalculator-minis.jpg",
      imageAlt:
        "Phone with mockup of hitpoint calculator app open in between of d and d miniatures",
      logoSrc: HitpointCalculatorLogo,
      altSrc: "Hitpoint Calculator logo"
    },
    {
      id: "fo",
      name: "Financial Offices",
      tagline: "A center for financial offices in Amsterdam",
      imageSrc: "/ProjectsImages/FinancialOffices/FinancialOffices-gebouw.jpg",
      imageAlt: "The building of Financial Offices by night",
      logoSrc: FinancialOfficesLogo,
      logoAlt: "Financial Offices logo"
    },
    {
      id: "st",
      name: "Streepgedicht",
      tagline: "A tool to create blackout poems by censoring the news",
      imageSrc:
        "/ProjectsImages/Streepgedicht/Streepgedicht-examples-mockup.jpg",
      imageAlt: "Multiple Streepgedicht examples",
      logoSrc: StreepgedichtLogo,
      logoAlt: "Streepgedicht logo"
    },
    {
      id: "th",
      name: "Titia Hoogendoorn",
      tagline: "An artistic content creator",
      imageSrc: "/ProjectsImages/TitiaHoogendoorn/TitiaHoogendoorn-meeting.jpg",
      imageAlt: "S meeting with Titia and Koen",
      logoSrc: TitiaHoogendoornLogo,
      logoAlt: "Titia Hoogendoorn logo",
      textLogo: true
    },
    {
      id: "mk",
      name: "Martin Koolhoven",
      tagline: "A director that loves westerns",
      imageSrc: "/ProjectsImages/MartinKoolhoven/MartinKoolhoven-opDeSet.jpg",
      imageAlt: "Martin Koolhoven directing a movie",
      logoSrc: MartinKoolhovenLogo,
      logoAlt: "Martin Koolhoven logo",
      textLogo: true
    }
  ],
  pages: [
    {
      id: "p-about",
      name: "About me",
      tagline: "UX/UI designer, React developer, imaginary wizard"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
