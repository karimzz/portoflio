import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
      id : 4 ,
      title : "RBM System",
      description :"Developed and deployed a data-driven web dashboard using Meta API, improving client access to Facebook marketing insights and engagement data across 10+ pages.",
      image :"/projects/rbm.png",
      tags :["HTML" , "CSS" , "JS" , "React" , "Redux Toolkit" , "Material UI" , "Node Js" , "Express"],
      demoUrl:"https://rbm.tools/",
      githupUrl:""
    },
    {
      id : 5 ,
      title : "Furniture website",
      description :"furniture website clone built with React and Redux Toolkit is a modern web application that displays furniture products with an interactive.",
      image :"/projects/furniture.png",
      tags :["HTML" , "CSS" , "JS" , "React" , "Redux Toolkit" ],
      demoUrl:"https://karimzz.github.io/e-commerce/",
      githupUrl:"https://github.com/karimzz/e-commerce"
    },
    {
      id : 1 ,
      title : "Facebook Clone",
      description :" Facebook UI clone using React.js, Fully responsive design for mobile, tablet, and desktop Component-based architecture using React ",
      image :"/projects/facebook.png",
      tags :["HTML" ,"CSS" , "React"],
      demoUrl:"https://timely-starship-468e31.netlify.app/",
      githupUrl:"https://github.com/karimzz/facebook-clone2023"
    },
    {
      id : 2 ,
      title : "Instagram Clone",
      description :" Instgram UI clone using React.js, Fully responsive design for mobile, tablet, and desktop Component-based architecture using React ",
      image :"/projects/instgram.png",
      tags :["HTML" , "CSS" ],
      demoUrl:"https://karimzz.github.io/Instgram_2022/instgram.html",
      githupUrl:"https://github.com/karimzz/Instgram_2022"
    },
    {
      id : 3 ,
      title : "Elemnus Clone",
      description :" Instgram UI clone using React.js, Fully responsive design for mobile, tablet, and desktop Component-based architecture using React ",
      image :"/projects/elemnus2.png",
      tags :["HTML" , "CSS" , "JS"],
      demoUrl:"https://karimzz.github.io/Elemnus-clone/home.html",
      githupUrl:"https://github.com/karimzz/Elemnus-clone"
    },
    
]

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto " >
          Here are some recent projects. Each projects was carefully crafted with attention to detail, performance, and user experience.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            projects?.map((project , key)=>(
              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {
                      project?.tags.map((tag)=>(
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                          {tag}
                        </span>
                      ))
                    }
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={project.demoUrl}>
                      {' '}
                      <ExternalLink size={20}/>
                    </a>
                    <a  className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={project.githupUrl}>
                      {' '}
                      <Github size={20} />
                    </a>
                  </div>
                </div>


                </div>
                
              </div>
            ))
          }
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button flex items-center w-fit mx-auto gap-2" target="_blank" href="https://github.com/karimzz">
            Check My Githup <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectSection
