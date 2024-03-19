import ProjectCard from "../Project";
import ProjectOnePic from "../../assets/images/weather.jpg"
import ProjectTwoPic from "../../assets/images/Mern.jpeg"
import ProjectThreePic from "../../assets/images/reactPortfolio.jpg"
import ProjectFourPic from "../../assets/images/Password.jpg"
import ProjectFivePic from "../../assets/images/OIP.jpg"
import ProjectSixPic from "../../assets/images/regex.jpg"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "",
      gitHub: "https://github.com/Whitney-Simpson/WeatherApp.git",
      websiteLink: "Weather Application (whitney-simpson.github.io)Links to an external site.",
      image: ProjectOnePic,
    },
    {
      id: 2,
      title: "MERN Search Engine",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: ProjectTwoPic,
    },
    {
      id: 3,
      title: "React Portfolio",
      description: "",
      gitHub: "https://github.com/Whitney-Simpson/React-Portfolio.git",
      websiteLink: "",
      image: ProjectThreePic,
    },
    {
      id: 4,
      title: "Password Generator",
      description: "",
      gitHub: "https://github.com/Whitney-Simpson/Week-3-PasswordGenerator.git",
      websiteLink: "Password Generator (whitney-simpson.github.io)Links to an external site.",
      image: ProjectFourPic,
    },
    {
      id: 5,
      title: "Logo Maker",
      description: "",
      gitHub: "https://github.com/Whitney-Simpson/SVG-Logo-Maker.gitLinks to an external site.",
      websiteLink: "https://drive.google.com/file/d/1sXt8BSnNsC0cKPq07vWbddpudU7Bj_J-/preview",
      image: ProjectFivePic,
    },
    {
      id: 6,
      title: "Regex",
      description: "",
      gitHub: " https://gist.github.com/Whitney-Simpson/e8c32aec3ecaa2567f7b6b2895b7b785.jszLinks to an external site.",
      websiteLink: "https://gist.github.com/Whitney-Simpson/e8c32aec3ecaa2567f7b6b2895b7b785",
      image: ProjectSixPic,
    },
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <div id="projectCards">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project}/>;
        })}
      </div>
    </div>
  );
}
