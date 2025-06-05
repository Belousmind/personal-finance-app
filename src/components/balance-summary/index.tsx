import styles from './style.module.scss'

export default function BalanceSummary() {
return (
  <div className={styles.stats}>
    
  </div>
)
}

type SummaryCardProps = {
  title: string;
  sum: string;
}

function SummaryCard({title, sum}: SummaryCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{sum}</span>
    </div>
  )
}