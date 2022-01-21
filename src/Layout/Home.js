import React, { useState, useEffect } from "react";
import DeckList from "./DeckList";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";

function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const ab = new AbortController();
    listDecks(ab.signal).then(setDecks);
    return () => ab.abort();
  }, []);

  return (
    <>
      <div>
        <Link to="/decks/new">
          <button className="btn btn-secondary mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg> {"  "}
            Create Deck
          </button>
        </Link>
      </div>
      <div>
        {decks.map((deck) => (
          <DeckList key={deck.id} deck={deck} />
        ))}
      </div>
    </>
  );
}

export default Home;
