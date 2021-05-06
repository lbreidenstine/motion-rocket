import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

export let moonZoomInTL = gsap.timeline();

moonZoomInTL.to("#moon",{alpha:1, duration:7, scale:14, y:"+=1200", x:"-=300",ease:"none"})