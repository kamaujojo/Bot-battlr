import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots, onCardClick}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bots) => (
          <BotCard key={bots.id} bots={bots} onCardClick={onCardClick}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;