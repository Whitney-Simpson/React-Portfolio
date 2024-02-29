import NavTabs from "./NavTabs";

export default function Header({currentPage, handlePageChange}) {
    return (
      <header>
        <h1>Whitney Simpson's Portfolio</h1>
        <NavTabs  currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    );
  }
  