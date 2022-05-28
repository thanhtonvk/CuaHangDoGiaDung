function addToCart() {
    document.getElementById("cart").innerHTML = `<li id="cart">
    <div class="item1">
        <div class="close1">
            <!-- Remove-Item -->
            <div class="alert-close1"> </div>

            <div class="image1">
                <img src="images/beptumoshi.webp" alt="item1">
            </div>
            <div class="title1">
                <p>Bếp từ Moshi</p>
            </div>
            <div class="quantity1">
                <form action="action_page.php">
                    <input type="number" name="quantity" min="1" max="10" value="1">
                </form>
            </div>
            <div class="price1">
                <p>$ 210</p>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</li>`;
    document.getElementById('soluong').innerHTML = `1 sản phẩm - 1.000.000đ`
    alert('Thêm giỏ hàng thành công')
}