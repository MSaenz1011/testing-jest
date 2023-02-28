exports.createRobot = function ([coordinate_x, coordinate_y], orient) {
  let x = coordinate_x;
  let y = coordinate_y;
  let orientation = orient; // dirección a la que apunta el robot "N", "E", "S", "W"

  function advance() {
    switch (orientation) {
      case "E":
        x += 1;
        break;
      case "W":
        x -= 1;
        break;
      case "N":
        y += 1;
        break;
      case "S":
        y -= 1;
        break;
    }

    //return { coordinates: [x, y], orientation }
  }

  function turnRight() {
    switch (orientation) {
      case "N":
        orientation = "E";
        break;
      case "S":
        orientation = "W";
        break;
      case "E":
        orientation = "S";
        break;
      case "W":
        orientation = "N";
        break;
    }
  }

  function turnLeft() {
    switch (orientation) {
      case "N":
        orientation = "W";
        break;
      case "S":
        orientation = "E";
        break;
      case "E":
        orientation = "N";
        break;
      case "W":
        orientation = "S";
        break;
    }
  }

  function instructions(string) {
    let arraySplit = string.split("");
    for (let i = 0; i < string.length; i++) {
      switch (arraySplit[i]) {
        case "R":
          turnRight();
          //console.log(orientation);
          break;
        case "L":
          turnLeft();
          //console.log(orientation);
          break;
        case "A":
          advance();
          break;
      }
    }
  }
  function getPosition() {
    try {
      if (x > 10 || y > 10 || x < 0 || y < 0) {
        throw new Error("Valor fuera de rango permitido");
      }
      return { coordinates: [x, y], orientation };
    } catch (error) {
      return error.message;
    }
  }

  return { advance, turnLeft, turnRight, instructions, getPosition };
};

//return { x, y };
