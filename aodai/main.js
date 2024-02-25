function addToCart() {
    // Lấy thông tin sản phẩm
    var productName = document.getElementById("productName").innerText;
    // var productPrice = document.getElementById("productPrice").innerText;

    // Kiểm tra xem localStorage có tồn tại không
    if (typeof(Storage) !== "undefined") {
        // Kiểm tra xem giỏ hàng đã tồn tại trong localStorage chưa
        if (localStorage.cart) {
            // Nếu đã tồn tại, lấy giỏ hàng từ localStorage và chuyển sang kiểu mảng
            var cart = JSON.parse(localStorage.getItem("cart"));
        } else {
            // Nếu chưa tồn tại, tạo một giỏ hàng mới
            var cart = [];
        }

        // Thêm sản phẩm vào giỏ hàng
        var item = {
            name: productName,
            price: productPrice
        };
        cart.push(item);

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    } else {
        alert("Sorry, your browser does not support web storage. Please upgrade your browser.");
    }
}