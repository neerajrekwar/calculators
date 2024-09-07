// app/bmi/page.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const BmiForm = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  const calculateBmi = () => {
    // Convert inputs to numbers if they are not empty
    const weightNum =
      typeof weight === "number" ? weight : parseFloat(weight as string);
    const heightNum =
      typeof height === "number" ? height : parseFloat(height as string);

    if (weightNum > 0 && heightNum > 0) {
      let weightInKg: number;
      let heightInMeters: number;

      if (unit === "imperial") {
        weightInKg = weightNum * 0.453592; // Convert pounds to kg
        heightInMeters = heightNum * 0.0254; // Convert inches to meters
      } else {
        weightInKg = weightNum;
        heightInMeters = heightNum / 100; // Convert cm to meters
      }

      const calculatedBmi = weightInKg / heightInMeters ** 2;
      setBmi(calculatedBmi);
      setAnimate(true); // Trigger animation
    } else {
      setBmi(null);
      setAnimate(false);
    }
  };

  // Define color based on BMI range
  const getBmiColor = () => {
    if (bmi === null) return "bg-gray-200";
    if (bmi < 18.5) return "bg-blue-300";
    if (bmi < 24.9) return "bg-green-300";
    if (bmi < 29.9) return "bg-yellow-300";
    return "bg-red-300";
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Weight ({unit === "metric" ? "kg" : "pounds"})
        </label>
        <input
          type="number"
          value={weight === "" ? "" : weight}
          onChange={(e) =>
            setWeight(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="border p-2 w-full"
          placeholder="Enter weight"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Height ({unit === "metric" ? "cm" : "inches"})
        </label>
        <input
          type="number"
          value={height === "" ? "" : height}
          onChange={(e) =>
            setHeight(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="border p-2 w-full"
          placeholder="Enter height"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Unit</label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
          className="border p-2 w-full"
        >
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (pounds, inches)</option>
        </select>
      </div>
      <button
        onClick={calculateBmi}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Calculate BMI
      </button>
      {bmi !== null && (
        <motion.div
          className={`mt-4 text-xl font-bold p-4 rounded ${getBmiColor()}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: animate ? 1.2 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Your BMI: {bmi.toFixed(2)}
        </motion.div>
      )}
    </div>
  );
};

export default BmiForm;
