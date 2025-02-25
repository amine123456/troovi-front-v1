import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight, Play, ShieldCheck, Star, CheckCircle,
    Smartphone, Laptop, Headphones, Watch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EnhancedHeroSection = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    // Items that can be protected with the service
    const protectableItems = [
        { name: "Smartphone", icon: Smartphone, color: "bg-blue-500" },
        { name: "Laptop", icon: Laptop, color: "bg-purple-500" },
        { name: "Headphones", icon: Headphones, color: "bg-amber-500" },
        { name: "Watch", icon: Watch, color: "bg-emerald-500" }
    ];

    // Scroll detection effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Auto-rotate through protectable items
        const interval = setInterval(() => {
            setActiveItem(prev => (prev + 1) % protectableItems.length);
        }, 3000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main gradient blobs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
                <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

                {/* Dynamic interactive dots */}
                <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-30">
                    {[...Array(20)].map((_, index) => {
                        const size = Math.floor(Math.random() * 3) + 1;
                        const top = `${Math.floor(Math.random() * 100)}%`;
                        const left = `${Math.floor(Math.random() * 100)}%`;
                        const isBordered = Math.random() > 0.7;
                        const colors = ['bg-primary', 'bg-blue-400', 'bg-purple-400', 'bg-amber-400'];
                        const color = colors[Math.floor(Math.random() * colors.length)];

                        return (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 1, 1, 0],
                                    opacity: [0, 1, 1, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                                className={`absolute ${isBordered ? 'border border-primary' : color} rounded-full`}
                                style={{
                                    top,
                                    left,
                                    width: `${size * 2}px`,
                                    height: `${size * 2}px`
                                }}
                            />
                        );
                    })}
                </div>

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-20 md:py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Enhanced Content Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8 relative"
                    >
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Badge className="px-4 py-2 text-sm bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-500 backdrop-blur-sm border-primary/30">
                                    <motion.span
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="mr-2"
                                    >
                                        ✨
                                    </motion.span>
                                    New: International Protection Network
                                </Badge>
                            </div>

                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Never Lose
                </span>
                                <br />
                                Your Valuables Again
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                                Secure your belongings with smart QR code stickers. The easiest way to help lost items find their way back home.
                            </p>
                        </motion.div>

                        {/* Enhanced Trust Indicators */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center pt-2">
                            <div className="flex items-center space-x-3 bg-white dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <div className="flex -space-x-2">
                                    {['bg-blue-100 text-blue-600', 'bg-green-100 text-green-600', 'bg-purple-100 text-purple-600'].map((style, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.1 + 0.5 }}
                                            className={`w-8 h-8 rounded-full ${style.split(' ')[0]} flex items-center justify-center ${style.split(' ')[1]}`}
                                        >
                                            <CheckCircle size={16} />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">10,000+ customers</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Across 30+ countries</span>
                                </div>
                            </div>

                            <div className="flex items-center bg-white dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.div
                                            key={star}
                                            initial={{ rotateY: 90, opacity: 0 }}
                                            animate={{ rotateY: 0, opacity: 1 }}
                                            transition={{ delay: star * 0.1 }}
                                        >
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" strokeWidth={0.5} />
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="ml-2 flex flex-col">
                                    <span className="text-sm font-semibold">4.9/5 rating</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Verified reviews</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Enhanced CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            <Button
                                size="lg"
                                className="text-lg group transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 border-0"
                            >
                                Get Started
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    <ArrowRight className="ml-2" />
                                </motion.div>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg transition-all duration-300 hover:scale-105 border-2 border-primary/20 hover:border-primary/40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                            >
                                <Play className="h-5 w-5 mr-2 text-primary" />
                                Watch Demo
                            </Button>
                        </motion.div>


                    </motion.div>

                    {/* Enhanced Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative lg:ml-12"
                    >
                        <motion.div
                            className="glass-panel rounded-2xl overflow-hidden p-1 backdrop-blur-md bg-white/40 dark:bg-slate-800/40 shadow-2xl relative z-10 border border-white/20 dark:border-slate-700/40"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 z-0"></div>

                            <div className="relative rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                                    alt="Troovi in action"
                                    className="rounded-lg w-full h-full object-cover shadow-lg transform transition-transform duration-700 hover:scale-105"
                                />

                                {/* Enhanced Floating Elements */}
                                <motion.div
                                    className="absolute top-4 left-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 1,
                                        y: {
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Item Protected</div>
                                            <div className="font-medium text-sm">
                                                {protectableItems[activeItem].name} Secured
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-lg"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 1.3,
                                        y: {
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 2.5,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"
                                            animate={{
                                                backgroundColor: [
                                                    'rgba(219, 234, 254, 1)', // blue-100
                                                    'rgba(191, 219, 254, 1)', // blue-200
                                                    'rgba(219, 234, 254, 1)'  // blue-100
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </motion.div>
                                        <div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Instant Alert</div>
                                            <motion.div
                                                className="font-medium text-sm"
                                                animate={{ color: ['#1e40af', '#3b82f6', '#1e40af'] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                Found Notification
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Person notification popup */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-lg p-3 shadow-2xl"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: [0, 1.1, 1],
                                        opacity: [0, 1, 1],
                                        y: ['0%', '-5%', '0%']
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 2,
                                        y: {
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 4.75V6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M17.25 6.75L16.25 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M19.25 12H17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M17.25 17.25L16.25 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12 19.25V17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M7.75 16.25L6.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M6.25 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M7.75 7.75L6.75 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </motion.div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Item Found!</div>
                                            <div className="font-medium">Your {protectableItems[activeItem].name} was scanned</div>
                                            <div className="text-xs mt-1 text-primary">1.2 miles from you • 3 mins ago</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Enhanced Decorative elements */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10 blur-sm"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.02, 1]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400/30 rounded-full blur-2xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute -top-6 -left-6 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Enhanced QR Code illustration */}
                        <motion.div
                            className="absolute -bottom-4 -left-6 w-24 h-24 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 z-20"
                            initial={{ rotate: 12, y: 20, opacity: 0 }}
                            animate={{ rotate: [12, 8, 12, 16, 12], y: 0, opacity: 1 }}
                            transition={{
                                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 0.6 },
                                opacity: { duration: 0.6 }
                            }}
                            whileHover={{ scale: 1.1, rotate: 0 }}
                        >
                            <motion.div
                                className="relative bg-slate-100 dark:bg-slate-700 h-full w-full rounded grid grid-cols-4 grid-rows-4 gap-0.5 p-1 overflow-hidden"
                                whileHover={{ scale: 1.1 }}
                            >
                                {/* QR Code Dynamic Elements */}
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`${Math.random() > 0.5 ? 'bg-slate-800 dark:bg-slate-300' : 'bg-transparent'} rounded-sm`}
                                        initial={{ opacity: 0.4 }}
                                        animate={{
                                            opacity: i % 3 === 0 ? [0.4, 1, 0.4] : 0.8,
                                            backgroundColor: i % 7 === 0 ?
                                                ['rgb(30, 41, 59)', 'rgb(59, 130, 246)', 'rgb(30, 41, 59)'] :
                                                undefined
                                        }}
                                        transition={{
                                            duration: Math.random() * 2 + 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2
                                        }}
                                    />
                                ))}

                                {/* QR Code center logo */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-6 h-6 bg-primary/20 backdrop-blur-sm rounded-md flex items-center justify-center"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    >
                                        <div className="w-4 h-4 bg-primary rounded-sm" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Scan line animation */}
                        <motion.div
                            className="absolute top-1/4 left-0 right-0 h-px bg-blue-500/50 z-20"
                            animate={{
                                y: ["0%", "300%", "0%"],
                                opacity: [0, 1, 0],
                                scaleY: [1, 4, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default EnhancedHeroSection;