import {createPortal} from "react-dom"
import {ChangeEvent, useCallback, useEffect, useState} from "react"
import styles from './EditModal.module.css'

interface EditModalProps {
    isOpen: boolean
    onClosed: ()=> void
    data: Data | null,
    onSaveEdit: (name: string) => void
}

export const EditModal = ({ isOpen, onClosed, data, onSaveEdit }: EditModalProps) => {
    const [value, setValue] = useState<string>('')

    useEffect(()=> {
        if (data) {
            if (data.name) {
                setValue(data.name)
            }
            if (data.description) {
                setValue(data.description)
            }

			if (data.title) {
				setValue(data.title)
			}
        }
    }, [data, setValue])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.target.value)
    }, [])

    const onSave = ()=> onSaveEdit(value)

    return createPortal((
        <div className={styles.modal}>
            {isOpen &&
                <div className={styles.wrap}>
                    <div className={styles.box}>
                        <div className={styles.head}>
                            <div className={styles.title}>Edit</div>
                            <button className={styles.close} onClick={onClosed}>X</button>
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="#edit">Name</label>
                            <input type="text" value={value} id="edit" onChange={onChange} />
                            <button onClick={onSave}>Save</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    ), document.body)
}
