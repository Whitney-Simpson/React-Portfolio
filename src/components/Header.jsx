import NavTabs from "./NavTabs";

export default function Header({currentPage, handlePageChange}) {
    return (
      <header>
        <h1>Whitney Simpson's Portfolio</h1>
        <img src="./Portfolio/IMG-6564.jpg" alt="Profile Photo"/>
        <NavTabs  currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    );
  }
  