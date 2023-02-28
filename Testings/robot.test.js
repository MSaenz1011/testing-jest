const { createRobot } = require("./robot");

//1. Unidad que se esta testiando
describe("Position and Direction of the Robot", () => {
  const robot = createRobot([7, 3], "N");
  // 2. Ejecutar Instrucciones
  describe("instructions", () => {
    it("Should move according to instructions given in the string", () => {
      robot.instructions("RRRRLALALALARAALARA"); //RAALAL
      //RRRRLALALALARAALALRRAA provoca el error
      expect(robot.getPosition()).toMatchObject({
        coordinates: [10, 4],
        orientation: "E",
      });
    });
  });
});
