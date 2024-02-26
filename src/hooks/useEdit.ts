import { useState, useCallback, useEffect, useRef } from "react"

const filteredBySearch = (data: Data[], value: string | null)=> {
	if (!value) return data
	return data.filter((item: Data) => {
		return item?.name?.includes(value) ||
			item?.description?.includes(value) ||
			item?.title?.includes(value)
	})
}

export const useEdit = (sourceData: any) => {
	const saveData = useRef<Data[] | []>([])
    const [data, setData] = useState<Data[]>([])
    const [currentData, setCurrentData] = useState<Data | null>(null)
	const [filterBySelect, setFilterBySelect] = useState<string | null>(null)
	const [filterBySearch, setFilterBySearch] = useState<string | null>(null)

	useEffect(()=> {
		setData(sourceData)
		saveData.current = sourceData
	}, [setData, saveData, sourceData])

	useEffect(()=> {
		const result = filteredBySearch(saveData.current, filterBySearch)
		if (filterBySelect === 'active') {
			setData(result.filter((item: Data) => item.active))
		} else if (filterBySelect === 'not-active') {
			setData(result.filter((item: Data) => !item.active))
		} else {
			setData(result)
		}
	}, [filterBySearch, saveData, filterBySelect])

    const onOpenEdit = useCallback((id: number)=> {
        const current: Data | null = data.find((item: Data)=> item.id === id) || null
        setCurrentData(current)
    }, [data])

    const onClose = useCallback(()=> {
        setCurrentData(null)
    }, [])

    const onSaveEdit = useCallback((name: string)=> {
        const modifiedObj = {...currentData, name}
        const result = data.map((item: Data) => item.id === modifiedObj.id ? modifiedObj : item)
		//@ts-ignore
        setData(result)
        onClose()
    }, [currentData, data, onClose])

    return {
        onOpenEdit,
        onSaveEdit,
        data,
        currentData,
        onClose,
		setFilterBySelect,
		setFilterBySearch
    }
}
