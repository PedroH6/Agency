import { Button } from "./ui/button"

import logoIcon from "@/assets/Icon.svg"

export function Header() {
    return(
        <div className="flex items-center justify-between py-4 px-8">
            <div className="flex space-x-2">
                <img src={logoIcon} alt="" />
                <p className="logo text-xl font-bold text-gray-800">Nexcent</p>
            </div>

            <nav className="flex space-x-6">
                <Button variant="link">Home</Button>
                <Button variant="link">Service</Button>
                <Button variant="link">Feature</Button>
                <Button variant="link">Product</Button>
                <Button variant="link">Testimonial</Button>
                <Button variant="link">FAQ</Button>
            </nav>

            <div className="flex items-center space-x-4">
               <Button variant="secondary">Login</Button>
               <Button>Sign up</Button>
            </div>
        </div>
    )
}