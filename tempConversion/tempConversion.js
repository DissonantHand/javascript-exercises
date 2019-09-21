const ftoc = function(f) {
let c = (f - 32)/1.8;
c = Math.round(10*c)/10;
return c;
}

const ctof = function(c) {
  let f = (c*1.8) + 32;
  f = Math.round(10*f)/10;
  return f;
}

module.exports = {
  ftoc,
  ctof
}
