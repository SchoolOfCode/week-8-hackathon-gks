import React, { useState } from "react";
import TimeCapsuleItem from "./TimeCapsuleItem";
import Modal from "./Modal";

function TimeCapsuleList({ capsules }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="capsule-list">
      {capsules.length === 0 ? (
        <p>No capsules yet. Add one!</p>
      ) : (
        capsules.map((capsule) => (
          <TimeCapsuleItem
            key={capsule.id}
            capsule={capsule}
            onClick={() => openModal(capsule.imageUrl)} // needs to be file
          />
        ))
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}

export default TimeCapsuleList;
