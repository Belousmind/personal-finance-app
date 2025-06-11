import MainContent from "@/components/main-content";
import Pagination from "@/components/pagination";
import InputField from "@/components/fileds/input-field";
import { Transaction } from "@/components/overviews/overvie-transactions";

import { DropDownList } from "@/components/dropdown-list";
import styles from "./index.module.scss";

import data from "../../../data.json";

const { transactions } = data;

const categoriesList = [
  { label: "All Transactions", value: "all" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Bills", value: "bills" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining-out" },
  { label: "Transportation", value: "transportation" },
  { label: "Personal Care", value: "personal-care" },
  { label: "Education", value: "education" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Shopping", value: "shopping" },
  { label: "General", value: "general" },
];

const sortingList = [
  { label: "Latest", value: "latest" },
  { label: "Oldest", value: "oldest" },
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Highest", value: "highest" },
  { label: "Lowest", value: "lowest" },
];

export default function Page() {
  return (
    <MainContent text="Transactions">
      <section className={styles.content}>
        <div className={styles.serachPanel}>
          <InputField placeholder="Search transaction" withIcon={true} />

          <div className={styles.filtres}>
            <DropDownList
              label="Sort by"
              list={sortingList}
              iconSrc="/icon-sort-mobile.svg"
            />
            <DropDownList
              label="Category"
              list={categoriesList}
              iconSrc="/icon-filter-mobile.svg"
            />
          </div>
        </div>

        <div>
          <div className={styles.TableHeader}>
            <span>Recipient / Sender</span>
            <span>Category</span>
            <span>Transaction Date</span>
            <span>Amount</span>
          </div>
          <div>
            {transactions.map((transaction, index) =>
              index < 10 ? (
                <Transaction key={transaction.name} {...transaction} />
              ) : null
            )}
          </div>
        </div>

        <Pagination />
      </section>
    </MainContent>
  );
}
