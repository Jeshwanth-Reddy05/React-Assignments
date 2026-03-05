import React from "react";
import { useRef } from "react";

function SearchBar({ userSearch }) { 
      const timerRef = useRef(null);
  const handleChange = (value) => {
    clearTimeout(timerRef.current);
    //set timer for stoping instant search - debounce
    timerRef.current = setTimeout(() => {
      userSearch(value);
    }, 500);
}
  return (
    <div>
      <form>
        <input
          type="text"
          autoFocus={true}
          placeholder="search country"
          className="px-2 py-1 border rounded"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
