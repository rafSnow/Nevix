import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Neves"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut quasi velit iusto quis architecto nulla in sunt voluptatibus nobis vero sit minus, aliquid fuga cum voluptas esse sequi aperiam."
          />
          <Post
            author="Jorge Henrique"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut quasi velit iusto quis architecto nulla in sunt voluptatibus nobis vero sit minus, aliquid fuga cum voluptas esse sequi aperiam."
          />
        </main>
      </div>
    </>
  );
}
