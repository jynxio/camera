import "/style/reset.css";
import "/style/index.css";

import WebglScene from "./components/WebglScene";

const webglScene = new WebglScene();

document.body.prepend( webglScene.getDomElement() );