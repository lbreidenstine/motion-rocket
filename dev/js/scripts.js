import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { spaceShipTL } from "./space-ship"
import { flightPathTL } from "./flightPath"
import { moonZoomInTL } from "./moonZoom"
import { landingTL } from "./landing"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(zoomTL)
        .add(spaceShipTL)
        .add(flightPathTL,"zoomFlight")
        .add(moonZoomInTL,"zoomFlight")
        .add(landingTL);




GSDevTools.create();