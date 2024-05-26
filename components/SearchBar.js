export const SearchBar = () => {
  return (
    <div className="pad-bottom-300 pad-top-300 gap-right-500 gap-left-500 bg-secondary book-search-outer">
      <div className="book-search">
        {/* TODO: build hotkeys functionality */}
        <input
          type="text"
          id="book-search-input"
          placeholder="Use any terms to search for a service provider"
          aria-label="Search"
          maxLength="64"
          data-hotkeys="s/"
        />
        <div className="book-search-spinner hidden"></div>
        <div className="book-search-eyeglass font_icons">&#x55;</div>
      </div>
    </div>
  );
};
