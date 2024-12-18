import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redax/filters.js/selectors";
import { selectNameFilter } from "../../redax/filters.js/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
