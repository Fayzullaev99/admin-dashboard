import { MdSupervisedUserCircle } from "react-icons/md";
import { CardItem } from '@/app/lib/data';
import styles from './card.module.scss'
interface CardProps {
  item: CardItem;
}
function Card({item}:CardProps) {
  return (
    <div className={styles.card}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.card__texts}>
        <span className={styles.card__title}>{item.title}</span>
        <span className={styles.card__number}>{item.number}</span>
        <span className={styles.card__detail}>
          <span className={item.change > 0 ? styles.card__positive : styles.card__negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  )
}

export default Card