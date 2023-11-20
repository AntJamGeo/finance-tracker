import { NavLink, Outlet } from "react-router-dom"

import wave from "../assets/wave.svg"

export default function RootLayout() {
  return ( 
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="app-name"><NavLink to='/'>Finance Tracker</NavLink></h1>
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
      <img src={wave} alt="" />
    </div>
  );
}