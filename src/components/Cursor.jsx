// src/components/Cursor.jsx

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const addHover = () => setHovering(true);
        const removeHover = () => setHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const updateHoverElements = () => {
            const hoverElements = document.querySelectorAll(
                "button, a, .hover-target, input, textarea",
            );
            hoverElements.forEach((el) => {
                el.addEventListener("mouseenter", addHover);
                el.addEventListener("mouseleave", removeHover);
            });
        };

        updateHoverElements();

        // Re-run if DOM changes (e.g. sections revealed)
        const observer = new MutationObserver(updateHoverElements);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 mix-blend-difference"
            animate={{
                width: hovering ? 80 : 50,
                height: hovering ? 80 : 50,
                opacity: hovering ? 0 : 1,
                backgroundColor: "rgba(255,255,255,0)",
                borderColor: "rgba(255,255,255,0.8)",
            }}
            style={{
                left: springX,
                top: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
}
