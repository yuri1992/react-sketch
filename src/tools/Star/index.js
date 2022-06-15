/*eslint no-unused-vars: 0*/
import './mixin';

import FabricCanvasTool from "../fabrictool";

const fabric = require("fabric").fabric;

class Star extends FabricCanvasTool {
  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => (o.selectable = o.evented = false));
    this._width = props.lineWidth;
    this._color = props.lineColor;
    this._fill = props.fillColor;
  }

  doMouseDown(o) {
    let canvas = this._canvas;
    this.isDown = true;
    let pointer = canvas.getPointer(o.e);
    this.startX = pointer.x;
    this.startY = pointer.y;
    this.star = new fabric.Star({
        left: this.startX - 100,
        top: this.startY - 100,
        stroke: this._color,
        numPoints  : 5,
        innerRadius: 50,
        outerRadius: 100,
        lineColor: this._color,
        lineWidth: this._width
    });
   
    canvas.add(this.star);
    canvas.renderAll();
  }
  
  doMouseUp(o) {
    this.isDown = false;
  }
}

export default Star;
