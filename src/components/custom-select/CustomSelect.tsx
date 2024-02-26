import React, { useState } from "react"
import styles from "./CustomSelect.module.css"

interface Options {
	value: string,
	label: string
}

interface CustomSelectProps {
	options: Options[]
	onChange: (v: string) => void
	value?: string
	placeholder: string
}

const CustomSelect = ({ options, onChange, value, placeholder }: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState<string>(value || '')

	const toggleOptions = () => {
		setIsOpen(!isOpen)
	}

	const handleOptionClick = (optionValue: string, optionLabel: string) => {
		setSelectedValue(optionLabel)
		setIsOpen(false)
		if (onChange) {
			onChange(optionValue)
		}
	}

	const handleClear = ()=> {
		setSelectedValue('')
		if (onChange) {
			onChange('')
		}
	}

	return (
		<div className={styles.select}>
			<div className={styles.header} onClick={toggleOptions}>
				{selectedValue || placeholder}
				{selectedValue &&
					<span className={styles.clear} onClick={handleClear}>&#x2715;</span>
				}
				<span className={[styles.arrow, isOpen ? styles.open : ''].join(' ')}>&#9662;</span>
			</div>
			{isOpen && (
				<div className={styles.options}>
					{options.map(option => (
						<div
							key={option.value}
							className={styles.option}
							onClick={() => handleOptionClick(option.value, option.label)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export { CustomSelect }
