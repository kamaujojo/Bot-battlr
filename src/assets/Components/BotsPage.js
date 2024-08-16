import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  // fetching data from backend
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  // Add or remove bot from YourBotArmy
  function handleClick(bot) {
    setSelectedBots((prevSelectedBots) => {
      const isBotSelected = prevSelectedBots.some(
        (selectedBot) => selectedBot.id === bot.id
      );

      if (isBotSelected) {
        return prevSelectedBots.filter(
          (selectedBot) => selectedBot.id !== bot.id
        );
      } else {
        // Add bot to YourBotArmy
        return [...prevSelectedBots, bot];
      }
    });
  }

  // Release a bot from YourBotArmy
  function handleRelease(bot) {
    setSelectedBots((prevSelectedBots) =>
      prevSelectedBots.filter((selectedBot) => selectedBot.id !== bot.id)
    );
  }


  // Discharge a bot (delete from backend and remove from selectedBots)
  function handleDischarge(botId) {
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
    .then((response) => {
      if (response.ok) {
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
        setSelectedBots((prevSelectedBots) =>
          prevSelectedBots.filter((bot) => bot.id !== botId)
        );
      }
    });
  }

  return (
    <div>
      <YourBotArmy
        bots={selectedBots}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <BotCollection bots={bots} onCardClick={handleClick} />
    </div>
  );
}

export default BotsPage;