import { gsap } from "gsap";

export let landingTL = gsap.timeline();

landingTL.to("#rocinante-flame",{duration:2, y:"+=100"},"land")
            .to("#flame",{duration:1, scaleY:0},"land")
            .to("#middle-right-gun",{rotation: 90, duration:1}, "land")
            .to("#middle-left-gun",{rotation: 90, duration:1}, "land");