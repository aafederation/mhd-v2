import { toggleFilter } from "../lib/utilities";
// {{ $filter := .filter }}
// {{ $title := .title }}
// {{ $selectAll := print `selectAll` $filter }}

export const FilterData = ({ title }) => {
  const titles = title + "s";
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
          <button id="{{ $selectAll }}" onClick="htf.showAll({{ $filter }})">
            All {titles}
          </button>
        </li>
        {/* {{ range .allContent }}
		{{ if . }}
			{{ $termURLize := . | replaceRE "[.]" "_" | urlize }}
			<li>
				<button
					className="{{ $filter }}-button"
					id="{{ $filter }}-{{ $termURLize }}"
					onClick="htf.checkFilter('{{ $termURLize }}', '{{ $filter }}-')"
				>
					<span className="filter-item">
						<span>{{ . | title }}</span>
						<span id="s{{ $filter }}-{{ $termURLize }}">-count-</span> |
						<span id="c{{ $filter }}-{{ $termURLize }}">-count-</span>
					</span>
				</button>
			</li>
		{{ end }}
	{{ end }} */}
        <li>
          <button
            className="{{ $filter }}-button"
            id="{{ $filter }}-no-{{ $filter }}"
            onClick="htf.checkFilter('no-{{ $filter }}', '{{ $filter }}-')"
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
