import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRldmVsb3B8ZW58MHx8MHx8fDA%3D"
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/rafSnow.png" />
        <strong>Rafael Neves</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
