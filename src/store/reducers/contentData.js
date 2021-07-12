// import { updateObject } from "../../shared/utility";

import DragonsQuillLogo from "../../assets/ProjectLogos/DragonsQuillLogo.svg";
import HitpointCalculatorLogo from "../../assets/ProjectLogos/HitpointCalculatorLogo.svg";

const initialState = {
  projectsMetaData: [
    {
      id: "jk",
      name: "Jelle Kuiper",
      imageAlt: "Jelle Kuiper officiating a wedding ceremony",
      tagline: "A theater producer and marriage officiant",
      imageSrc: "/ProjectsImages/JelleKuiper/JelleKuiper-trouwambtenaar.jpg"
    },
    {
      id: "ki",
      name: "Kinder",
      tagline: "Improving the charitable sector and creating a Kinder world",
      imageSrc: "/ProjectsImages/Kinder/Kinder-receptionPhoto.jpg",
      imageAlt:
        "Koen Hoogendoorn wearing a Kinder shirt at a reception desk helping people"
    },
    {
      id: "dq",
      name: "Dragon's Quill",
      tagline: "Helps people write structured RPG adventures",
      imageSrc: "/ProjectsImages/DragonsQuill/DragonsQuill-playingPhoto.jpg",
      imageAlt: "Koen playing dungeons and dragons",
      logo: DragonsQuillLogo,
      logoWidth: "185",
      logoHeight: "32",
      alt: "Dragon's Quill logo"
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
      logo: HitpointCalculatorLogo,
      logoWidth: "213",
      logoHeight: "24",
      alt: "Hitpoint Calculator logo"
    },
    {
      id: "fo",
      name: "Financial Offices",
      tagline: "A center for financial offices in Amsterdam",
      imageSrc: "/ProjectsImages/FinancialOffices/FinancialOffices-gebouw.jpg",
      imageAlt: "The building of Financial Offices by night"
    },
    {
      id: "st",
      name: "Streepgedicht",
      tagline: "A tool to create blackout poems by censoring the news",
      imageSrc:
        "/ProjectsImages/Streepgedicht/Streepgedicht-examples-mockup.jpg",
      imageAlt: "Multiple Streepgedicht examples"
    },
    {
      id: "th",
      name: "Titia Hoogendoorn",
      tagline: "An artistic content creator",
      imageSrc: "/ProjectsImages/TitiaHoogendoorn/TitiaHoogendoorn-meeting.jpg",
      imageAlt: "S meeting with Titia and Koen"
    },
    {
      id: "mk",
      name: "Martin Koolhoven",
      tagline: "A director that loves westerns",
      imageSrc: "/ProjectsImages/MartinKoolhoven/MartinKoolhoven-opDeSet.jpg",
      imageAlt: "Martin Koolhoven directing a movie"
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
    // case "SET_ACTIVE_FEATURED_PROJECT":
    //   let featuredProjects = [...state.featuredProjects];
    //   let clickedProject = { ...featuredProjects[action.index] };

    //   featuredProjects.forEach((project) => {
    //     project.active = false;
    //   });

    //   clickedProject.active = true;
    //   featuredProjects[action.index] = clickedProject;

    //   const updatedState = { featuredProjects: featuredProjects };

    //   return updateObject(state, updatedState);
    default:
      return state;
  }
};
export default reducer;
