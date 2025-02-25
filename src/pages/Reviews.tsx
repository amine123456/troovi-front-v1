import {useState} from 'react';
import {Star, Check, Quote} from 'lucide-react';
import {motion} from 'framer-motion';

interface Review {
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar: string;
    date?: string;
}

interface ReviewCardProps {
    review: Review,
    index: number,
    key?: string
}

const reviews: Review[] = [
    {
        name: "Sarah Johnson",
        role: "Travel Enthusiast",
        comment: "Troovi helped me recover my lost laptop at the airport. The QR code system works brilliantly!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "February 2025"
    },
    {
        name: "Michael Chen",
        role: "Business Professional",
        comment: "I use Troovi for all my important devices. It's simple yet incredibly effective. I've already recommended it to my entire team.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "January 2025"
    },
    {
        name: "Emma Williams",
        role: "Pet Owner",
        comment: "Perfect for my dog's collar! Gives me peace of mind knowing he can be identified if lost. The registration process was super easy.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        date: "February 2025"
    },
];

const Card = ({className, children}: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

const ReviewCard: React.FC<ReviewCardProps> = ({review, index, key}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.2}}
            className="relative h-full"
        >
            <Card
                className={`
                    relative h-full overflow-hidden rounded-2xl
                    transition-all duration-300 ease-out
                    ${isHovered
                    ? 'bg-gradient-to-br from-white/15 to-white/10 shadow-2xl transform scale-[1.02]'
                    : 'bg-gradient-to-br from-white/10 to-white/5 shadow-lg'
                }
                `}
            >
                {/* Background blur effect - only applies to background */}
                <div className="absolute inset-0 backdrop-blur-sm"/>

                {/* Content container - no blur effect */}
                <div
                    className="relative z-10 p-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Decorative element */}
                    <div
                        className={`
                            absolute top-0 right-0 w-24 h-24 
                            bg-primary/10 rounded-full 
                            transform -translate-y-1/2 translate-x-1/2
                            transition-all duration-300
                            ${isHovered ? 'blur-2xl scale-110' : 'blur-xl'}
                        `}
                    />

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                        <Quote className={`
                            w-8 h-8 transition-colors duration-300
                            ${isHovered ? 'text-primary/40' : 'text-primary/20'}
                        `}/>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative flex-shrink-0">
                            <div className={`
                                w-16 h-16 rounded-full overflow-hidden 
                                border-2 transition-colors duration-300
                                ${isHovered ? 'border-primary/50' : 'border-primary/30'}
                            `}>
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                                <Check className="w-3 h-3 text-white"/>
                            </div>
                        </div>

                        <div className="min-w-0">
                            <h4 className="font-bold text-xl text-white truncate">{review.name}</h4>
                            <p className="text-primary/80 font-medium truncate">{review.role}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                        {Array.from({length: review.rating}).map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-300 leading-relaxed mb-6 min-h-[4.5rem]">
                        "{review.comment}"
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                        <span className="text-slate-400 text-sm">{review.date}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-emerald-400 text-sm font-medium">Verified Review</span>
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-emerald-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export const ReviewsSection: React.FC = () => {
    return (
        <section className="w-full py-32 relative overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"/>
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"/>

            {/* Geometric Patterns */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse"/>
                <div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"/>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium inline-block mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        What Our Users Say
                    </h2>
                    <p className="text-xl text-slate-300">
                        Join thousands of satisfied customers who trust Troovi
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            review={review}
                            index={index}
                            key={`${review.name}-${index}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;