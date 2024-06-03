import React from "react";

function Cardlist({ cardListIndex, list, setList, }) {
  



  const handleButtonDeleteCardlist = () => {
    console.log("index", { cardListIndex });
    console.log("list", list);
    const filteredList = list.filter((data, index) =>data.id !== cardListIndex );
    console.log("filteredList", { filteredList });
    setList(filteredList);
  };
  
  return (
    <div className="Cardlist">
      <div className="deleteCardListButtonParent">
                  <h1>{cardListIndex}</h1>
        <button
          className="deleteCardListButton"
          onClick={() => handleButtonDeleteCardlist()}
        >
       X
        </button>
      </div>
      <button className="add-card-btn" >
        Add Card
      </button>
    </div>
  );
}

export default Cardlist;
