

let image = JSON.parse(localStorage.getItem("images_data"));

let urlData = location.href;
let newUrl = new URL(urlData);
let imageUrl = newUrl.searchParams.get("id");
console.log(newUrl)

let editableImage = image.find((item) => {
  return item.id == imageUrl;
});

console.log(editableImage.previewURL);

const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 400,
    height: 450,
  });
};

const setBackground = (url, canvas) => {
  fabric.Image.fromURL(url, (Img) => {
    Img.set({
      width: canvas.getWidth(),
      height: canvas.getHeight(),
      originX: "left",
      scaleX: canvas.getWidth() / Img.width,
      scaleY: canvas.getHeight() / Img.height,
      originY: "top",
    });
    canvas.backgroundImage = Img;
    $("#add-caption-btn1").mousedown(function () {
      canvas.add(textEditable);
    });

   
    $("#object-shapes").mouseup(function (e) {
      if (e.target.value == "Triangle") {
        canvas.add(Triangle);
      } else if (e.target.value == "Rectangle") {
        canvas.add(rect);
      } else if (e.target.value == "Circle") {
        canvas.add(circle);
      } else if (e.target.value == "Polygon") {
        canvas.add(polygon);
      }
    });



    canvas.renderAll();
  });
};

var textEditable = new fabric.Textbox("Editable Textbox", {
  width: 500,
  editable: true,
  backgroundColor: "White",
  borderColor: "black",
  centeredRotation: true,
  centeredScaling: true,
});

const rect = new fabric.Rect({
  fill: "Yellow",
  width: 200,
  height: 75,
  strokeWidth: 1,
  stroke: "black",
});

const circle = new fabric.Circle({
  radius: 50,
  fill: "green",
});

const Triangle = new fabric.Triangle({
  fill: "red",
  width: 200,
  height: 75,
  strokeWidth: 1,
  stroke: "black",
});

var points = [
  {
    x: 15,
    y: 35,
  },
  {
    x: 16,
    y: 55,
  },
  {
    x: 20,
    y: 37,
  },
  {
    x: 12,
    y: 67,
  },
  {
    x: 30,
    y: 50,
  },
  {
    x: 30,
    y: 44,
  },
];
var polygon = new fabric.Polygon(points, {
  left: 100,
  top: 50,
  fill: "#D81B60",
  strokeWidth: 1,
  stroke: "green",
  scaleX: 4,
  scaleY: 4,
  transparentCorners: false,
});





var canvas = initCanvas("canvas");
setBackground(editableImage.previewURL, canvas);






