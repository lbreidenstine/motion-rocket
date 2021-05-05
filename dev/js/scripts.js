import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { spaceShipTL } from "./space-ship"
import { flightPathTL } from "./flight-path"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(zoomTL)
        .add(spaceShipTL)
        .add(flightPathTL);





GSDevTools.create();