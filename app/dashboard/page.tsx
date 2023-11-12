import {cardData,CardItem} from '../lib/data'
import Card from '../ui/dashboard/card'
import Chart from '../ui/dashboard/chart'
import Rightbar from '../ui/dashboard/rightbar'
import Transactions from '../ui/transactions/actions'
import styles from './dashboard.module.scss'

function Dashboard():JSX.Element {
  return (
   <div className={styles.dashboard__wrapper}>
     <div className={styles.dashboard__main}>
      <div className={styles.dashboard__cards}>
        {cardData.map((card:CardItem) =>(
          <Card key={card.id} item={card} />
        ))}
      </div>
      <Transactions />
      <Chart />
    </div>
    <div className={styles.dashboard__rightSide}>
      <Rightbar />
    </div>
   </div>
  )
}

export default Dashboard