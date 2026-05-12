import { loadTodos } from "./module/storage.js";
import { render } from "./module/ui.js";
import { setTodos } from "./data/state.js";
import { addTodo } from "./module/todoService.js";

function init() {
  const save = loadTodos(); //Tải dữ liệu công việc từ localStorage khi ứng dụng khởi động
  setTodos(save); //Cập nhật mảng todos với dữ liệu đã tải
  render(); //Hiển thị danh sách công việc trên giao diện

  document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    if (!input.value.trim()) return; //Kiểm tra nếu ô nhập liệu rỗng thì không thực hiện thêm công việc
    addTodo(input.value);
    input.value = ""; //Xóa nội dung ô nhập liệu sau khi thêm công việc
    render(); //Cập nhật giao diện sau khi thêm công việc mới
  });
}

init(); //Gọi hàm init để khởi động ứng dụng khi trang được tải
