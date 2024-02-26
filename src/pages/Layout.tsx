import { Menu } from "components"
import { Outlet } from "react-router-dom"

export const Layout = ()=> {
	return (
		<>
			<Menu />
			<Outlet/>
		</>
	)
}
