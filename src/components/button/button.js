import * as classes from './button.models.scss';
import PatchStyles from 'patch-styles';

const sizeClassNames = {
  small: 'Small',
  normal: 'Normal',
  big: 'Big',
};

const variantClassNames = {
  text: 'Text',
  contained: 'Contained',
  outlined: 'Outlined',
};

export const Button = ({
  children,
  variant,
  size,
  ...buttonProps
}) => {

  const variantClassName = variantClassNames[variant] ?? variantClassNames.text;
  const sizeClassName = sizeClassNames[size] ?? sizeClassNames.normal;

  return (
    <PatchStyles classNames={classes}>
      <button
        type="button"
        className={`Button ${sizeClassName} ${variantClassName}`}
        {...buttonProps}
      >
        {children}
      </button>
    </PatchStyles>
  );
};
