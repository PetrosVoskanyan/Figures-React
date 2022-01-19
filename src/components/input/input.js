import * as classes from './input.models.scss';
import PatchStyles from 'patch-styles';

export const Input = ({ label, ...otherProps }) => {
  return (
    <PatchStyles classNames={classes}>
      <label>
        <div className="Input">
          <span className="InputText">{label}</span>
          <input type="text" className="Axis" {...otherProps} />
        </div>
      </label>
    </PatchStyles>
  );
};
