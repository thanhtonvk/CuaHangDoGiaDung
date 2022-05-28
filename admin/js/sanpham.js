//Thay đổi trạng thái của item
function changeStatus(id, statusCode) {
    if (statusCode == 1) //Kich hoat
    {
        $(id).prop("src", "files/images/check.png");
        $(id).prop("title", "Kích hoạt");
    } else //An
    {
        $(id).prop("src", "files/images/delete.png");
        $(id).prop("title", "Ẩn");
    }
}

//Xoá danh mục
function deleteItem(id) {
    var itemID = parseInt($(id).attr("data-id"));

    if (confirm("Bạn có chắc muốn xoá dòng có ID = " + itemID + " ?")) {
        //Xoá danh mục
        //
    }
}


$(document).ready(function() {

    $(".imgTrangThai").click(function() {
        var statusCode = parseInt($(this).attr("data-code"));

        if (statusCode == 1) {
            changeStatus(this, 0);
            $(this).attr("data-code", 0);
        } else {
            changeStatus(this, 1);
            $(this).attr("data-code", 1);
        }
    });

    $(".lnkXoa").click(function() {
        deleteItem(this);
    });

});
$(document).ready(function() {

    $("#btn-them-san-pham").click(function() {
        var tensp = $('#txt-ten').val();
        var hang = $('#cb-hang').val();
        var file = $('#txt-hinh-anh').val();
        var soluong = $('#txt-so-luong').val();
        var dongia = $('#txt-don-gia').val();
        $('#sanpham').html(` <ul id="sanpham" class="danhsach-item">
		<li style="width:60px;">6</li>
		<li style="width:250px;">${tensp}</li>
		<li style="width:200px;">${hang}</li>
		<li style="width:200px;">
			<a href="https://minhlongmoto.com/wp-content/uploads/2018/10/Mau-xe-Honda-CBR-150R-2020-2.jpg" title="http://img822.imageshack.us/img822/374/nqlgfront.jpg" target="_blank">
				${file}
			</a>
		</li>
		<li style="width:80px;">${soluong}</li>
		<li style="width:130px;">${dongia}</li>
		<li style="width:80px; text-align:center;">
			<img class="imgTrangThai" name="imgTrangThai1" id="imgTrangThai1" src="files/images/check.png" alt="" width="16" height="16" data-code="1" title="Kích hoạt" />
		</li>
		<li style="width:100px; float:right; text-align:right;">
			<a class="lnkSua" name="btnSua2" id="btnSua2" data-id="2" data-trangthai="0" title="Sửa sản phẩm" href="themsanpham.html">Sửa</a>
			<a class="lnkXoa" name="btnXoa2" id="btnXoa2" data-id="2" title="Xoá sản phẩm">Xoá</a>
		</li>
	</ul>`)
    })
})