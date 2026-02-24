import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
    src: string;
    className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
    src,
    className = "absolute inset-0"
}) => {
    const ref = useRef(null);

    // Track the container's progress through the viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Shift the background vertically as it scrolls
    // We make the inner image taller than the container (180%) 
    // and shift it smoothly. A larger range makes it look "more sticky"
    const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

    return (
        <div ref={ref} className={`${className} overflow-hidden pointer-events-none`}>
            <motion.div
                className="absolute top-[-40%] left-0 w-full h-[180%] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${src})`,
                    y
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
