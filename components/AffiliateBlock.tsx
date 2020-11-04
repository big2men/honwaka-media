import Image from 'next/image'
import { Affiliate } from 'schema';
import styles from '../styles/AffiliateBlock.module.css'

const Component: React.FC<Affiliate> = ({ image, title, price, url }) => (
  <a href={url} target="_blank" rel="noopener">
    <div className={styles.container}>
      <Image src={image.url} unsized className={styles.image} />
      <div className={styles.information}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>￥{price.toLocaleString()}</div>
      </div>
    </div>
  </a>
)

export default Component