import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

const layer = new Konva.Layer();


const lemon = new Konva.Group({
  x: stage.width() / 2,
  y: stage.height() / 2,
  draggable: true
});

const leftBump = new Konva.Ellipse({
  x: -118,
  y: 0,
  radiusX: 22,
  radiusY: 16,
  fill: 'yellow',
  stroke: 'goldenrod',
  strokeWidth: 4
});

const rightBump = new Konva.Ellipse({
  x: 118,
  y: 0,
  radiusX: 22,
  radiusY: 16,
  fill: 'yellow',
  stroke: 'goldenrod',
  strokeWidth: 4
});

const body = new Konva.Ellipse({
  x: 0,
  y: 0,
  radiusX: 110,
  radiusY: 80,
  fill: 'yellow',
  stroke: 'goldenrod',
  strokeWidth: 4
});

const pedicel = new Konva.Line({
  points: [-135, -5, -160, -25],
  stroke: 'saddlebrown',
  strokeWidth: 6,
  lineCap: 'round'
});

lemon.add(leftBump, rightBump, body, pedicel);
layer.add(lemon);

lemon.on('mouseover', () => {
  stage.container().style.cursor = 'pointer';
});

lemon.on('mouseout', () => {
  stage.container().style.cursor = 'default';
});

lemon.on('mousedown', () => {
  new Konva.Tween({
    node: lemon,
    duration: 0.15,
    scaleX: 1.1,
    scaleY: 1.1,
    easing: Konva.Easings.EaseOut
  }).play();
});

stage.on('mouseup', () => {
  new Konva.Tween({
    node: lemon,
    duration: 0.15,
    scaleX: 1,
    scaleY: 1,
    easing: Konva.Easings.EaseOut
  }).play();
});

stage.add(layer);
