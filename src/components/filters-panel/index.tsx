import { InputField, DropDownList } from "@/components";
import { categoriesList, sortingList } from "@/lib/filters";

import styles from "./style.module.scss";

type Props = {
  searchQuery: string;
  selectedCategory?: (typeof categoriesList)[0];
  selectedSort: (typeof sortingList)[0];
  onSearchChange: (value: string) => void;
  onCategoryChange?: (item: (typeof categoriesList)[0]) => void;
  onSortChange: (item: (typeof sortingList)[0]) => void;
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
    <div className={styles.serachPanel}>
      <InputField
        placeholder="Search transaction"
        withIcon
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className={styles.filtres}>
        <DropDownList
          label="Sort by"
          list={sortingList}
          selected={selectedSort}
          onChange={onSortChange}
          iconSrc="/icon-sort-mobile.svg"
        />
        {withCategory && selectedCategory && onCategoryChange && (
          <DropDownList
            label="Category"
            list={categoriesList}
            selected={selectedCategory}
            onChange={onCategoryChange}
            iconSrc="/icon-filter-mobile.svg"
          />
        )}
      </div>
    </div>
  );
}
