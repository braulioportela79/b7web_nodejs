function somar(x: number, y: number): number {
  return x + y;
}

function subrtrair(x: number, y: number): number {
  return x - y;
}

function multiplicar(x: number, y: number): number {
  return x * y;
}

module.exports.somar = somar;
module.exports.subrtrair = subrtrair;
module.exports.multiplicar = multiplicar;