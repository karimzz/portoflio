import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from "../libs/utils"
import { useToast } from './hooks/use-toast'
import { useState } from 'react';

const ContactSection = () => {

    const {toast } = useToast();
    const [isSubmitting , setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault() ;

        setIsSubmitting(true);

        setTimeout(()=>{
            toast({
                title :"Message sent",
                description:"Thank you for meseage. I'll get back to you soon."
            })
        }  , 1500)
        setIsSubmitting(false);

    }

  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'>Touch</span>
            </h2>

            <p className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
                Got an idea? Let’s turn it into reality.
                I’m available for freelance work, collaborations, and exciting frontend projects.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-12'>
                <div className="space-y-8 ">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information </h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10' >
                                <Mail className='h-6 w-6 text-primary' />{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Email </h4>
                                <a href="mailto:karimdiab1199@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    karimdiab1199@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10' >
                                <Phone className='h-6 w-6 text-primary' />{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone </h4>
                                <a href="tel:01121333466"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +20 (112) 133-3466 
                                </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10' >
                                <MapPin className='h-6 w-6 text-primary' />{" "}
                            </div>
                            <div>
                                <h4 className='font-medium'>Location </h4>
                                <a 
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Cairo,Egypt
                                </a>
                            </div>
                        </div>
                        
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Contact With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a target='_blank' href="https://www.facebook.com/karim.clash.official"> <Facebook /> </a>
                                <a target='_blank' href="https://www.instagram.com/karimzz/"> <Instagram /> </a>
                                <a target='_blank' href="https://www.linkedin.com/in/karim-mohamed-09574a36a/"> <Linkedin /> </a>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                            <form className='space-y-6' action="" onSubmit={handleSubmit}>
                                <div>
                                    <label className='block text-sm font-medium mb-2' htmlFor="name">Your Name </label>
                                    <input type="text"
                                    id='name'
                                    name='name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary'
                                    placeholder='Karim Mohamed...'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium mb-2' htmlFor="email">Your Email </label>
                                    <input type="email"
                                    id='email'
                                    name='email'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary'
                                    placeholder='karim@gmail.com'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-medium mb-2' htmlFor="email">Your Message </label>
                                    <textarea type="text"
                                    id='message'
                                    name='message'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none foucs:ring-2 focus:ring-primary'
                                    placeholder="Hello, I'd like to talk about..."
                                    />
                                </div>
                                <button disabled={isSubmitting} className={cn("cosmic-button w-full cursor-pointer items-center flex justify-center gap-2")} type='submit'>
                                    {isSubmitting ? "Sending..." : "Send Message"}  <Send size={16} />
                                </button>
                            </form>
                        </div>
            </div>

        </div>
    </section>
  )
}

export default ContactSection
