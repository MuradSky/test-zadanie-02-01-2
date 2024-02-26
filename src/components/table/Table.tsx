import { formatDateWithTime } from "helpers/utils"
import styles from './Table.module.css'

interface TableProps {
    data: Data[]
    onOpenEdit: (id: number) => void
}
interface TableRowProps {
    data: Data,
    onOpenEdit: () => void
}

const TableRow = ({ data, onOpenEdit }: TableRowProps) => {
    return (
        <div className={styles.row}>
            <div className={styles.cell}>
                <div className={styles.name}>{ data.name || data.description || data.title }</div>
            </div>
            <div className={styles.cell}>
                <div className={styles.status}>
                    { data.active ? 'active' : 'not-active' }
                </div>
            </div>
            <div className={styles.cell}>
                <div className={styles.date}>
					{ formatDateWithTime(data.createdAt || data.updatedAt) }
				</div>
            </div>
            <div className={styles.btn}>
                <button onClick={onOpenEdit}>Edit</button>
            </div>
        </div>
    )
}

export const Table = ({ data, onOpenEdit }: TableProps) => {
    const onClick = (id: number) => {
        return ()=> {
            onOpenEdit && onOpenEdit(id)
        }
    }

    return (
        <div className={styles.table}>
            <div className={styles.head}>
                <div className={styles.head_cell}>Name</div>
                <div className={styles.head_cell}>Status</div>
                <div className={styles.head_cell}>Created</div>
            </div>

            <div className={styles.list}>
                {data.map((item: Data) => (
                    <TableRow
                        key={item.id}
                        data={item}
                        onOpenEdit={onClick(item.id)}
                    />
                ))}
            </div>
        </div>
    )
}
