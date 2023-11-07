import styles from  './Navigation.module.scss'

export default function Navigation(){
    const links =[
        {name:'Shop',link:'/'},
        {name:'Categories',link:'/'},
        {name:'About Us',link:'/'},
        {name:'Contacts',link:'/'},
        {name:'Legacy',link:'/'},
    ]

    return(
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                {
                    links.map(link=>(
                        <li key={link.name} className={styles.item}>
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}