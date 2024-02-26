import { SearchField } from "../search-field"
import { CustomSelect } from "../custom-select"
import styles from "./Header.module.css"

interface HeaderProps {
	title: string,
	handleSearchChange: (v: string)=> void,
	handleSelectChange: (v: string)=> void
}

const options = [
	{ value: 'active', label: 'Active' },
	{ value: 'not-active', label: 'Not Acitve' },
]

export const Header = ({ title, handleSearchChange, handleSelectChange }: HeaderProps) => {
	return (
		<div>
			<h1 className={styles.title}>{ title }</h1>

			<div className={styles.header}>
				<SearchField
					style={{ marginRight: 10 }}
					onChange={handleSearchChange}
				/>
				<CustomSelect
					options={options}
					onChange={handleSelectChange}
					placeholder="Select an option"
				/>
			</div>
		</div>
	)
}
