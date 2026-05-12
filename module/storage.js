const KEY = "lifeos_todos";

//Chuyển đổi mảng todos thành chuỗi JSON và lưu vào localStorage
export function saveTodos(todos) {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

//Đọc dữ liệu từ localStorage, nếu có thì chuyển đổi từ chuỗi JSON thành mảng và trả về, nếu không có thì trả về mảng rỗng
export function loadTodos() {
  const data = localStorage.getItem(KEY);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}
