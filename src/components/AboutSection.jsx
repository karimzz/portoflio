import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className='text-primary'>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl">Passionate Web Developer & tech creator</h3>
            <p className='text-muted-foreground'>
              Frontend Developer with experience in building responsive web and mobile applications using React.js, 
              Redux Toolkit, React Native, and Vue.js. Delivered performance-optimized interfaces, automated data 
              pipelines using Meta Graph API, and improved user experience across multiple production projects. Strong 
              collaborator with proven ability to ship scalable, maintainable code
            </p>
            <p className='text-muted-foreground' >
              Frontend Developer with experience in building responsive web and mobile applications using React.js, 
              Redux Toolkit, React Native, and Vue.js. Delivered performance-optimized interfaces, automated data 
              pipelines using Meta Graph API, and improved user experience across multiple production projects. Strong 
              collaborator with proven ability to ship scalable, maintainable code
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a href="./../assets/Karim_Mohamed_Resume.pdf" className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300  ">
                {" "}
                Download Cv
              </a>
            </div>

          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className='text-primary h-6 w-6 ' />
                </div>
                <div className="text-left">
                  <h4 className='text-lg font-semibold'>web Development</h4>
                  <p className='text-muted-foreground'>
                    {" "}
                    Creating responsive website and web application with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className='text-primary h-6 w-6 ' />
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className='text-primary h-6 w-6 ' />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection
