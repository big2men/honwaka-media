import Image from 'next/image'
import { Card } from 'schema';
import styles from '../styles/CardBlock.module.css'

const Component: React.FC<Card> = ({ title, body, image }) => (
  <div className={styles.container}>
    {image != null && <Image src={image.url} unsized className={styles.image} />}
    {title != null && <div className={styles.title}>{title}</div>}
    {body != null && <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></div>}
  </div>
)

export default Component