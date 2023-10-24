function showDiemTong() {
  let Ly = parseInt(document.getElementById("Ly").value);
  let Hoa = parseInt(document.getElementById("Hoa").value);
  let Sinh = parseInt(document.getElementById("Sinh").value);
  let tong_diem = Ly + Hoa + Sinh;
  document.getElementById("tong").addEventListener("click", alert("Tổng điểm 3 môn là: " +tong_diem));
}
document.getElementById("tong").addEventListener("click", showDiemTong);
/******************************************************************************/
function showDiemTb() {
  let Ly = parseInt(document.getElementById("Ly").value);
  let Hoa = parseInt(document.getElementById("Hoa").value);
  let Sinh = parseInt(document.getElementById("Sinh").value);
  let trung_binh = (Ly + Hoa + Sinh) / 3;
  let avg = document.getElementById("avg");
  avg.addEventListener("click", alert("Điểm trung bình 3 môn là: " +trung_binh));
}
document.getElementById("avg").addEventListener("click", showDiemTb);
/*******************Tinh diem tong va trung binh cong*************************/
function convertCtoF() {
  let result;
  let celcius = document.getElementById("celcius").value;
  let fahrenheit = (9 * celcius) / 5 + 32;
  result = document.getElementById("Result").innerHTML =
    "Result: " + fahrenheit +"F";
}
document.getElementById("C-to-F").addEventListener("click", convertCtoF);
/**********************Chuyen doi do C sang do F*********************/

const pi = 3.14;
function chuVi() {
  let r = document.getElementById("bankinh").value;
  let chuvi = 2 * pi * r;
  let result1 = document.getElementById("chuvi");
  result1.addEventListener("click", alert("Chu vi của hình tròn có bán kính bằng " +r +" là: " +chuvi));
}
document.getElementById("chuvi").addEventListener("click", chuVi);

/**********************************************************************/

function dienTich() {
  let r = document.getElementById("bankinh").value;
  let dientich = pi * r * r;
  let result2 = document.getElementById("dientich");
  result2.addEventListener("click", alert("Diện tích của hình tròn có bán kính bằng " +r +" là: " +dientich));
}
document.getElementById("dientich").addEventListener("click", dienTich);
/************************Chu vi va dien tich hinh tron********************/
