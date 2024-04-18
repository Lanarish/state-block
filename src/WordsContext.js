// TaskContext.js
import React, { createContext, useState, useEffect } from "react";

const WordsContext = createContext();

const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        " http://itgirlschool.justmakeit.ru/api/words"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      setWords(data); // Инициализация состояния words через контекст
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };
  const handleSave = async (value, id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          body: JSON.stringify({
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: [],
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      loadData();
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  return (
    <WordsContext.Provider value={{ words, addWord, setWords, handleSave }}>
      {children}
    </WordsContext.Provider>
  );
};

export { WordsProvider, WordsContext };
