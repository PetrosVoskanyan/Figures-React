export const NavBar = ({ pages }) => {
  return (
    <div className="NavBar">
      {
        pages.map((item) => (
          <button
            className={`NavButton ${item.active ? "active" : "" }`}
          >
            <p className={`text ${item.active ? "active" : "" }`}>{item.pageName}</p>
          </button>
        ))
      }
    </div>
  )
}
