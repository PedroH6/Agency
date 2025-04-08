import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Section } from "./components/Section"

import { Button } from "./components/ui/button";

import imgSection from "@/assets/Illustration.svg"
import mobileSection from "@/assets/mobile.svg"
import imgSenha from "@/assets/imgSenha.svg"
import tesla from "@/assets/tesla.svg"

import img20 from "@/assets/image20.svg"
import img19 from "@/assets/image19.svg"
import img18 from "@/assets/image18.svg"

import logoSection1 from "@/assets/LogoSection.svg"
import logoSection2 from "@/assets/LogoSection1.svg"
import logoSection3 from "@/assets/LogoSection2.svg"
import logoSection4 from "@/assets/LogoSection3.svg"
import logoSection5 from "@/assets/LogoSection4.svg"
import logoSection6 from "@/assets/LogoSection5.svg"
import logoSection7 from "@/assets/LogoSection6.svg"
import { Building2, CreditCard, Handshake, MoveRight, Pointer, Users } from "lucide-react";
import { Footer } from "./components/Footer";




function App() {

  return (
    <>
    <div>
      <Header/>
    </div>
    <Main>
      <Section>
          <div className="md:w-1/2">
            <h1 className="text-7xl font-semibold text-gray-800 mb-4">
               Lessons and insights
              <span className="text-green-500">from 8 years</span>
            </h1>
            <p className="text-gray-400 mb-8">Where to grow your business as a photographer, site or social media?</p>
            <Button>Register</Button>
          </div>
          <div>
            <img src={imgSection} alt="" />
          </div>
      </Section>
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Clients</h2>
        <p className="text-gray-400 mb-8">We have been working with some Fortune 500+ clients</p>
        <div className="flex justify-center items-center gap-32 w-auto">
          <img src={logoSection1} alt="" />
          <img src={logoSection2} alt="" />
          <img src={logoSection3} alt="" />
          <img src={logoSection4} alt="" />
          <img src={logoSection5} alt="" />
          <img src={logoSection6} alt="" />
          <img src={logoSection7} alt="" />
        </div>
      </section>

      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
          Manage your entire community  <span className="text-gray-500">in a single system</span>
          </h2>
          <p className="text-gray-600 mt-4">Who is Nextcent suitable for?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <Users className="text-lime-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Membership Organisations</h3>
            <p className="text-gray-600">Our membership management software provides full automation of membership renewals and payments.</p>
          </div>

          <div className="rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <Building2 className="text-lime-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">National Associations</h3>
            <p className="text-gray-600">Our membership management software provides full automation of membership renewals and payments</p>
          </div>

          <div className="rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <Handshake className="text-lime-600"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Clubs And Groups</h3>
            <p className="text-gray-600">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </section>

      <section className="py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={mobileSection} alt="" />
        </div>

        <div className="md:w-1/2">
         <h2 className="text-5xl font-semibold text-gray-800 mb-4">The unseen of spending three years at Pixelgrade</h2>
         <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus natus odio est quasi sit inventore perspiciatis earum alias consequatur qui, eum atque cum nisi sequi quisquam ullam repudiandae molestias!
         </p>
         <Button>Learn More</Button>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="flex flex-col md:flex-row items-center justify-around gap-12w">
          <div className="md:w-1/2 text-center md:text-left">
           <h2 className="text-6xl font-semibold text-gray-800 mb-4">
             Helping a local <span className="text-green-500">business</span> reinvent itself
           </h2>
           <p className="text-gray-600 mb-8">We reached here with our hard work and dedication</p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
           <div>
              <div className="flex justify-center items-center">
                <Users className="text-lime-600" size={40}/>
              </div>
              <p className="text-2xl font-bold text-gray-80">2,245,341</p>
              <p className="text-gray-600">Members</p>
           </div>

           <div>
              <div className="flex justify-center items-center">
                <Handshake className="text-lime-600" size={40}/>
              </div>
              <p className="text-2xl font-bold text-gray-80">46,328</p>
              <p className="text-gray-600">Clubs</p>
           </div>

           <div>
              <div className="flex justify-center items-center">
               <Pointer className="text-lime-600" size={40}/>
              </div>
              <p className="text-2xl font-bold text-gray-80">828,867</p>
              <p className="text-gray-600">Event Bookings</p>
           </div>

           <div>
              <div className="flex justify-center items-center">
                <CreditCard className="text-lime-600" size={40}/>
              </div>
              <p className="text-2xl font-bold text-gray-80">1,926,436</p>
              <p className="text-gray-600">Payments</p>
           </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={imgSenha} alt="" />
        </div>

        <div className="md:w-1/2">
         <h2 className="text-5xl font-bold text-gray-800 mb-4">How to design your site footer like we did</h2>
         <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus natus odio est quasi sit inventore perspiciatis earum alias consequatur qui, eum atque cum nisi sequi quisquam ullam repudiandae molestias!
         </p>
         <Button>Learn More</Button>
        </div>
      </section>

      <section className="py-12">
        <div className="px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src={tesla} alt="" />
          </div>
          <div className="md:w-2/3">
           <p className="text-gray-700 text-1xl mb-4">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
           <div className="mt-6">
              <p className="font-semibold text-green-600">Tim Smith</p>
              <p className="text-gray-500">British Dragon Boat Racing Association</p>
              <div className="flex items-center gap-4 mt-9">
              <img src={logoSection1} alt="" />
              <img src={logoSection2} alt="" />
              <img src={logoSection3} alt="" />
              <img src={logoSection4} alt="" />
              <img src={logoSection5} alt="" />
              <img src={logoSection6} alt="" />
              <img src={logoSection7} alt="" />

              <Button variant="outline">
                Meet all customers
                <MoveRight className="text-green-600"/>
              </Button>
            </div>
           </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Caring is the new marketing</h2>
            <p className="text-gray-600 mt-4">
            The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community are increasing their membership income and lots more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <img src={img18} alt="" />
                <div className="w-72 h-40 -mt-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 text-center">
                  <h3 className="text-xl font-semibold text-gray-600 m-1 mb-4">Creating Streamlined Safeguarding Processes with OneRen</h3>
                  <Button variant="outline">
                      Readmore
                    <MoveRight className="text-green-600"/>
                  </Button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <img src={img19} alt="" />
                <div className="w-72 h-40 -mt-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 text-center">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4">What are your safeguarding responsibilities and how can you manage them?</h3>
                  <Button variant="outline">
                      Readmore
                    <MoveRight className="text-green-600"/>
                  </Button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <img src={img20} alt="" />
                <div className="w-72 h-40 -mt-20 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 text-center">
                  <h3 className="text-xl font-semibold m-1 text-gray-600 mb-4">Revamping the Membership Model with Triathlon Australia</h3>
                  <Button variant="outline">
                      Readmore
                    <MoveRight className="text-green-600"/>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-7xl font-semibold text-gray-800 mb-6">Pellentesque suscipit fringilla libero eu.</h2>
          <Button size="lg">
            Get a Demo
            <MoveRight/>
          </Button>
        </div>
      </section>
    </Main>
    <Footer/>
    
    </>
  )
}

export default App
