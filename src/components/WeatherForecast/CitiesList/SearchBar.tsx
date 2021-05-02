import { memo } from "react";
import { searchLocationIcon } from "../../../icons";
import Icon from "../../../uiKit/Icon";
import styles from "./CitiesList.module.scss";

type Props = {
  setSearchValue: any;
};

const SearchBar: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={styles["search"]}>
      <input
        className={styles["search__input"]}
        type="input"
        name="searchInput"
        onKeyDown={(event) => {
          (event.code === "Enter" || event.code === "NumpadEnter") && props.setSearchValue(event.currentTarget.value);
        }}
      />
      <Icon
        className={styles["search__location-icon"]}
        path={searchLocationIcon.path}
        viewBox={searchLocationIcon.viewBox}
        title="SearchLocationIcon"
      />
    </div>
  );
};

export default memo(SearchBar);
