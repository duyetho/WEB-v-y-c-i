Array = []
for (let i = 0; i < 1; i++) {
    var html = `
        <div class="card">
        <img class="card-img-top" src="https://image.yes24.vn/Upload/ProductImage/Gmarket/1905808_L.jpg?width=550&height=550" alt="Card image cap" style="width:300px";>
        <div class ="card-body">
            <h5 class = "card-title">Áo len nữ</h5>
            <p class = "card-text" id= "price">469.000 VND</p>
            <a href="#" class ="btn btn-sucess">Đặt mua</a>
        </div>
        </div>

        <div class="card">
        <img class="card-img-top" src="https://khanchoangthieuhoa.com/wp-content/uploads/2021/12/cac-kieu-ao-len-dan-tay-dep.jpeg" alt="Card image cap" style="width:300px";>
        <div class ="card-body">
            <h5 class = "card-title">Áo len nữ</h5>
            <p class = "card-text" id= "price">369.000 VND</p>
            <a href="#" class ="btn btn-sucess">Đặt mua</a>
        </div>
        </div>

        <div class="card">
        <img class="card-img-top" src="https://tuvanchonmua.vn/datafiles/3/2020-04-29/79302690-8ae4d88c2c2d272519a83df0601507b8.jpeg" style="width:300px";>
        <div class ="card-body">
            <h5 class = "card-title">Áo len nữ</h5>
            <p class = "card-text" id= "price">569.000 VND</p>
            <a href="#" class ="btn btn-sucess">Đặt mua</a>
        </div>
        </div>
    `;
    Array[i] = html;
    var app = document.querySelector('.nu');
    app.innerHTML += Array[i];

    for (let i = 0; i < 1; i++) {
        var namm = `
            <div class="card">
            <img class="card-img-top" src="https://kabek.vn/wp-content/uploads/2020/04/phong_cach_thoi_trang_thuog_ngay_cua_son_tung3-564x700.jpg" alt="Card image cap" style="width:300px ;height:500px ";>
            <div class ="card-body">
                <h5 class = "card-title"> Giày đẹp</h5>
                <p class = "card-text" id= "price">$59.000 </p>
                <a href="#" class ="btn btn-sucess">Đặt mua</a>
            </div>
            </div>
    
            <div class="card">
            <img class="card-img-top" src="https://kabek.vn/wp-content/uploads/2020/04/phong_cach_thoi_trang_thuog_ngay_cua_son_tung3-564x700.jpg" alt="Card image cap" style="width:300px ;height:500px ";>
            <div class ="card-body">
                <h5 class = "card-title"> Giày đẹp</h5>
                <p class = "card-text" id= "price">$59.000 </p>
                <a href="#" class ="btn btn-sucess">Đặt mua</a>
            </div>
            </div>
            
            <div class="card">
            <img class="card-img-top" src="https://vcdn-giaitri.vnecdn.net/2021/01/27/mtp-tung-3-2730-1611762227.jpg" alt="Card image cap" style="width:300px;height:500px ";>
            <div class ="card-body">
                <h5 class = "card-title">Bộ vét nam</h5>
                <p class = "card-text" id= "price">$69.000 </p>
                <a href="#" class ="btn btn-sucess">Đặt mua</a>
            </div>
            </div>
    
            <div class="card">
            <img class="card-img-top" src="https://1.bp.blogspot.com/-W0zi7p5JMhs/XnMB0tJifFI/AAAAAAAAZKY/AGBFufDQBTUU1-VvAhJs1Rgb4GvFf9OswCLcBGAsYHQ/s1600/Son-Tung-MPT%2B%252813%2529.jpg" style="width:300px ;height:500px ";>
            <div class ="card-body">
                <h5 class = "card-title">Áo phông Nam</h5>
                <p class = "card-text" id= "price">$9.000</p>
                <a href="#" class ="btn btn-sucess">Đặt mua</a>
            </div>
            </div>
        `;
        Array[i] = namm;
        var app = document.querySelector('.Nam');
        app.innerHTML += Array[i];
    }
}