import { TweetContainer } from './tweet-container.js'
import styles from './tweet-not-found.module.css'

export const TweetNotFound = () => (
  <TweetContainer>
    <div className={styles.root}>
      <h3>Tweet not found</h3>
      <p>The embedded tweet could not be found…</p>
    </div>
  </TweetContainer>
)
