const util = {
  degreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
  },

  polarToCartesian(radius: number, angle: number) {
    return {
      x: radius * Math.cos(util.degreesToRadians(angle)),
      y: radius * Math.sin(util.degreesToRadians(angle)),
    };
  },
};
export default util;
