import { Item } from "../types/type";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}
const ItemList = ({ items, setItems }: Props) => {
  const clickDelete = (data: Item) => {
    setItems(items.filter((item: Item) => item.itemId !== data.itemId));
  };

  const clickComplete = (data: Item) => {
    setItems(
      items.map((item: Item) => {
        if (item.itemId === data.itemId) {
          return { ...item, clear: !item.clear };
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {items.map((data: Item) => {
        return (
          <li className="list-item" key={data.itemId}>
            <p className={`${data.clear ? "complete" : ""}`}>{data.itemName}</p>
            <p className={`${data.clear ? "complete" : ""}`}>{data.itemBody}</p>
            <div>
              <button
                className="button-delete"
                onClick={() => clickDelete(data)}
              >{`삭제하기`}</button>
              <button
                className="button-complete"
                onClick={() => clickComplete(data)}
              >{`완료`}</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;

// function List({ todos, setTodos }) {
//   const onDeleteHanlder = (todoId) => {
//     const newTodos = todos.filter((todo) => {
//       return todo.id !== todoId;
//     });

//     setTodos(newTodos);
//   };

//   const onEditHandler = (todoId) => {
//     const newTodos = todos.map((todo) => {
//       if (todo.id === todoId) {
//         return {
//           ...todo,
//           isDone: !todo.isDone,
//         };
//       } else {
//         return { ...todo };
//       }
//     });

//     setTodos(newTodos);
//   };

//   return (
//     <div className="list-container">
//       <h2 className="list-title">Working.. 🔥</h2>
//       <div className="list-wrapper">
//         {todos.map((todo) => {
//           if (!todo.isDone) {
//             return (
//               <Todo
//                 todo={todo}
//                 key={todo.id}
//                 setTodos={setTodos}
//                 onDeleteHanlder={onDeleteHanlder}
//                 onEditHandler={onEditHandler}
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//       <h2 className="list-title">Done..! 🎉</h2>
//       <div className="list-wrapper">
//         {todos.map((todo) => {
//           if (todo.isDone) {
//             return (
//               <Todo
//                 todo={todo}
//                 key={todo.id}
//                 setTodos={setTodos}
//                 onDeleteHanlder={onDeleteHanlder}
//                 onEditHandler={onEditHandler}
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default List;
