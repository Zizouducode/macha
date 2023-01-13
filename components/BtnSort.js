"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
library.add(faFilter);

const BtnSort = ({ sort, setSort }) => {
  return (
    <button
      onClick={() => {
        setSort(!sort);
      }}
    >
      {"  "}{" "}
      <FontAwesomeIcon icon="filter" className="text-purple-900 text-2xl" />
    </button>
  );
};

export default BtnSort;
