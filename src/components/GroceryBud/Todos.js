import { useState } from "react";

const Todos = ({ todos, editItem, removeItem }) => {
  return (
    <>
      <div className="list__todo mt-5 d-flex flex-column justify-content-start">
        {todos?.map((todo, idx) => {
          return (
            <article className="grocery-item d-flex justify-content-between" key={todo.id}>
              <p className="title">{todo.title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(todo.id)}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(todo.id)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
