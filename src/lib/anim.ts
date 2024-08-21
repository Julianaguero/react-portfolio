

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i : number) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i}
    }),
 
}