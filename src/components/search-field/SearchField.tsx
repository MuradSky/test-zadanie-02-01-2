import React, { ChangeEvent, CSSProperties, useState } from "react"
import styles from "./SearchField.module.css"

interface SearchFieldProps {
	onChange: (v: string) => void
	style: CSSProperties
}

export const SearchField = ({ style, onChange }: SearchFieldProps) => {
	const [value, setValue] = useState('')

	const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
		setValue(e.target.value)
		onChange && onChange(e.target.value)
	}

	const handleClear = ()=> {
		setValue('')
		onChange && onChange('')
	}

	return (
		<div className={styles.field} style={style}>
			<input
				type="text"
				value={value}
				onChange={handleChange}
				placeholder="Search"
			/>
			{value && <span className={styles.clear} onClick={handleClear}>&#x2715;</span>}
		</div>
	)
}
