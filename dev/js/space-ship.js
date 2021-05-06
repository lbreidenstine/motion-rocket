import { gsap } from "gsap";

gsap.set("#rocinante",{transformOrigin:"center"});
gsap.set("#flames",{transformOrigin:"top center"})
gsap.set("#moon",{transformOrigin:"center"});

export let spaceShipTL = gsap.timeline();

spaceShipTL.from("#landing-pad",{alpha:0, duration:1}, "fadein")
            .from("#rocinante",{alpha:0, duration:1}, "fadein")
            .to("#small-artifact",{x:10, duration:1})
            .to("#medium-artifact",{x:20, duration:2})
            .from("#middle-right-gun",{rotation: 90, duration:1}, "guns")
            .from("#middle-left-gun",{rotation: 90, duration:1}, "guns")
            .from("#flame",{alpha: 0, duration:0.5, rotation:1, yoyo:true, repeat:8,ease:"none"}, "launching")
            .to("#rocinante",{duration:0.25, rotation:1, yoyo:true, repeat:16,ease:"none"}, "launching")
            .to("#rocinante-flame",{duration:5, scale:.75, y:"-=50", ease: "power3.in"},"upAndAway")
            .to("#ground",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#right-mountain-1",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#right-mountain-2",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#left-mountain",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#landing-pad",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#middleground",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#big-artifact",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#medium-artifact",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#small-artifact",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#back-mountain",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#back-river",{duration:5, y:"+=650", ease: "power3.in"},"upAndAway")
            .to("#Rectangle",{duration:6, alpha:0},"upAndAway")
            .to("#cloud-1",{duration:8,y:"+=900",alpha:0, ease: "power3.in"},"upAndAway")
            .to("#cloud-2",{duration:7, y:"+=900",alpha:0, ease: "power3.in"},"upAndAway")
            .to("#cloud-3",{duration:8, y:"+=900",alpha:0, ease: "power3.in"},"upAndAway")
            .to("#cloud-4",{duration:5, y:"+=900",alpha:0, ease: "power3.in"},"upAndAway")
            .to("#cloud-5",{duration:6, y:"+=900",alpha:0, ease: "power3.in"},"upAndAway")
            .to("#cloud-6",{duration:7, y:"+=900",alpha:0, ease: "power3.in"},"upAndAway");