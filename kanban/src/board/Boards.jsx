import { useState } from "react";
import "../board/Boards.css";
import Cardlist from "../CardList/Cardlist"

const Boards = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  console.log({ list });
  const handleButtonClick = () => {
    setCount(count + 1);
    setList([...list, { id: count }]);
  };
  return (
    <div className="Boards">
      <div className="Add-Board">
        <p>Add Board</p>
        <button onClick={handleButtonClick}>+</button>
      </div>
      <div className="Boardlist">
        {list.map((val, index) => 
        (
          <Cardlist
            cardListIndex={index}
            list={list}
            setList={setList}
          />
        ))}
      </div>
    </div>
  );
};

export default Boards;
