function chart(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = [88, 40, 79, 10, 30, 49];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;