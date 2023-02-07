$(document).ready(function () {});

$("#increment1").click(increment1);

function increment1() {
  let a = $("#Input1").val();
  a++;
  $("#Input1").val(a);
  let b = $("#item").html();
  b++;
  $("#item").html(b);
  singleprice();
}
$("#decrement1").click(decrement1);

function decrement1() {
  let c = $("#Input1").val();
  c--;
  $("#Input1").val(c);
  let d = $("#item").html();
  d--;
  $("#item").html(d);
  singleprice();
}

$("#increment2").click(increment2);

function increment2() {
  let a = $("#Input2").val();
  a++;
  $("#Input2").val(a);
  let b = $("#item").html();
  b++;
  $("#item").html(b);
  singleprice();
}
$("#decrement2").click(decrement2);

function decrement2() {
  let c = $("#Input2").val();
  c--;
  $("#Input2").val(c);
  let d = $("#item").html();
  d--;
  $("#item").html(d);
  singleprice();
}

$("#increment3").click(increment3);

function increment3() {
  let a = $("#Input3").val();
  a++;
  $("#Input3").val(a);
  let b = $("#item").html();
  b++;
  $("#item").html(b);
  singleprice();
}
$("#decrement3").click(decrement3);

function decrement3() {
  let c = $("#Input3").val();
  c--;
  $("#Input3").val(c);
  let d = $("#item").html();
  d--;
  $("#item").html(d);
  singleprice();
}

$("#selected").click(singleprice)

function singleprice() {
  let input1 = $("#Input1").val();
  let price1 = $("#price1").html();
  let totalprice1 = input1 * price1;
  let input2 = $("#Input2").val();
  let price2 = $("#price2").html();
  let totalprice2 = input2 * price2;
  let input3 = $("#Input3").val();
  let price3 = $("#price3").html();
  let totalprice3 = input3 * price3;
  let total = totalprice1 + totalprice2 + totalprice3;
  $("#price").html(total);
  totalprice(total);
}

function totalprice(t) {
  let totalprice = t + parseInt($("#selected").val());
  $("#totalprice").html(totalprice);
}
