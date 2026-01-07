import { useState } from "react"
import { cn } from "../libs/utils";

const skills = [
  // Frontend 
  {name :"HTML/CSS" , level : 95 , category : "frontend"},
  {name :"Javascript" , level : 90 , category : "frontend"},
  {name :"React" , level : 95 , category : "frontend"},
  {name :"Redux Toolkit" , level : 85 , category : "frontend"},
  {name :"Tailwind CSS" , level : 60 , category : "frontend"},
  {name :"Next JS" , level : 50 , category : "frontend"},

  // Backend 
  {name :"Node JS" , level : 40 , category : "backend"},
  {name :"Express" , level : 40 , category : "backend"},
  {name :".Net" , level : 30 , category : "backend"},

  // OS
  {name :"Windows" , level : 80 , category : "os"},
  {name :"KailLinux" , level : 60 , category : "os"},
  {name :"Mac OS" , level : 80 , category : "os"},




]

const SkillsSections = () => {

  const [activeCategory , setActiveCategory] = useState("all");

  const categories = ["all" , "frontend" , "backend" , "os"] ;

  const filteredSkills = skills.filter((skill)=> skill.category === activeCategory || activeCategory === "all") ;

  console.log(filteredSkills)

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {
              categories.map((category , key)=>(
                <button 
                key={key} 
                className={cn("px-5 cursor-pointer py-2 rounded-full transition-colors duration-300 capitalize" , 
                  activeCategory === category ? 'bg-primary text-primary-foreground' : "bg-secondary/70 text-foreground hover:bg-secondary"
                ) }
                onClick={()=>setActiveCategory(category)}
                > 
                  {category}
                </button>
              ))
            }
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              filteredSkills.map((skill , key)=>(
                <div className="bg-card p-6 rounded-lg shadow-xs card-hover" key={key}>
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg" >{skill.name}</h3>
                  </div>
                  <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden ">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width : `${skill.level}%`}}></div>
                    
                  </div>
                  <div className="text-right mt-1"><span className="text-sm text-muted-foreground">{skill.level}% </span></div>
                </div>
              ))
            }
          </div>

        </div>
    </section>
  )
}

export default SkillsSections
