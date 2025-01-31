import React from "react";
import "../styles/item.css";

function TimeCapsuleItem({ capsule, onClick }) {
  return (
    <label>
      <div className="capsule-card" onClick={() => onClick(capsule)}>
        <h2>
          {capsule.title} - {capsule.userName}
        </h2>
        {capsule.imageFile && (
          <div>
            <img
              src={URL.createObjectURL(capsule.imageFile)}
              alt="Capsule Image"
            />
          </div>
        )}
        <img src={capsule.imageUrl} />
        <p>{capsule.content}</p>
        <p>Date Submitted: {capsule.dateSubmitted}</p>
      </div>
    </label>
  );
}

export default TimeCapsuleItem;
