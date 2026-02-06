useState(0) trả về một mảng với hai phần tử: giá trị hiện tại của state (ở đây là count) và một hàm để cập nhật giá trị đó (ở đây là setCount).

khi ấn vào nút, hàm setCount được gọi với một hàm callback, hàm này nhận giá trị hiện tại của count và trả về giá trị mới (count + 1). React sẽ tự động cập nhật giao diện người dùng để phản ánh giá trị mới của count.