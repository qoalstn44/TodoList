import { useState } from "react";
import { Item } from "../types/type";
import { v4 as uuid } from "uuid";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const InsertItem = ({ items, setItems }: Props) => {
  const [itemName, setItemName] = useState("");
  const changeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const [itemBody, setItemBody] = useState("");
  const changeItemBody = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemBody(e.target.value);
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setItems([
      ...items,
      {
        itemId: uuid(),
        itemName: itemName,
        itemBody: itemBody,
        clear: false,
      },
    ]);
    setItemName("");
    setItemBody("");
  };

  return (
    <>
      제목 :
      <input
        className="task-input"
        value={itemName}
        onChange={changeItemName}
        type="text"
        required
      />
      내용 :
      <input
        className="task-input"
        value={itemBody}
        onChange={changeItemBody}
        type="text"
        required
      />
      <button className="button-add" onClick={clickButton}>{`추가하기`}</button>
    </>
  );
};

export default InsertItem;
