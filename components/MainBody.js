import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultCard } from "./SearchResultCard";

export const MainBody = ({
  allMHDdata,
  filteredMHdata,
  setFilteredMHdata,
  showMore,
  resetNbrToShow,
  nbrToShow,
}) => {
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
        <SearchBar
          allMHDdata={allMHDdata}
          setFilteredMHdata={setFilteredMHdata}
          resetNbrToShow={resetNbrToShow}
        />
      </div>
      <div
        id="map"
        className="[ gap-right-500 gap-left-500 gap-bottom-500 display-none ]" //TODO: implement map
      ></div>
      <div className="gap-left-500 gap-right-500 center-content">
        <i>Search results displayed in alphabetical order</i>
      </div>
      <div className="mhd-tiles" id="mhd-tiles-search-result">
        {filteredMHdata.slice(0, nbrToShow).map((provider) => (
          <SearchResultCard
            mentalHealthProvider={provider}
            location={provider.location}
            key={provider.org + provider.location.address}
          />
        ))}
      </div>
      <div className="center-content gap-bottom-major">
        {filteredMHdata.length > nbrToShow && (
          <button className="button" id="show-more-button" onClick={showMore}>
            Show more results
          </button>
        )}
      </div>
    </>
  );
};
