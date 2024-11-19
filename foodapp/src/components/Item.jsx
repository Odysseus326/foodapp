import styles from './item.module.css'

export default function Item({item}) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={`https://api.spoonacular.com/food/images/classify?imageUrl=https://img.spoonacular.com/recipes/${foodId}-100x100.jpg`} alt=""/>
            </div>

            <div className={styles.nameContainer}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.amount}>
                    {item.amount}
                    {item.unit}
                </div>
            </div>
        </div>
    )
}