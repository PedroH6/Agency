import logoIcon from "@/assets/Icon.svg"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
    return (
        <>
         <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                <div>
                    <div className="flex items-center mb-4 space-x-2">
                     <img src={logoIcon} alt="" />
                     <p className="logo text-xl font-bold text-gray-300">Nexcent</p>
                    </div>
                    <p className="text-sm">Copyright © 2020 Nexcent Ltd. All rights reserved.</p>
                    <div className="flex space-x-2 mt-2">
                     <a href=""><Instagram size={20}/></a>
                     <a href=""><Linkedin size={20}/></a>
                     <a href=""><Facebook size={20}/></a>
                     <a href=""><Twitter  size={20}/></a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="" className="hover:text-blue-500 transition-colors"></a>About us</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Blog</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Contact us</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Pricing</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Testimonials</li>
                           
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="" className="hover:text-blue-500 transition-colors"></a>About us</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Blog</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Contact us</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Pricing</li>
                            <li><a href="hover:text-blue-500 transition-colors"></a>Testimonials</li>
                           
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <h4 className="font-semibold text-lg mb-4">Stay up to date</h4>
                    <div className="flex">
                        <input type="email" placeholder="Your email address" className="bg-gray-700 text-white rounded-l-md px-4 py-2 focus:outline-none"/>
                        <Button variant="link" size="icon">
                         <Send />
                        </Button>
                    </div>
                </div>
            </div>
         </footer>
        </>
    )
}