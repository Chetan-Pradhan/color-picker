import { useState } from "react";
import styles from "./colorpicker.module.css";

export default function Colorpicker() {
  const [color, setColor] = useState("#33ffda");

  function removeFood(index) {
    setColor(color.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.colorPicker}>
      <h1 className={styles.heading}>Color picker</h1>
      <div className={styles.colors} style={{ backgroundColor: color }}>
        <h1 className={styles.colorCode}>{color}</h1>
      </div>
      <h1>Set color:</h1>
      <input
        className={styles.inputStyle}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
