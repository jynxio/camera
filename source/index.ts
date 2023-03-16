import "/style/reset.css";
import "/style/index.css";

// import ThreeScene from "./components/ThreeScene";
import WebglScene from "./components/WebglScene";

// const three_scene = new ThreeScene();
// document.body.prepend( three_scene.getDomElement() );


const webglScene = new WebglScene();

document.body.prepend( webglScene.getDomElement() );