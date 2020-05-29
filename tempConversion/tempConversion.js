const ftoc = function(ftemp) {
  let ctemp = (ftemp - 32) * (5/9);
  let rounded = Math.round(ctemp * 10) / 10;
  return rounded;
}

const ctof = function(ctemp) {
  let ftemp = ctemp * (9/5) + 32;
  let rounded = Math.round(ftemp * 10) / 10;
  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
