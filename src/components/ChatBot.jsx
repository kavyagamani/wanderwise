import { useState } from "react";
import { askGemini } from "../services/geminiService";

function ChatBot({ city }) {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleAsk() {

    if (!question.trim()) return;

    try {

      setLoading(true);

      const prompt = `
      Destination: ${city}
      Question: ${question}
      `;

      const response =
        await askGemini(prompt);

      setAnswer(response);

    } catch (error) {

      console.log(error);

      setAnswer(
        "Unable to get response from AI assistant."
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <section className="chat-section">
      <div className="chat-container">

        <h2>Travel Assistant</h2>

        <div className="chat-input-group">

          <input
            type="text"
            placeholder={`Ask about ${city}...`}
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <button onClick={handleAsk}>
            Ask
          </button>

        </div>

        {loading && (
          <p className="loading">
            Thinking...
          </p>
        )}

        {answer && (
          <div className="answer-box">
            {answer}
          </div>
        )}

      </div>
    </section>
  );
}

export default ChatBot;