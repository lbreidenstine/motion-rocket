import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#back-mountain",{transformOrigin:"center"});
gsap.set("#middleground",{transformOrigin:"center top"})
gsap.set("#ground",{transformOrigin:"center top"})
gsap.set("#left-mountain",{transformOrigin:"center top"})
gsap.set("#right-mountain-2",{transformOrigin:"center top"})
gsap.set("#right-mountain-1",{transformOrigin:"center top"});

zoomTL.from("#back-mountain",{scale: 10, duration: 5, y:"+=900"})
        .from("#middleground",{scale: 10, duration: 4, y:"+=900"},"-=3.25")
        .from("#back-river",{alpha: 0, duration: .5},"-=1.25")
        .from("#ground",{alpha: 0, duration: .5},"-=.75")
        .from("#left-mountain", {alpha: 0, duration: 1},"-=.75")
        .from("#right-mountain-2", {alpha: 0, duration: 1},"-=.65")
        .from("#right-mountain-1", {alpha: 0, duration: 1},"-=.55")
        .from("#cloud-1",{alpha: 0, duration: 1},"-=1")
        .from("#cloud-2",{alpha: 0, duration: .5})
        .from("#cloud-3",{alpha: 0, duration: 1},"-=1")
        .from("#cloud-4",{alpha: 0, duration: .5})
        .from("#cloud-5",{alpha: 0, duration: 1},"-=1")
        .from("#cloud-6",{alpha: 0, duration: .5})
        .from("#moon",{alpha: 0, duration: 2});