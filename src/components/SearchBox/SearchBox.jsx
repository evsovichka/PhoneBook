import { useDispatch, useSelector } from "react-redux";
import style from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const handlSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label htmlFor="3">Find contacts by name:</label>
      <input type="text" value={filterName} onChange={handlSearch} id="3" />
    </div>
  );
}
