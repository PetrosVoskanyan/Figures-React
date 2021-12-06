import './input.scss';

export const Input = ({ label, ...otherProps }) => {
  return (
    <label>
      <div className="Input">
        <span className="InputText">{label}</span>
        <input type="text" className="Axis" {...otherProps} />
      </div>
    </label>
  );
};
