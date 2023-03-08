import { moviesFiltered } from "../../Store/actions";
import { selectCategories, selectCategory } from "../../Store/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CategorieFIlter.css";

// #region COMPONENT
/**
* A component that displays a CategorySelector
* @class
* @category CategoryFilter
*/
const CategorieFilter = () => {
  //#region INIITIALISATION
  // Selectors
  const options = useSelector(selectCategories);
  const category = useSelector(selectCategory);

  // Dispatch
  const dispatch = useDispatch();
  //#endregion

  // #region HOOK
  // Filter on film category
  const handleChange = (e) => {
    let value = e.target.value;

    dispatch(moviesFiltered(value));
  };
  // #endregion

  //#region INTERFACE
  return (
    <>
    <div className="Categorie">
      <select
        className="CategorieFilter-select "
        id="categorieFilter"
        name="categories"
        onChange={handleChange}
        value={category}
      >
        <option value="">ALL</option>
        {options.map((categorie, index) => {
          return (
            <option
              key={`${index}`}
              value={categorie}
              className="filter"

            >
              {categorie}
            </option>
          );
        })}
      </select>
    </div>

    </>
  );
  //#endregion
};

export { CategorieFilter };
