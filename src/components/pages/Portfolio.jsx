import ProjectCard from "../Project";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "project1",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
    {
      id: 2,
      title: "project2",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
    {
      id: 3,
      title: "project3",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
    {
      id: 4,
      title: "project4",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
    {
      id: 5,
      title: "project5",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
    {
      id: 6,
      title: "project6",
      description: "",
      gitHub: "",
      websiteLink: "",
      image: "",
    },
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <div>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project}/>;
        })}
      </div>
    </div>
  );
}
