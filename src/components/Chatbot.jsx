import { useEffect, useRef, useState } from "react";
import { chatbot } from "../data/content";
import { ChatIcon, CloseIcon, SendIcon, SparklesIcon } from "./Icons";

export default function Chatbot({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([]); // real exchanged turns only
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to newest message / typing indicator.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  async function send(text) {
    const content = text.trim();
    if (!content || loading) return;

    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        data.reply ||
        data.message ||
        "Sorry, something went wrong. Please try again.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I couldn't reach the assistant. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        className={`chat-fab ${open ? "hidden" : ""}`}
        onClick={onOpen}
        aria-label="Open AI assistant"
      >
        <SparklesIcon />
        <span>Ask about me</span>
      </button>

      {/* Panel */}
      <div className={`chat-panel ${open ? "open" : ""}`} role="dialog" aria-label="AI assistant">
        <header className="chat-header">
          <div className="chat-header-title">
            <div className="chat-avatar">
              <SparklesIcon width={18} height={18} />
            </div>
            <div>
              <strong>{chatbot.title}</strong>
              <span>{chatbot.subtitle}</span>
            </div>
          </div>
          <button className="chat-close" onClick={onClose} aria-label="Close assistant">
            <CloseIcon />
          </button>
        </header>

        <div className="chat-messages" ref={scrollRef} data-lenis-prevent>
          <div className="chat-msg assistant">
            <div className="chat-bubble">{chatbot.greeting}</div>
          </div>

          {messages.length === 0 && (
            <div className="chat-suggestions">
              {chatbot.suggestions.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              <div className="chat-bubble">{m.content}</div>
            </div>
          ))}

          {loading && (
            <div className="chat-msg assistant">
              <div className="chat-bubble typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>

        <form
          className="chat-input"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            placeholder="Ask about my experience…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button type="submit" disabled={!input.trim() || loading} aria-label="Send">
            <SendIcon width={18} height={18} />
          </button>
        </form>
        <div className="chat-foot">
          <ChatIcon width={12} height={12} /> AI-generated · may be imperfect
        </div>
      </div>
    </>
  );
}
