import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import ProductShowcase from "@/pages/ProductShowcase.tsx";
import HeroSection from "@/pages/HeroSection";
import troovi from "../assets/img/troovi.svg";


import {
    QrCode,
    Shield,
    Tag,
    Star,
    MessageCircle,
    ArrowRight,
    Phone as PhoneIcon,
    MapPin as MapPinIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    Facebook as FacebookIcon,
    Linkedin as LinkedinIcon
} from "lucide-react";
import Reviews from "@/pages/Reviews.tsx";
import FAQSection from "@/pages/FAQSection.tsx";

const Index = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Hero Section */}
            <HeroSection/>


            {/* How It Works Section with smoother gradient */}
            <section
                className="w-full py-28 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
                id={"howitworks"}>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                        <div
                            className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
                            style={{animationDelay: '1.5s'}}></div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-up"
                         style={{animationDelay: '0.2s', animationDuration: '0.8s', animationFillMode: 'forwards'}}>
              <span
                  className="px-5 py-2 rounded-full bg-primary/10 text-primary font-medium inline-block mb-5 transform hover:scale-105 transition-transform duration-300">
        <span className="inline-block animate-bounce mr-1.5">✨</span> Simple Process
      </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent">
                            How Troovi Works
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Three simple steps to protect your valuables with our innovative QR code system
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 relative z-10">
                        {[
                            {
                                icon: QrCode,
                                title: "Get Your QR Codes",
                                description: "Order our premium QR code stickers or stylish accessories designed for durability and style.",
                                color: "blue",
                                moreInfo: "Choose from waterproof stickers, metal tags, or designer keychains."
                            },
                            {
                                icon: Tag,
                                title: "Label Your Items",
                                description: "Apply the QR codes to your valuables - wallets, bags, electronics, keys, or pet collars.",
                                color: "purple",
                                moreInfo: "Takes seconds to apply, lasts for years. Works on virtually any surface."
                            },
                            {
                                icon: Shield,
                                title: "Stay Protected",
                                description: "If lost, finders can scan the QR code to help return your items without revealing your identity.",
                                color: "green",
                                moreInfo: "Get real-time notifications when your QR code is scanned."
                            },
                        ].map((item, index) => (
                            <div key={index} className="opacity-0 animate-fade-up"
                                 style={{
                                     animationDelay: `${0.4 + index * 0.2}s`,
                                     animationDuration: '0.8s',
                                     animationFillMode: 'forwards'
                                 }}>
                                <Card
                                    className="p-8 pt-10 text-center transition-all duration-500 hover:scale-105 bg-white/70 dark:bg-slate-800/70 backdrop-blur hover:backdrop-blur-none border-0 shadow-lg hover:shadow-xl rounded-xl overflow-hidden group relative">
                                    {/* Animated top highlight bar */}
                                    <div
                                        className={`absolute top-0 left-0 w-0 h-1.5 bg-${item.color}-500 group-hover:w-full transition-all duration-700 ease-out`}></div>

                                    {/* Card background gets clearer on hover */}
                                    <div
                                        className="absolute inset-0 bg-white/20 dark:bg-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Animated icon container */}
                                    <div
                                        className={`relative w-20 h-20 mx-auto mb-8 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                                        <item.icon
                                            className={`w-10 h-10 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`}/>
                                    </div>

                                    <h3 className="relative text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                    <p className="relative text-slate-600 dark:text-slate-300 mb-5">{item.description}</p>

                                    {/* Animated number indicator */}
                                    <div className="relative mt-6 flex justify-center">
                                        <div
                                            className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-primary shadow-inner transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Hidden additional info that appears on hover */}
                                    <div
                                        className="relative h-0 overflow-hidden group-hover:h-auto group-hover:mt-5 transition-all duration-500 text-sm text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100">
                                        <p>{item.moreInfo}</p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center opacity-0 animate-fade-up"
                         style={{animationDelay: '1.2s', animationDuration: '0.8s', animationFillMode: 'forwards'}}>
                        <button
                            className="px-8 py-4 bg-primary/90 hover:bg-primary text-white rounded-xl font-medium shadow-lg backdrop-blur hover:backdrop-blur-none transform hover:scale-105 transition-all duration-300 group">
                            Get Started Today
                            <span
                                className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </button>
                    </div>
                </div>
            </section>


            {/* <HowItWorks />*/}

            {/* Products & Use Cases - consistent background */}
            <ProductShowcase/>

            {/* Reviews Section with improved overlay */}
            <Reviews/>

            {/* FAQ Section */}
            <FAQSection/>


            {/* Features Section */}
            <section
                className="w-full py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
                id={"features"}>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium inline-block mb-4">
          Why Choose Troovi
        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Advanced Features for Complete Peace of Mind
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Discover the powerful features that make Troovi the ultimate solution for protecting your
                            valuables.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageCircle,
                                title: "Real-time Notifications",
                                description: "Get instant alerts when your items are found. Stay updated in real-time.",
                            },
                            {
                                icon: Shield,
                                title: "Secure Messaging",
                                description: "Built-in encrypted messaging system ensures safe communication between finders and owners.",
                            },
                            {
                                icon: Star,
                                title: "24/7 Support",
                                description: "Our dedicated support team is always here to help you with any questions or concerns.",
                            },
                            {
                                icon: Tag,
                                title: "Global Coverage",
                                description: "Our QR codes work worldwide, helping you recover items no matter where they're found.",
                            },
                            {
                                icon: MessageCircle,
                                title: "Multi-language Support",
                                description: "Breaking language barriers with automatic translation in over 30 languages.",
                            },
                            {
                                icon: Shield,
                                title: "Privacy Controls",
                                description: "You decide what information to share. Your privacy is always in your control.",
                            },
                        ].map((feature, index) => (
                            <Card
                                key={index}
                                className="p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden bg-white dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 z-0"></div>
                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        <feature.icon className="w-8 h-8 text-primary"/>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-center">
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section
                className="w-full py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
                id="contact">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div
                            className="absolute top-40 -right-36 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                        <div
                            className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
                            style={{animationDelay: '2s'}}></div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                      <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium inline-block mb-4">
                        Get In Touch
                      </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent">
                            Contact Us
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Have questions or need assistance? We're here to help! Reach out to our team and we'll get
                            back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        {/* Contact Form Card */}
                        <Card
                            className="p-8 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur border-0 rounded-xl overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name"
                                                   className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email"
                                                   className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject"
                                               className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message"
                                               className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        ></textarea>
                                    </div>

                                    <Button
                                        className="w-full py-6 text-lg group transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 border-0"
                                    >
                                        Send Message
                                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                                    </Button>
                                </form>
                            </div>
                        </Card>

                        {/* Contact Info Card */}
                        <div className="flex flex-col gap-8">
                            <Card
                                className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur hover:backdrop-blur-none border-0 rounded-xl overflow-hidden group relative">
                                <div
                                    className="absolute top-0 left-0 w-0 h-1.5 bg-primary group-hover:w-full transition-all duration-700 ease-out"></div>
                                <h3 className="text-2xl font-semibold mb-6">Our Information</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="w-6 h-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg mb-1">Email Us</h4>
                                            <p className="text-slate-600 dark:text-slate-300 mb-2">We'll respond within
                                                24 hours</p>
                                            <a href="mailto:support@troovi.com"
                                               className="text-primary hover:underline font-medium">
                                                support@troovi.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <PhoneIcon className="w-6 h-6 text-blue-500"/>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg mb-1">Call Us</h4>
                                            <p className="text-slate-600 dark:text-slate-300 mb-2">Mon-Fri from 8am to
                                                5pm</p>
                                            <a href="tel:+1234567890"
                                               className="text-primary hover:underline font-medium">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPinIcon className="w-6 h-6 text-green-500"/>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                                            <p className="text-slate-600 dark:text-slate-300 mb-2">Our headquarters</p>
                                            <address className="not-italic text-primary">
                                                123 Innovation Drive<br/>
                                                Tech City, TS 12345
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Social Media */}
                            <Card
                                className="p-8 shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur border-0 rounded-xl overflow-hidden">
                                <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
                                <div className="flex gap-4">
                                    {[
                                        {icon: TwitterIcon, label: "Twitter", color: "sky"},
                                        {icon: InstagramIcon, label: "Instagram", color: "pink"},
                                        {icon: FacebookIcon, label: "Facebook", color: "blue"},
                                        {icon: LinkedinIcon, label: "LinkedIn", color: "indigo"}
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`w-12 h-12 bg-${social.color}-500/10 hover:bg-${social.color}-500 rounded-full flex items-center justify-center transition-all duration-300 group`}
                                            aria-label={social.label}
                                        >
                                            <social.icon
                                                className={`w-5 h-5 text-${social.color}-500 transition-colors duration-300`}/>
                                        </a>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-24 bg-gradient-to-r from-primary/10 to-blue-500/10 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5 z-0"></div>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to Secure Your Valuables?
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            Join thousands of people who trust Troovi to protect their belongings.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg group transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 border-0"
                        >
                            Start Protecting Now
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="w-full py-24 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 mb-16">
                        {/* Company Info */}
                        <div className="flex flex-col gap-6">
                            <img
                                src={troovi}
                                alt="Company Logo"
                                className="w-[140px] h-[46px] dark:brightness-200 transition-all duration-200 hover:opacity-80"
                            />
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm text-base">
                                Protecting what matters most to you with smart QR technology.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-semibold text-lg">Product</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#features"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#products"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Use Cases
                                    </a>
                                </li>
                                <li>
                                    <a href="#howitworks"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        How it Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-semibold text-lg">Company</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-semibold text-lg">Legal</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div
                        className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-600 dark:text-slate-400">
                        <p className="text-base">&copy; {new Date().getFullYear()} Troovi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
