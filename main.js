//Bài 1:Tìm số nguyên dương nhỏ nhất

function timSoDuong(){
    var so = soDuongNhoNhat();
    document.getElementById("kq").innerHTML = ("Số dương nhỏ nhất là: ") + so;
}

function soDuongNhoNhat(n){
   var n = 1;
    var tong = 0;
    if(n > 0){
        while(tong < 10000){
            tong += n;
            n++;
        }
        return n;
    }else{
        alert("Bạn phải nhập số dương");
    }
}


//Bài 2:Tính tổng 2 số nguyên
function tinhTong(){
    var tong2so = tongLuyThua();
    document.getElementById("kqTong").innerHTML = ("Tổng của 2 số là: ") + tong2so;
}

function tongLuyThua(x,n){
    var x = document.getElementById("txtX").value;
    var n = document.getElementById("txtN").value;
    var lt = 1;
    var tong = 0;

    for(var i=1; i<=n; i++){
        lt = lt * x;
        tong += lt;
    }
    return tong;
}

//Bài 3: Tính giai thừa
function tinhGiaiThua(){
    var n = document.getElementById("txtSo").value;
    var giaiThua = xuLyGiaiThua();
    document.getElementById("kqGiaiThua").innerHTML = ("Giai thừa của số ") + n + (" là: ") + giaiThua;
}

function xuLyGiaiThua(n){
    var n = document.getElementById("txtSo").value;
    var gt = 1;
    for (var i = 1 ;i <= n; i++){
        gt *= i;
    }
    return gt;
}


//Bài 4: chẵn div màu đỏ, lẻ div màu xanh
function taoTheDiv(){
    for (var i = 1; i <= 10; i++){
        var div = document.createElement("div");
        var theDiv = document.getElementById("kqTheDiv");
        div.style.height = "30px";
        div.style.width = "300px";
        theDiv.appendChild(div);
        if( i%2 == 0){
            div.style.backgroundColor = "red";
        }else{
            div.style.backgroundColor = "blue";
        }
    }
   
}
