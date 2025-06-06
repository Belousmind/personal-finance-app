import MainContent from "@/components/main-content";
import Pagination from "@/components/pagination";
import InputField from "@/components/fileds/input-field";
import { Transaction } from "@/components/overviews/overvie-transactions";

import styles from "./index.module.scss";

import data from "../../../data.json";

const { transactions } = data;

export default function Page() {
  return (
    <MainContent text="Transactions">
      <section className={styles.content}>
        <div>
          <InputField placeholder="Search transaction" withIcon={true} />
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
                <Transaction
                  key={transaction.name}
                  imgSrc={transaction.avatar}
                  name={transaction.name}
                  category={transaction.category}
                  date={transaction.date}
                  amount={transaction.amount.toFixed(2)}
                />
              ) : null
            )}
          </div>
        </div>

        <Pagination />
      </section>
    </MainContent>
  );
}
