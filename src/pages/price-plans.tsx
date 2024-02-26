import { EditModal, Header, Table } from "components"
import { useEdit } from "hooks/useEdit"
import pricePlanData from "data/price-plans.json"

export const PricePlans = () => {
    const { onOpenEdit, onSaveEdit, onClose, data, currentData, setFilterBySelect, setFilterBySearch } = useEdit(pricePlanData)

	const handleSelectChange = (value: string) => {
		setFilterBySelect(value)
	}
	const handleSearchChange = (value: string) => {
		setFilterBySearch(value)
	}

    return (
        <>
			<Header
				title="Price Plan"
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
