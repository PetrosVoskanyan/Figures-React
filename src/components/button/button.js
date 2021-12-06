import './button.scss';

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
    <button
      type="button"
      className={`Button ${sizeClassName} ${variantClassName}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
