import { motion } from "framer-motion";
import { useState } from "react";
import {
    Wallet, PawPrint, Laptop, Briefcase, Camera, Key,
    Wine, Glasses, Map, Package, Watch, Phone,
    ChevronRight, ChevronDown, Plus, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ProductShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState("essentials");

    const categories = [
        { id: "essentials", label: "Everyday Essentials" },
        { id: "tech", label: "Tech & Devices" },
        { id: "travel", label: "Travel & Outdoors" },
        { id: "luxury", label: "Luxury & Collections" }
    ];

    const featuredProducts = [
        {
            icon: Wallet,
            title: "Wallets & Cards",
            description: "Never lose your wallet again. Our slim QR stickers fit perfectly on wallets and card holders.",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?fit=crop&w=600",
            category: "essentials",
            color: "emerald"
        },
        {
            icon: PawPrint,
            title: "Pet Accessories",
            description: "Keep your furry friends safe with our durable QR tags for collars and harnesses.",
            image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?fit=crop&w=600",
            category: "essentials",
            color: "amber"
        },
        {
            icon: Laptop,
            title: "Electronics",
            description: "Protect your devices with tamper-evident QR stickers that last.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?fit=crop&w=600",
            category: "tech",
            color: "sky"
        },
        {
            icon: Briefcase,
            title: "Luggage & Bags",
            description: "Travel worry-free with our baggage tags and stickers.",
            image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?fit=crop&w=600",
            category: "travel",
            color: "indigo"
        },
        {
            icon: Camera,
            title: "Photography Gear",
            description: "Protect your valuable camera equipment with discrete QR labels.",
            image: "https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?fit=crop&w=600",
            category: "tech",
            color: "rose"
        },
        {
            icon: Key,
            title: "Keys & Keychains",
            description: "Add our mini QR tags to your keys for quick recovery if lost.",
            image: "https://images.unsplash.com/photo-1582139329536-e7284fbc2162?fit=crop&w=600",
            category: "essentials",
            color: "amber"
        },
        {
            icon: Wine,
            title: "Wine Collection",
            description: "Track and authenticate your wine collection with elegant QR labels.",
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?fit=crop&w=600",
            category: "luxury",
            color: "purple"
        },
        {
            icon: Glasses,
            title: "Eyewear",
            description: "Tiny QR stickers for glasses cases and premium eyewear.",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?fit=crop&w=600",
            category: "essentials",
            color: "cyan"
        },
        {
            icon: Map,
            title: "Sports Equipment",
            description: "Weather-resistant tags for outdoor and sports gear.",
            image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?fit=crop&w=600",
            category: "travel",
            color: "green"
        },
        {
            icon: Package,
            title: "Parcels & Deliveries",
            description: "Track valuable shipments with our commercial QR system.",
            image: "https://images.unsplash.com/photo-1595079676601-f1adf0993590?fit=crop&w=600",
            category: "essentials",
            color: "yellow"
        },
        {
            icon: Watch,
            title: "Luxury Items",
            description: "Discrete authentication for high-value collectibles and accessories.",
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?fit=crop&w=600",
            category: "luxury",
            color: "amber"
        },
        {
            icon: Phone,
            title: "Mobile Devices",
            description: "Secure your phone and accessories with our premium stickers.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fit=crop&w=600",
            category: "tech",
            color: "blue"
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const filterProductsByCategory = (category) => {
        if (category === "all") return featuredProducts;
        return featuredProducts.filter(product => product.category === category);
    };

    // Get the background color based on the product color
    const getBgColor = (color) => {
        const colorMap = {
            emerald: "bg-emerald-50 dark:bg-emerald-900/20",
            amber: "bg-amber-50 dark:bg-amber-900/20",
            sky: "bg-sky-50 dark:bg-sky-900/20",
            indigo: "bg-indigo-50 dark:bg-indigo-900/20",
            rose: "bg-rose-50 dark:bg-rose-900/20",
            purple: "bg-purple-50 dark:bg-purple-900/20",
            cyan: "bg-cyan-50 dark:bg-cyan-900/20",
            green: "bg-green-50 dark:bg-green-900/20",
            yellow: "bg-yellow-50 dark:bg-yellow-900/20",
            blue: "bg-blue-50 dark:bg-blue-900/20"
        };

        return colorMap[color] || "bg-slate-50 dark:bg-slate-900/20";
    };

    // Get the text color based on the product color
    const getTextColor = (color) => {
        const colorMap = {
            emerald: "text-emerald-600 dark:text-emerald-400",
            amber: "text-amber-600 dark:text-amber-400",
            sky: "text-sky-600 dark:text-sky-400",
            indigo: "text-indigo-600 dark:text-indigo-400",
            rose: "text-rose-600 dark:text-rose-400",
            purple: "text-purple-600 dark:text-purple-400",
            cyan: "text-cyan-600 dark:text-cyan-400",
            green: "text-green-600 dark:text-green-400",
            yellow: "text-yellow-600 dark:text-yellow-400",
            blue: "text-blue-600 dark:text-blue-400"
        };

        return colorMap[color] || "text-slate-600 dark:text-slate-400";
    };

    return (
        <section className="w-full py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-850 overflow-hidden" id={"products"}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
          <span className="px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium inline-block mb-4 shadow-sm">
            Protect What Matters
          </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 text-transparent bg-clip-text">
                        Everything You Value, Protected
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                        From everyday essentials to luxury collectibles, Troovi works with anything you want to protect and recover
                    </p>
                </motion.div>

                {/* Category Navigation Tabs */}
                <Tabs
                    defaultValue="essentials"
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                    className="mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <TabsList className="bg-slate-100/80 dark:bg-slate-800/80 p-1 backdrop-blur-sm rounded-full mb-8">
                            {categories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="rounded-full px-6 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                                >
                                    {category.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </motion.div>

                    {/* Main Featured Products Grid */}
                    {categories.map((category) => (
                        <TabsContent key={category.id} value={category.id} className="mt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filterProductsByCategory(category.id).map((product, index) => (
                                    <motion.div
                                        key={product.title}
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                        variants={cardVariants}
                                    >
                                        <Card className="overflow-hidden group h-full border-0 bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-500 relative">
                                            <div className="aspect-video w-full relative overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                                                {/* Floating badge with icon */}
                                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <product.icon className="w-6 h-6 text-white" />
                                                </div>
                                            </div>

                                            <div className="p-6 relative">
                                                {/* Colored circle with icon behind the card content for visual interest */}
                                                <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${getBgColor(product.color)} opacity-50 blur-xl`}></div>

                                                <div className="relative">
                                                    <h3 className="font-bold text-xl mb-2 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            <span className={`inline-block p-2 rounded-full ${getBgColor(product.color)} mr-3`}>
                              <product.icon className={`w-5 h-5 ${getTextColor(product.color)}`} />
                            </span>
                                                        {product.title}
                                                    </h3>

                                                    <p className="text-slate-600 dark:text-slate-300">{product.description}</p>

                                                    <div className="mt-6 flex justify-between items-center">
                                                        <Button variant="ghost" className="group text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 pl-0">
                                                            Learn more
                                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </Button>

                                                        <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors">
                              <Plus className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                {/* Secondary Grid for More Use Cases - Animated interactive grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-20"
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-3">More Protection Solutions</h3>
                        <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                            Discover all the ways Troovi can help secure your belongings
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {featuredProducts.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`p-6 ${getBgColor(item.color)} rounded-2xl flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                            >
                                {/* Radial gradient background effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent dark:from-white/10 transition-opacity duration-300 rounded-2xl"></div>

                                <div className={`w-14 h-14 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                                    <item.icon className={`w-7 h-7 ${getTextColor(item.color)}`} />
                                </div>
                                <h3 className="font-medium text-sm md:text-base">{item.title}</h3>

                                {/* Animated arrow appears on hover */}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  <ChevronRight className="w-4 h-4 mx-auto text-slate-600 dark:text-slate-300" />
                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductShowcase;