import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return ( 
    <div className="root-layout">
      <header>
        <nav>
          <h1>Budget App</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='transactions'>Transactions</NavLink>
          <NavLink to='table'>Table View</NavLink>
          <NavLink to='graph'>Graph View</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}