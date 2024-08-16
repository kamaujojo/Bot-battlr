import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bots, onCardClick }) {
  return (
    <div className="ui column">
      <div className="ui card" onClick={() => onCardClick(bots)}>
        <div className="image">
          <img alt="oh no!" src={bots.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bots.name}
            <i className={botTypeClasses[bots.bots_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bots.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bots.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bots.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bots.armor}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;