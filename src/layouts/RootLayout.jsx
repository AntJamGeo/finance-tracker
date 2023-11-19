import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return ( 
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="app-name"><NavLink to='/'>Budget App</NavLink></h1>
          <div className="nav-buttons">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='transactions'>Transactions</NavLink>
            <NavLink to='table'>Table View</NavLink>
            <NavLink to='graph'>Graph View</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}