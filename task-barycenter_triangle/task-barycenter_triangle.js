const p1 = [4, 6];
const p2 = [12, 4];
const p3 = [10, 10];

console.log(p1, p2, p3, " ===> ", barTriang(p1, p2, p3));

function barTriang(p1, p2, p3) {
  let x0 = Math.round((p1[0] + p2[0] + p3[0]) / 3.0 * 10000) / 10000;
  let y0 = Math.round((p1[1] + p2[1] + p3[1]) / 3.0 * 10000) / 10000;
  return [x0, y0];
}