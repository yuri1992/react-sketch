import './mixin';
import FabricCanvasTool from "../fabrictool";
const fabric = require("fabric").fabric;

class EraseBrush extends FabricCanvasTool {
  configureCanvas(props) {
  this._canvas.freeDrawingBrush = new fabric.EraserBrush(this._canvas);
  this._canvas.freeDrawingBrush.width = props.lineWidth;
  this._canvas.isDrawingMode = true;
  }
}

export default EraseBrush;
