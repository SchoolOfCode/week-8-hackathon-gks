import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import capsulesData from "./data/capsuleData";
import TimeCapsuleList from "./components/TimeCapsuleList";
import TimeCapsuleForm from "./components/TimeCapsuleForm";

import "./Index.css";

function App() {
  const [capsules, setCapsules] = useState(capsulesData);

  const addCapsule = (newCapsule) => {
    setCapsules((prevCapsules) => [...prevCapsules, newCapsule]);
  };

  return (
    <>
      <Header />
      <TimeCapsuleForm onAddCapsule={addCapsule} />
      <TimeCapsuleList capsules={capsules} />
      <Footer />
    </>
  );
}

export default App;
