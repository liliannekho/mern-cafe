import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}><img src={menuItem.emoji}/></div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toLocaleString() + ".00"}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)} style={{color: "black"}}>
          ADD
        </button>
      </div>
    </div>
  );
}