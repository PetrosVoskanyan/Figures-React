import './navBar.scss';

export const NavBar = ({ pages, current, onCurrentActiveChange }) => {
  return (
    <div className="NavBar">
      {
        pages.map((item, index) => (
          <button
            key={index}
            className={`NavButton ${current === index ? 'active' : ''}`}
            onClick={() => onCurrentActiveChange(index)}
          >
            <p className={`text ${current === index ? 'active' : ''}`}>{item.pageName}</p>
          </button>
        ))
      }
    </div>
  );
};
