'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import styles from './Header.module.css';

export default function Header() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>DONATOV</span>
            <span className={styles.logoDot}>.</span>
            <span className={styles.logoNet}>NET</span>
          </Link>
        </div>

        {/* Поиск */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Поиск товаров, игр..."
            className={styles.searchInput}
          />
        </div>

        {/* Навигация */}
        <nav className={styles.nav}>
          <Link href="/catalog" className={styles.navLink}>Каталог</Link>
          <Link href="/top" className={styles.navLink}>Топ</Link>
          <Link href="/reviews" className={styles.navLink}>Отзывы</Link>
        </nav>

        {/* Правая часть */}
        <div className={styles.right}>
          {isAuthenticated && user ? (
            <Link href="/profile" className={styles.profile}>
              {user.username || 'Профиль'}
            </Link>
          ) : (
            <Link href="/auth/login" className={styles.loginBtn}>
              Войти
            </Link>
          )}

          <Link href="/cart" className={styles.cart}>
            🛒
            {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}