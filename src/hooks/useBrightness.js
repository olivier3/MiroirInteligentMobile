import { useState, useEffect, useContext } from "react";
import { startTimer, resetTimer } from "../brightness";
import Brightness from "../brightness";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";

export default function useBrightness() {
  const [opacity, setOpacity] = useState("0");
  const {brightnessIdle} = useContext(ConfigContext);

  useEffect(() => {
    startTimer(brightnessIdle);
    Brightness.change = change;
  }, []);

  const handleTouchStart = () => {
    resetTimer(brightnessIdle);
  }

  function change(opacity) {
    setOpacity(opacity);
  }

  return { opacity, handleTouchStart };
}
