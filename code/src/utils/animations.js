export const deferredPageAnimations = {
    animate: {
        transition: { staggerChildren: 0.05 },
    },
    exit: {
        transition: { staggerChildren: 0.05 },
    },
};

export const initAnimations = (isComingFromPrevious = true) => ({
    initial: { x: isComingFromPrevious ? -100 : 100, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
});

export const exitAnimations = (isGoingNext = true) => ({
    exit: {
        x: isGoingNext ? 200 : -200,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
});
