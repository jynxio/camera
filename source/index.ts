import "/style/reset.css";
import "/style/index.css";

import ThreeScene from "./components/ThreeScene";

const three_scene = new ThreeScene();

document.body.prepend( three_scene.getDomElement() );
