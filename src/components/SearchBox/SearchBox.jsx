import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import css from "./SearchBox.module.css";
import { IoMdSearch } from "react-icons/io";

import { changeFilter } from "../../redux/filtersSlice.js";
const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filter.name);
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        id={id}
        className={css.inputSearch}
        type="text"
        value={selectNameFilter}
        onChange={handleSearch}
      />
      <IoMdSearch className={css.iconSearch} />
    </div>
  );
};

export default SearchBox;
