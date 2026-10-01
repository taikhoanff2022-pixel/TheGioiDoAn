CƠM TẤM NHÀ MÌNH - BẢN CẬP NHẬT

Đã cập nhật:
- QR ngân hàng mới: images/qr-ngan-hang.png (MB / VietQR - LE VAN MANH - 0904956291).
- Địa chỉ: Số 110, ngõ 179 Vĩnh Hưng, Hoàng Mai, Hà Nội.
- Theo dõi đơn hàng bằng mã đơn.
- Menu phân loại theo chủ đề.
- Chỉ giữ các sản phẩm có ảnh trong bộ dữ liệu.
- Khi đặt hàng, website gửi dữ liệu tới FormSubmit với đích Gmail: taikhoanff2022@gmail.com.
- Đã bỏ FormSubmit AJAX/fetch để tránh lỗi "TypeError: Failed to fetch" và lỗi CSRF khi chạy HTML tĩnh. Website dùng POST form tới FormSubmit trong iframe ẩn.

LƯU Ý VỀ EMAIL:
Website HTML tĩnh không thể tự gửi Gmail trực tiếp nếu không có máy chủ/email service.
Bản này dùng FormSubmit. Lần đầu sử dụng, FormSubmit có thể yêu cầu chủ Gmail xác nhận/kích hoạt địa chỉ nhận.
Nếu trình duyệt hoặc FormSubmit chưa xác nhận gửi tự động, trang đặt hàng sẽ tạo nút "Mở email để gửi đơn" để không làm mất đơn.

Cách chạy:
1. Giải nén ZIP.
2. Mở thư mục site_update bằng VS Code.
3. Chạy index.html bằng Live Server.
4. Test thêm món -> giỏ hàng -> nhập thông tin -> Đặt hàng.


KÍCH HOẠT EMAIL LẦN ĐẦU:
- Sau khi mở bằng Live Server, hãy đặt thử 1 đơn. Nếu FormSubmit yêu cầu xác nhận địa chỉ nhận, hãy mở Gmail taikhoanff2022@gmail.com và bấm nút xác nhận trong email của FormSubmit.
- Sau khi xác nhận một lần, các đơn tiếp theo sẽ được chuyển tới Gmail.
- Không cần thêm CSRF token: đây là website HTML/CSS/JS tĩnh, không dùng Laravel.
