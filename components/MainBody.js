import { SearchResultCard } from "./SearchResultCard";

export const MainBody = ({ allMHDdata }) => {
  return (
    <>
      <div className="[ filter-refine-pills ] [ display-none sm:display-block ] [ text-rtl gap-right-500 gap-top-300 gap-bottom-300 line-height-700 z-1 ]"></div>
      <div
        id="clear-all-filters"
        className="link-pointer-no-display gap-bottom-300 gap-left-500 display-none sm:display-inline-block"
        data-variant="invert"
      >
        Clear all filters
      </div>
      <div className="[ display-none sm:display-block ]">
        {/* {{ partial "search.html" . }} */}
      </div>
      <div
        id="map"
        className="[ gap-right-500 gap-left-500 gap-bottom-500 display-none ]" //TODO: implement map
      ></div>
      <div className="gap-left-500 gap-right-500 center-content">
        <i>Search results displayed in alphabetical order</i>
      </div>
      <div className="mhd-tiles" id="mhd-tiles-search-result">
        {allMHDdata
          .slice(0, 4)
          .map((provider) =>
            provider.locations.map((location) => (
              <SearchResultCard
                mentalHealthProvider={provider}
                location={location}
                key={provider.id}
              />
            ))
          )}
      </div>
      <div className="center-content gap-bottom-major">
        <button
          //TODO: class:hide-show-more-button, only show when more available
          className="button"
          id="show-more-button"
          // onclick="htf.showMoreResults()"
        >
          Show more results
        </button>
      </div>
    </>
  );
};
