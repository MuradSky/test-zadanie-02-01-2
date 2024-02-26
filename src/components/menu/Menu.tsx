import { NavLink, useLocation } from "react-router-dom"
import styles from './Menu.module.css'

type MenuData = {
    id: number,
    to: string,
    title: string
}

const menuData: MenuData[] = [
    { 
        id: 1,
        to: '/',
        title: 'Products'
    },
    { 
        id: 2,
        to: '/price-plans',
        title: 'Price Plans'
    },
    { 
        id: 3,
        to: '/pages',
        title: 'Pages'
    }
]

export const Menu = ()=> {
    const { pathname } = useLocation()
    const activeClassName = (page: string)=> pathname === page ? styles.is_active : ''

    return (
        <aside className={styles.menu}>
            <nav>
                <ul>
                    {menuData.map((item: MenuData)=> (
                        <li className={activeClassName(item.to)} key={item.id}>
                            <NavLink to={item.to}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}