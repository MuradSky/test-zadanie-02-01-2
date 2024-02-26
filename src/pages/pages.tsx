import { EditModal, Header, Table } from "components"
import { useEdit } from "hooks/useEdit"
import pagesData from "data/pages.json"

export const Pages = () => {
    const { onOpenEdit, onSaveEdit, onClose, data, currentData, setFilterBySelect, setFilterBySearch } = useEdit(pagesData)

	const handleSelectChange = (value: string) => {
		setFilterBySelect(value)
	}
	const handleSearchChange = (value: string) => {
		setFilterBySearch(value)
	}

    return (
        <>
			<Header
				title="Pages"
				handleSearchChange={handleSearchChange}
				handleSelectChange={handleSelectChange}
			/>
            <Table data={data} onOpenEdit={onOpenEdit} />
            <EditModal
                isOpen={!!currentData}
                onClosed={onClose}
                onSaveEdit={onSaveEdit}
                data={currentData}
            />
        </>
    )
}
