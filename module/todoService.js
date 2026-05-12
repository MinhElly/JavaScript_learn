import { todos, setTodos } from "../data/state.js";
import { saveTodos, loadTodos } from "./storage.js";

//Khởi tạo mảng todos từ localStorage khi module được tải
export function addTodo(title) {
  const newTodo = {
    id: Date.now(), //Sử dụng timestamp làm ID duy nhất cho mỗi công việc
    text: title,
    done: false,
  };

  const newTodos = [...todos, newTodo]; //Tạo một mảng mới bằng cách sao chép mảng hiện tại và thêm công việc mới vào cuối
  setTodos(newTodos); //Cập nhật mảng todos với mảng mới
  saveTodos(newTodos); //Lưu mảng todos mới vào localStorage
}

//Hàm để xóa một công việc dựa trên ID
export function deleteTodo(id) {
  const newTodos = todos.filter((t) => t.id !== id); //Tạo một mảng mới bằng cách lọc ra công việc có ID trùng với ID cần xóa
  setTodos(newTodos); //Cập nhật mảng todos với mảng mới
  saveTodos(newTodos); //Lưu mảng todos mới vào localStorage
}

//Hàm để chuyển đổi trạng thái hoàn thành của một công việc dựa trên ID
export function toggleTodo(id) {
  const newTodos = todos.map((t) => {
    if (t.id === id) {
      return { ...t, done: !t.done }; //Nếu ID trùng, tạo một đối tượng mới với thuộc tính done được đảo ngược
    }
    return t; //Nếu ID không trùng, giữ nguyên công việc
  });
  setTodos(newTodos); //Cập nhật mảng todos với mảng mới
  saveTodos(newTodos); //Lưu mảng todos mới vào localStorage
}
