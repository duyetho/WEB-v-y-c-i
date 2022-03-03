      var id=0;
var prowom1 = [

{
    image: "https://toplist.vn/images/800px/amyweddingstudio-598369.jpg",
    tit:"girl",
    namepproduct:"M1",
    price:"269000",
    
},
{
    image: "https://mimosawedding.net/wp-content/uploads/2020/05/vay-cuoi-32.jpg",
    tit:"girl",
    namepproduct:"M2",

    price:"300000",
},
{
    image: "https://cdn.shopify.com/s/files/1/0054/4830/2663/files/62_2.jpg?v=1631460802",
    tit:"girl",
    namepproduct:"M3",
    price:"450000",
},
{
    image: "https://trieucuongstudio.com/wp-content/uploads/2021/04/bst-v%C3%A1y-c%C6%B0%E1%BB%9Bi-1.jpg",
    tit:"girl",
    namepproduct:"M4",
    price:"450000",
},
{
    image: "https://thegioivestnam.com/upload/thegioivestnam/silde%202/vestchures.jpg",
    tit:"boy",
    namepproduct:"M5",
    price:"269000",
},
{
    image: "https://cf.shopee.vn/file/a14aca3c60f28e6d6b73c3237272b892",
    tit:"boy",
    namepproduct:"M6",
    price:"300000",
},
{
    image: "https://projectrunway.com.vn/Uploads/images/A%C3%B3%20vest%20nam/ao-vest-nam-dep.jpg",
    tit:"boy",
    namepproduct:"M7",
    price:"450000",
},
{
    image: "https://cavino.vn/wp-content/uploads/2018/11/gym_2166-683x1024.jpg",
    tit:"boy",
    namepproduct:"M8",
    price:"450000",
    
}  

];

for (var i=0;i<prowom1.length;i++){
    var html = `
            <div class="card text-center" >
            <p class="div">
            <img class="card-img-top" src = "${prowom1[i].image}" " alt"Card image cap" ;>
            </p>
            <div class ="card-body">
            <h5 class = "card-title">${prowom1[i].namepproduct} </h5>
            <p class = "card-text"  class= "price" style="color: red;">${ prowom1[i].price} </p>
            <button id="item${i}" class=" btn bg-success" onclick="enter(${i})">Đặt hàng</button>
            </div>
            </div>`;
    if( prowom1[i].tit=="girl"){
        productnu.innerHTML+=html
    }else{
        productnam.innerHTML+= html; 
    }
    
};

var alltotal=0;
var totalEl=0;
var newarray =[];
var notification = 0;
var namedd;
function enter(n){
    notification++;
    document.getElementById('notification').innerHTML = notification;
    alert("Bạn đã thêm vào giỏ hàng thành công.");
    var pro ={
     img : prowom1[n].image,
     title: prowom1[n].namepproduct,
     price : prowom1[n].price,
     qty:1
    }
    newarray.push(pro);
    id++;
    var i = newarray.length-1
    // for (i; i< newarray.length; i++) {
        namedd= document.getElementById("nameproduct").innerHTML+=newarray[i].title + "<br>"; // them tên sản phẩm vào bảng trnag 3

        if (id > 1) {
         document.getElementById('cartping').deleteRow(id);
         }   
        var html =`
            <tr>
                <td>${id}</td>
                <td>
                <img class="card-img-top" src = "${pro.img}" " alt="Card image cap" ;>
                </td>
                <td>${pro.title}</td>
                <td>${pro.price}</td>
                <td><input type="number" value='1' min="0"  id="product${i}" oninput="updatecar(${i})"> </td>
                <td id="total${i}">${pro.price*pro.qty}</td>
            </tr>
        `
         


    document.getElementById("cartping").innerHTML+=html;
    var row1 = `
        <tr>
            <td>Totall</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td id = "updatetotal"></td>
          </tr>`
    document.getElementById("cartping").innerHTML += row1;
    updatetotal();
    // }    
};

function updatecar(i){    
    var qty = document.getElementById('product'+i).value;
    newarray[i].qty = parseInt(qty);
    totalEl = newarray[i].qty*newarray[i].price;
    document.getElementById("total"+i).innerHTML=totalEl;
    document.getElementById('product'+i).setAttribute('value', qty)
    updatetotal()
}


function updatetotal(){
    alltotal = 0;
    for (var i of newarray){
        alltotal += i.price*i.qty;
    }
    document.getElementById("updatetotal").innerHTML=alltotal;
    document.getElementById("totaltamtinh").innerHTML=alltotal; // thêm giá trị trang them thông tin khách h
    tamtinh = alltotal; // LẤY GIÁ TRỊ TỔNG CỦA TÁT CẢ CÁC SẢN PHẨM
}

function carts(){
    document.getElementById("divcart").style.display = 'block';
    document.getElementById("header").style.display = 'none';
    
}
function backHome(){
    document.getElementById("header").style.display = 'block';
    document.getElementById("divcart").style.display = 'none';
    
  
}
function backHomeform(){
    document.getElementById("header").style.display = 'block';
    document.getElementById("form").style.display = 'none';
   
}

function payment(){
    document.getElementById("divcart").style.display = 'none';
    document.getElementById("form").style.display = 'block';
    discout() // chạy hàm giảm giá

}






// app mã giảm giá
 
var discoutt=20000;
function discout(){
    if (tamtinh>500000){
        tamtinh -=discoutt
        document.getElementById("inputdiscout").innerHTML = discoutt;
        document.getElementById("tongladd").innerHTML= tamtinh;

    }
    else{
        discoutt = 0;
        document.getElementById("inputdiscout").innerHTML = discoutt;

    }
}
    


function show() {
    document.getElementById("form").style.display = 'none';
    document.getElementById("user").style.display = 'block';
    var nameCm = frm.name.value;
    var sdtCm = frm.sdt.value;
    var emailCm = frm.email.value;
    var addressCm = frm.address.value;
    var textareCm = frm.textare.value;

    if (nameCm=='' || sdt=='' || emailCm==''|| addressCm=='' ){
        alert("Mời bạn nhập đầy đủ thông tin")
        document.getElementById("form").style.display = 'block';
        document.getElementById("user").style.display = 'none';
      
    }
    else{
    var row = "<tr>";
    row += "<td>" + nameCm + "</td>";
    row += "<td>" + sdtCm + "</td>";
    row += "<td>" + emailCm + "</td>";
    row += "<td>" + addressCm + "</td>";
    row += "<td>" + namedd + "</td>";
    row += "<td>" + tamtinh + "</td>";
    row += "<td>" + textareCm + "</td>";
    row += "</tr>";
    document.getElementById('tbl_2').innerHTML += row;}
    }