import { EditModal, Header, Table } from "components"
import { useEdit } from "hooks/useEdit"
import productsData from "data/products.json"

export const Products = () => {
    const { onOpenEdit, onSaveEdit, onClose, data, currentData, setFilterBySelect, setFilterBySearch } = useEdit(productsData)

	const handleSelectChange = (value: string) => {
		setFilterBySelect(value)
	}
	const handleSearchChange = (value: string) => {
		setFilterBySearch(value)
	}

    return (
        <>
			<Header
				title="Products"
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
