import { useEffect, useState } from "react";
import Alert from "./Alert";
import Todos from "./Todos";
import "./TodoContainer.scss";

const TodoContainer = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [title, setTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState();
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (event, value) => {
    event?.preventDefault();
    if (!isEditing) {
      let newItem = {
        title: value,
        id: Date.now().toString(),
      };
      let newTodos = [...todos, newItem];
      setAlert({ show: true, type: "primary", msg: "Added item" });
      setTodos(newTodos);
    } else {
      let newTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return { ...todo, id: Date.now().toString(), title: title };
        }
        return todo;
      });
      setTodos(newTodos);
      setIsEditing(false);
      setIsEdit(false);
      setEditId(null);
      setAlert({ show: true, type: "primary", msg: "Updated item" });
    }
    setTitle("");
  };
  const handleEdit = (id) => {
    console.log("edit");
    setIsEdit(true);
    let getItem = todos.find((item) => item.id === id);
    // console.log(getItem)
    setTitle(getItem.title);
    setIsEditing(true);
    setEditId(id);
  };
  const handleRemove = (id) => {
    console.log("remove");
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setAlert({ show: true, type: "danger", msg: "Deleted item" });
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleClearAll = () => {

    setTodos([])
    setAlert({ show: true, type: "danger", msg: "Empty list" });

  }

  return (
    <>
      <div className="todo__container">
        {alert.show && (
          <Alert removeAlert={showAlert} type={alert.type} msg={alert.msg} />
        )}
        <h3>Grocery Blud</h3>

        <form
          onSubmit={(e) => {
            handleAdd(e, title);
          }}
        >
          <div className="form-control">
            <input
              type="text"
              placeholder="e.g. messi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="sunmit" className="btn-submit">
              {isEdit ? "Edit" : "Submit"}
            </button>
          </div>

          {/* <input
            type="text"
            placeholder="e.g. messi"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /> */}
          {/* <button type="sunmit" className="btn btn-submit">
            {isEdit ? "Edit" : "Submit"}
          </button> */}
        </form>
        <Todos todos={todos} editItem={handleEdit} removeItem={handleRemove} />
        {todos.length > 0 ? <button onClick={handleClearAll} className="btn-clearAll">Clear Items</button> : ""}
      </div>
    </>
  );
};

export default TodoContainer;
