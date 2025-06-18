import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Base64-encoded audio
const correctSoundData = "data:audio/mp3;base64,//uQx...";
const wrongSoundData = "data:audio/mp3;base64,//uQx...";

// Types
type TagType = "asset" | "liability";
type Color = "green" | "red" | "none";

interface TagData {
  label: string;
  type: TagType;
  disabled?: boolean;
  color?: Color;
}

interface TagProps {
  label: string;
  onDragStart?: (e: React.DragEvent, label: string) => void;
  disabled?: boolean;
  color?: Color;
  submitted?: boolean;
}

interface DropZoneProps {
  title: string;
  onDrop: (e: React.DragEvent, type: TagType) => void;
  tags: TagData[];
  type: TagType;
  submitted: boolean;
}

// Initial tags
const tagsData: TagData[] = [
  { label: "Cash", type: "asset" },
  { label: "Lands", type: "asset" },
  { label: "Buildings", type: "asset" },
  { label: "Loans", type: "liability" },
  { label: "Accounts Receivables", type: "asset" },
  { label: "Bills Payable", type: "liability" },
  { label: "Patents", type: "asset" },
  { label: "Mortgages", type: "liability" },
];

const Tag: React.FC<TagProps> = ({
  label,
  onDragStart,
  disabled = false,
  color = "none",
  submitted = false,
}) => (
  <motion.div
    className={`px-4 py-2 border rounded shadow-md m-1 text-center text-black
      ${submitted && color === "green" ? "bg-green-200" : ""}
      ${submitted && color === "red" ? "bg-red-200" : ""}
      ${!submitted ? "bg-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-grab"}`}
    draggable={!disabled}
    onDragStart={(e) => onDragStart?.(e, label)}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.div>
);

const DropZone: React.FC<DropZoneProps> = ({
  title,
  onDrop,
  tags,
  type,
  submitted,
}) => (
  <div
    className="flex-1 border p-4 m-2 rounded-lg min-h-[200px] bg-gray-100"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => onDrop(e, type)}
  >
    <h2 className="font-semibold mb-2 text-center text-black">{title}</h2>
    <motion.div layout className="flex flex-wrap justify-center">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          color={tag.color}
          submitted={submitted}
        />
      ))}
    </motion.div>
  </div>
);

export default function TagSortingGame() {
  const [availableTags, setAvailableTags] = useState<TagData[]>(tagsData);
  const [assets, setAssets] = useState<TagData[]>([]);
  const [liabilities, setLiabilities] = useState<TagData[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [scoreData, setScoreData] = useState<{ correct: number; incorrect: number }>({
    correct: 0,
    incorrect: 0,
  });

  const correctAudio = new Audio(correctSoundData);
  const wrongAudio = new Audio(wrongSoundData);

  useEffect(() => {
    const saved = localStorage.getItem("tagGameState");
    if (saved) {
      const {
        available,
        assets,
        liabilities,
        submitted,
        scoreData,
      } = JSON.parse(saved);
      setAvailableTags(available);
      setAssets(assets);
      setLiabilities(liabilities);
      setSubmitted(submitted);
      setScoreData(scoreData || { correct: 0, incorrect: 0 });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tagGameState",
      JSON.stringify({
        available: availableTags,
        assets,
        liabilities,
        submitted,
        scoreData,
      })
    );
  }, [availableTags, assets, liabilities, submitted, scoreData]);

  const onDragStart = (e: React.DragEvent, label: string) => {
    e.dataTransfer.setData("text/plain", label);
  };

  const handleDrop = (e: React.DragEvent, dropZoneType: TagType) => {
    if (submitted) return;

    const label = e.dataTransfer.getData("text/plain");
    const tag = availableTags.find((t) => t.label === label);
    if (!tag || tag.disabled) return;

    const droppedTag: TagData = { ...tag, color: "none" };

    if (dropZoneType === "asset") {
      setAssets((prev) => [...prev, droppedTag]);
    } else {
      setLiabilities((prev) => [...prev, droppedTag]);
    }

    setAvailableTags((prev) =>
      prev.map((t) => (t.label === label ? { ...t, disabled: true } : t))
    );
  };

  const handleSubmit = () => {
    let correct = 0;
    let incorrect = 0;

    const evaluate = (list: TagData[], type: TagType): TagData[] =>
      list.map((tag) => {
        const isCorrect = tag.type === type;
        if (isCorrect) correct++;
        else incorrect++;
        return { ...tag, color: isCorrect ? "green" : "red" };
      });

    setAssets((prev) => evaluate(prev, "asset"));
    setLiabilities((prev) => evaluate(prev, "liability"));
    setSubmitted(true);
    setScoreData({ correct, incorrect });

    const finalAudio = new Audio("data:audio/mp3;base64,//uQxAA...");
    finalAudio.play();
  };

  const handleReset = () => {
    setAvailableTags(tagsData);
    setAssets([]);
    setLiabilities([]);
    setSubmitted(false);
    setScoreData({ correct: 0, incorrect: 0 });
    localStorage.removeItem("tagGameState");
  };

  const totalDropped = assets.length + liabilities.length;
  const totalTags = tagsData.length;
  const progressPercent = (totalDropped / totalTags) * 100;
  const finalScore = scoreData.correct - scoreData.incorrect * 0.25;

  return (
    <div className="p-4 max-w-4xl mx-auto text-black">
      <h1 className="text-2xl font-bold text-center mb-4">🧠 Sort the Tags</h1>

      <section className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-center mb-2 font-semibold text-black">Available Tags</h2>
        <div className="flex flex-wrap justify-center">
          {availableTags.map((tag) => (
            <Tag
              key={tag.label}
              label={tag.label}
              disabled={tag.disabled}
              onDragStart={onDragStart}
              submitted={submitted}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row bg-white rounded shadow p-4">
        <DropZone
          title="Assets"
          onDrop={handleDrop}
          tags={assets}
          type="asset"
          submitted={submitted}
        />
        <DropZone
          title="Liabilities"
          onDrop={handleDrop}
          tags={liabilities}
          type="liability"
          submitted={submitted}
        />
      </section>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-center mt-2">
        {totalDropped} / {totalTags} tags classified
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className={`px-4 py-2 rounded text-white ${
            submitted ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Submit ✅
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset 🗑️
        </button>
      </div>

      {submitted && (
        <div className="text-center mt-6 p-4 bg-green-50 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">📊 Result</h3>
          <p>✅ Correct: {scoreData.correct}</p>
          <p>❌ Incorrect: {scoreData.incorrect}</p>
          <p className="mt-2 font-bold text-xl">
            Final Score: {finalScore.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
