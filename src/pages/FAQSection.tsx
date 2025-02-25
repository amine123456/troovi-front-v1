import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, Plus, Minus, Search } from 'lucide-react';

interface FAQ {
    q: string;
    a: string;
    category?: string;
}

const faqs: FAQ[] = [
    {
        q: "How does Troovi work?",
        a: "Troovi uses QR code technology to create unique identifiers for your valuables. When scanned, these codes provide a secure way for finders to contact you without revealing your personal information. The entire process is encrypted and secure.",
        category: "General"
    },
    {
        q: "Is my information secure?",
        a: "Yes, we use bank-level encryption to protect your data. Only the information you choose to share is visible when your QR code is scanned. We never sell your data to third parties, and you can delete your information at any time.",
        category: "Security"
    },
    {
        q: "What items can I protect with Troovi?",
        a: "You can protect almost anything - laptops, phones, keys, wallets, bags, and even pet collars. Our QR codes are designed to be durable and long-lasting, with options for different surfaces and weather conditions.",
        category: "Products"
    },
    {
        q: "How much does it cost?",
        a: "We offer various packages starting from basic protection to premium services. Our starter pack begins at $19.99 for 10 QR stickers. Visit our pricing page for detailed information on all our packages and subscription options.",
        category: "Pricing"
    },
    {
        q: "What happens when someone finds my lost item?",
        a: "When someone scans your QR code, they'll be directed to a secure page where they can send you a message about your lost item. You'll receive instant notifications, and can communicate safely without sharing personal details.",
        category: "Usage"
    },
    {
        q: "Can I transfer QR codes between items?",
        a: "While our QR codes are designed to be permanent for security reasons, we offer special removable options for temporary use. However, we recommend using dedicated codes for each item to maintain tracking accuracy.",
        category: "Products"
    },
    {
        q: "Do I need to pay a subscription fee?",
        a: "We offer both one-time purchases and subscription plans. While basic QR code functionality is permanent with no recurring fees, premium features like instant notifications and location tracking require an active subscription.",
        category: "Pricing"
    },
    {
        q: "What happens if my QR code gets damaged?",
        a: "Our QR codes are designed to be highly durable and weather-resistant. However, if a code becomes damaged, we offer free replacements for premium subscribers and a minimal fee for basic users. The new code will be linked to your existing account.",
        category: "Support"
    },
    {
        q: "Can I customize my QR code design?",
        a: "Yes! Premium users can customize their QR codes with colors and logos while maintaining full functionality. We also offer various size options and materials to match your aesthetic preferences.",
        category: "Products"
    },
    {
        q: "Is Troovi available internationally?",
        a: "Yes, Troovi works worldwide! Our QR codes can be scanned by any smartphone, and our platform supports multiple languages and international shipping for our products.",
        category: "General"
    }
];

const FAQCard = ({faq, index, key}: { faq: FAQ, index: number, key?: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div
                className={`
                    group relative
                    p-6 rounded-2xl
                    bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40
                    backdrop-blur-sm
                    border border-slate-200 dark:border-slate-700/50
                    hover:border-purple-200 dark:hover:border-purple-800/50
                    transition-all duration-300
                    ${isExpanded ? 'shadow-lg' : 'hover:shadow-md'}
                `}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Category Tag */}
                {faq.category && (
                    <span className="
                        absolute top-4 right-4
                        px-3 py-1 text-xs
                        rounded-full
                        bg-purple-100 dark:bg-purple-900/30
                        text-purple-600 dark:text-purple-400
                        font-medium
                    ">
                        {faq.category}
                    </span>
                )}

                <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="
                        w-12 h-12 rounded-xl
                        bg-gradient-to-br from-purple-500/20 to-purple-600/20
                        dark:from-purple-500/10 dark:to-purple-600/10
                        flex-shrink-0 flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300
                    ">
                        <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                                {faq.q}
                            </h3>
                            <button
                                className="mt-1 text-purple-500 hover:text-purple-600 transition-colors"
                                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                            >
                                {isExpanded ? (
                                    <Minus className="w-5 h-5" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const FAQSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleFAQs, setVisibleFAQs] = useState(4); // State to track visible FAQs

    const filteredFAQs = faqs.filter(faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to handle "Show More" and "Show Less"
    const toggleVisibleFAQs = () => {
        if (visibleFAQs === 4) {
            setVisibleFAQs(filteredFAQs.length); // Show all FAQs
        } else {
            setVisibleFAQs(4); // Show only 4 FAQs
        }
    };

    return (
        <section className="relative w-full py-32 overflow-hidden" id={"faq"}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-800" />

            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="container relative mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="
                        inline-flex items-center gap-2
                        px-6 py-2 rounded-full
                        bg-purple-100 dark:bg-purple-900/30
                        text-purple-700 dark:text-purple-400
                        font-medium text-sm
                    ">
                        <MessageCircle className="w-4 h-4" />
                        Have Questions?
                    </span>

                    <h2 className="
                        mt-6 mb-6
                        text-4xl md:text-5xl font-bold
                        bg-gradient-to-r from-purple-600 to-blue-600
                        bg-clip-text text-transparent
                    ">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Everything you need to know about Troovi
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="
                            relative
                            flex items-center
                            bg-white dark:bg-slate-800
                            rounded-full
                            shadow-md
                            transition-all duration-300
                            focus-within:shadow-lg
                        ">
                            <Search className="w-5 h-5 text-slate-400 ml-4" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="
                                    w-full py-3 px-4
                                    bg-transparent
                                    text-slate-900 dark:text-white
                                    placeholder-slate-400
                                    focus:outline-none
                                "
                            />
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Grid */}
                <div className="max-w-4xl mx-auto grid gap-6">
                    {filteredFAQs.slice(0, visibleFAQs).map((faq, index) => (
                        <FAQCard key={index} faq={faq} index={index} />
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {filteredFAQs.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={toggleVisibleFAQs}
                            className="
                                group
                                inline-flex items-center gap-2
                                px-8 py-4
                                bg-white dark:bg-slate-800
                                hover:bg-purple-50 dark:hover:bg-slate-700
                                text-purple-600 dark:text-purple-400
                                font-medium
                                rounded-xl
                                shadow-md hover:shadow-lg
                                transition-all duration-300
                            "
                        >
                            {visibleFAQs === 4 ? "Show More" : "Show Less"}
                            <ArrowRight className="
                                w-4 h-4
                                transform group-hover:translate-x-1
                                transition-transform duration-300
                            " />
                        </button>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default FAQSection;