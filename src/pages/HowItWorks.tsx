import { motion } from 'framer-motion';
import { QrCode, Tag, Shield } from 'lucide-react';

interface StepCard {
    icon: any;
    title: string;
    description: string;
    color: 'blue' | 'purple' | 'green';
    moreInfo: string;
}

const steps: StepCard[] = [
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
];

const StepCard = ({step, index, key}: { step: StepCard, index: number, key?: number }) => {
    const colorMap = {
        blue: 'from-blue-500 to-blue-600',
        purple: 'from-purple-500 to-purple-600',
        green: 'from-green-500 to-green-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-full"
        >
            <div className="relative h-full group">
                {/* Card Container */}
                <div className="
                    relative h-full p-8
                    bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40
                    backdrop-blur-sm
                    rounded-2xl
                    border border-white/20 dark:border-slate-700/50
                    shadow-lg hover:shadow-2xl
                    transform hover:-translate-y-1
                    transition-all duration-300
                ">
                    {/* Animated Gradient Border */}
                    <div className={`
                        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                        bg-gradient-to-r ${colorMap[step.color]}
                        transition-opacity duration-300
                        blur-xl -z-10
                    `} />

                    {/* Step Number */}
                    <div className="absolute -top-6 left-8">
                        <div className={`
                            w-12 h-12
                            bg-gradient-to-br ${colorMap[step.color]}
                            rounded-lg
                            flex items-center justify-center
                            text-white font-bold text-xl
                            shadow-lg
                            transform group-hover:scale-110 group-hover:rotate-6
                            transition-transform duration-300
                        `}>
                            {index + 1}
                        </div>
                    </div>

                    {/* Icon */}
                    <div className={`
                        relative w-16 h-16 mb-6
                        bg-gradient-to-br ${colorMap[step.color]}
                        rounded-xl
                        flex items-center justify-center
                        transform group-hover:rotate-6
                        transition-transform duration-300
                    `}>
                        <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="
                        text-2xl font-bold mb-4
                        bg-gradient-to-r ${colorMap[step.color]} bg-clip-text text-transparent
                    ">
                        {step.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        {step.description}
                    </p>

                    {/* Additional Info */}
                    <div className="
                        mt-4 pt-4
                        border-t border-slate-200 dark:border-slate-700/50
                    ">
                        <p className="
                            text-sm text-slate-600 dark:text-slate-400
                            opacity-0 group-hover:opacity-100
                            transform translate-y-2 group-hover:translate-y-0
                            transition-all duration-300
                        ">
                            {step.moreInfo}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const HowItWorksSection = () => {
    return (
        <section className="relative w-full py-32 overflow-hidden" id={"howitworks"}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" />

            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container relative mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-24"
                >
                    <span className="
                        inline-flex items-center gap-2
                        px-6 py-2 rounded-full
                        bg-primary/10 text-primary
                        font-medium text-sm
                        transform hover:scale-105
                        transition-transform duration-300
                    ">
                        <span className="animate-bounce">✨</span>
                        Simple Process
                    </span>

                    <h2 className="
                        mt-6 mb-6
                        text-4xl md:text-5xl font-bold
                        bg-gradient-to-r from-primary via-blue-600 to-purple-600
                        bg-clip-text text-transparent
                    ">
                        How Troovi Works
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Three simple steps to protect your valuables with our innovative QR code system
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-12 mt-20">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} index={index} />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default HowItWorksSection;