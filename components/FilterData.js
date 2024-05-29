import { useEffect, useState } from "react";
import { toggleFilter } from "../lib/utilities";
// {{ $filter := .filter }}
// {{ $title := .title }}
// {{ $selectAll := print `selectAll` $filter }}

export const FilterData = ({ title, allContent }) => {
  const [filters, setFilters] = useState([]);
  const [showAll, setShowAll] = useState("active");
  const titles = title + "s";

  useEffect(() => {
    console.log(filters);
    if (filters.length === 0) setShowAll("active");
  }, [filters]);

  function applyFilter(el, content) {
    el.stopPropagation();
    el = el.currentTarget;
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      setFilters(filters.filter((x) => x !== content));
    } else {
      el.classList.add("active");
      setFilters([...filters, content]);
      setShowAll("");
    }
  }
  return (
    <>
      <button
        className="acc button split-pair"
        onClick={toggleFilter}
        data-size="full-width"
        style={{ "--split-pair-space": "0rem", "--button-padding": "0.5rem" }}
      >
        {titles}
      </button>
      <ul className="panel">
        <li>
          <button
            // id="{{ $selectAll }}"
            className={showAll}
            onClickCapture={(e) => applyFilter(e, title)}
          >
            All {titles}
          </button>
        </li>
        {allContent.map((content, i) => (
          // {{ $termURLize := . | replaceRE "[.]" "_" | urlize }}
          <li key={i}>
            <button
              // className="{{ $filter }}-button"
              // id="{{ $filter }}-{{ $termURLize }}"
              // onClick="htf.checkFilter('{{ $termURLize }}', '{{ $filter }}-')"
              onClickCapture={(e) => applyFilter(e, content)}
            >
              <span className="filter-item">
                <span>{content}</span>
                <span id="s{{ $filter }}-{{ $termURLize }}">-count-</span> |
                <span id="c{{ $filter }}-{{ $termURLize }}">-count-</span>
              </span>
            </button>
          </li>
        ))}
        <li>
          <button
            className="{{ $filter }}-button"
            id="{{ $filter }}-no-{{ $filter }}"
            // onClick="htf.checkFilter('no-{{ $filter }}', '{{ $filter }}-')"
          >
            No {titles}
            <span id="s{{ $filter }}-no-{{ $filter }}">-count-</span> |
            <span id="c{{ $filter }}-no-{{ $filter }}">-count-</span>
          </button>
        </li>
      </ul>
    </>
  );
};
