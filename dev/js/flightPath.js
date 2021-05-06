import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightPathTL = gsap.timeline();

flightPathTL.to("#rocinante-flame", {
    duration: 8,
    motionPath: {
        path: "#flightPath",
        align:"#flightPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90
    },
    ease:"power2.out",
    scale:.5
});

