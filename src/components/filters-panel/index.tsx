import { InputField, FilterDropDownList } from "@/components";
import { SORTING_LIST, CATEGORIES_LIST } from "@/constants";

import styles from "./style.module.scss";

type Props = {
  searchQuery: string;
  selectedCategory?: (typeof CATEGORIES_LIST)[0];
  selectedSort: (typeof SORTING_LIST)[0];
  onSearchChange: (value: string) => void;
  onCategoryChange?: (item: (typeof CATEGORIES_LIST)[0]) => void;
  onSortChange: (item: (typeof SORTING_LIST)[0]) => void;
  withCategory?: boolean;
};

export default function FiltersPanel({
  searchQuery,
  selectedCategory,
  selectedSort,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  withCategory = true,
}: Props) {
  return (
    <div className={styles["search-panel"]}>
      <InputField
        placeholder="Search transaction"
        withIcon
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className={styles.filters}>
        <FilterDropDownList
          label="Sort by"
          list={SORTING_LIST}
          selected={selectedSort}
          onChange={onSortChange}
          iconSrc="/icon-sort-mobile.svg"
        />
        {withCategory && selectedCategory && onCategoryChange && (
          <FilterDropDownList
            label="Category"
            list={CATEGORIES_LIST}
            selected={selectedCategory}
            onChange={onCategoryChange}
            iconSrc="/icon-filter-mobile.svg"
          />
        )}
      </div>
    </div>
  );
}
