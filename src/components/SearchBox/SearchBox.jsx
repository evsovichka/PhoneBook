import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const handlSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label className={style.label} htmlFor={id}>
        Find contacts:
      </label>
      <input
        className={style.input}
        type="text"
        value={filterName}
        onChange={handlSearch}
        id={id}
        placeholder="Enter name or number for search"
      />
    </div>
  );
}
