import {  useEffect, useState } from "react"
import { cn } from "../libs/utils"
import { Menu, X } from "lucide-react";

const navItems = [
    {name : "Home" , href :"#hero"},
    {name : "About" , href :"#about"},
    {name : "Projects" , href :"#projects"},
    {name : "Skills" , href :"#skills"},
    {name : "Contact" , href :"#contact"},
]

export  const Navbar = () => {

    const [isScrolled , setIsScorlled] = useState(false) ; 
    const [isMenuOpen , setIsMenuOpen] = useState(true) ; 

    useEffect(()=>{

        const handleScroll = ()=>{
            setIsScorlled(window.screenY > 10)
        }

        window.addEventListener('scroll' , handleScroll) ;

        return window.removeEventListener('scroll' , handleScroll) ;

    } , [])

    return (
        <nav 

        className={cn("fixed transition-all duration-300 w-full z-40",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : 'py-5'
        )}
        >
            <div className="container flex items-center justify-between">
                <a  href="#hero" className="text-xl font-bold flex items-center text-primary">
                    <span className=" relative z-10">
                        <span className="text-glow text-foreground">Karim Mohamed </span> PortFolio
                    </span>
                </a>

                {/* Desktop Nav  */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item , key)=>{
                        return(
                            
                            <a 
                            href={item.href} 
                            className=" text-foreground/80 hover:text-primary transition-colors duration-300" 
                            key={key}
                            onClick={()=>{setIsMenuOpen(false);console.log("Hello")}}
                            >{item.name}</a>
                        )
                    })}
                </div>

                {/* Mobile  Nav  */}
                <button aria-label={isMenuOpen ? "Close Menu" :"Open Menu"} className="z-50 text-foreground p-2 md:hidden" onClick={()=>setIsMenuOpen((prev)=>!prev)} > {isMenuOpen ? <X size={24}/> : <Menu size={24} />} </button>
                <div className={cn("fixed bg-background/95 inset-0 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className=" flex flex-col space-y-8 text-xl">
                        {navItems.map((item , key)=>{
                            return(
                                <a onClick={()=>setIsMenuOpen(false)} href={item.href} className=" text-foreground/80 hover:text-primary transition-colors duration-300" key={key}>{item.name}</a>
                            )
                        })}
                    </div>
                </div>

            </div>
            
        </nav>
    )
    }

 


