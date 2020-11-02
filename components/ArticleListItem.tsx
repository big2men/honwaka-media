import Link from 'next/link'
import { Article } from 'schema';
import styles from '../styles/ArticleListItem.module.css'

const Component: React.FC<Article> = ({ title, description, publishedAt, id }) => (
  <Link href={`/articles/${id}`}>
    <a>
      <div className={styles.container}>
        <div className={styles.publishedAt}>{new Date(publishedAt).toLocaleDateString()}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </a>
  </Link>
)

const Container: React.FC<Article> = props => {
  const handleClick = () => {

  }
  return <Component {...props} />
}

export default Container