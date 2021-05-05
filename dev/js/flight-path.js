import { gsap } from "gsap";

export let flightPathTL = gsap.timeline();

flightPathTL.to("#rocinante-flame",{scaleX:.75, duration:2});