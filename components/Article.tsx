import { Article, ContentBlock } from 'schema';
import styles from '../styles/Article.module.css'
import CardBlock from './CardBlock'
import AffiliateBlock from './AffiliateBlock'

const renderContentBlock = (props: ContentBlock) => {
  switch (props.fieldId) {
    case 'card':
      return <CardBlock {...props} />
    case 'affiliate':
      return <AffiliateBlock {...props} />
    default: {
      throw Error("想定しないコンテンツブロックです")
    }
  }
}

const Component: React.FC<Article> = ({ author, publishedAt, contents }) => (
  <div className={styles.container}>
    <div className={styles.information}>
      {new Date(publishedAt).toLocaleDateString()} by {author.name}
    </div>
    <div className={styles.contents}>{contents.map(item => 
      renderContentBlock(item)
    )}</div>
  </div>
)

const Container: React.FC<Article> = props => {
  return <Component {...props} />
}

export default Container