import { memo } from "react";
import { searchLocationIcon } from "../../../icons";
import Icon from "../../../uiKit/Icon";
import styles from "./CitiesList.module.scss";

type Props = {
  filterValue: string;
  setSearchValue: (searchValue: string) => void;
  setFilterValue: (filterValue: string) => void;
};

const SearchBar: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={styles["search"]}>
      <input
        className={styles["search__input"]}
        type="search"
        name="SearchInput"
        onChange={(event) => {
          props.setFilterValue(event.currentTarget.value);
        }}
        onKeyDown={(event) => {
          (event.code === "Enter" || event.code === "NumpadEnter") && props.setSearchValue(event.currentTarget.value);
        }}
      />
      {props.filterValue === "" && (
        <div className={styles["search__location-icon"]}>
          <Icon path={searchLocationIcon.path} viewBox={searchLocationIcon.viewBox} title="SearchLocationIcon" />
        </div>
      )}
    </div>
  );
};

export default memo(SearchBar);
