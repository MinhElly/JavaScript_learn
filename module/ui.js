import { todos } from "../data/state.js";
import { deleteTodo, toggleTodo } from "./todoService.js";

export function render() {
  const list = document.getElementById("todoList"); //Lấy phần tử ul có id là todoList để hiển thị danh sách công việc

  list.innerHTML = ""; //Xóa nội dung hiện tại của phần tử ul để chuẩn bị hiển thị danh sách công việc mới

  //Duyệt qua mảng todos và tạo phần tử li cho mỗi công việc, sau đó thêm vào phần tử ul
  todos.forEach((todo) => {
    const li = document.createElement("li"); //Tạo một phần tử li mới để hiển thị công việc

    li.className = "todo"; //Đặt class cho phần tử li để có thể áp dụng CSS

    //Nếu công việc đã hoàn thành (todo.done là true), thêm class "done" vào phần tử li để hiển thị công việc đã hoàn thành
    if (todo.done) {
      li.classList.add("done");
    }

    //Đặt nội dung HTML cho phần tử li, bao gồm tiêu đề công việc và hai nút để chuyển đổi trạng thái hoàn thành và xóa công việc
    li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button class="toggle">✔</button>
                <button class="delete">❌</button>
            </div>
        `;

    //Thêm sự kiện click cho nút chuyển đổi trạng thái hoàn thành, khi được nhấn sẽ gọi hàm toggleTodo với ID của công việc và sau đó gọi hàm render để cập nhật giao diện
    li.querySelector(".toggle").addEventListener("click", () => {
      toggleTodo(todo.id);
      render();
    });

    //Thêm sự kiện click cho nút xóa, khi được nhấn sẽ gọi hàm deleteTodo với ID của công việc và sau đó gọi hàm render để cập nhật giao diện
    li.querySelector(".delete").addEventListener("click", () => {
      deleteTodo(todo.id);
      render();
    });

    list.appendChild(li); //Thêm phần tử li vào phần tử ul để hiển thị công việc trên giao diện
  });
}
