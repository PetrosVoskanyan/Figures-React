import PatchStyles from 'patch-styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  Button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#8c8ebe',
    borderRadius: theme.spacing(0.5),
    padding: [theme.spacing(0.7),theme.spacing(1.5)],
    height: theme.spacing(4.5),
    lineHeight: theme.spacing(3),
    cursor: 'pointer',
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
    '&:disabled': {
      cursor: 'unset',
      opacity: 0.8,
    },
  },
  Outlined: {
    color: '#CDCBD1FF',
    fontSize: theme.spacing(1.5),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
    border: '2px solid $green',
    borderRadius: theme.spacing(1.2),
    padding: [theme.spacing(0.6),theme.spacing(5)],
  },
  Text: {
    fontWeight: 'bold',
    '&:hover': {
      background: 'rgba(white, 0.1)',
    },
  },
  Contained: {
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #2ba6a1 0%, #03f4a7 100%)',
    textTransform: 'uppercase',
    color: '#14343EFF',
    fontSize: theme.spacing(1.5),
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)',
  },
  Normal: {
    padding: [theme.spacing(0.7),theme.spacing(1.5)],
    height: theme.spacing(4.5),
    lineHeight: theme.spacing(3),
  },
  Small: {
    padding: [theme.spacing(0.5),theme.spacing(1)],
    height: theme.spacing(3.7),
    lineHeight: theme.spacing(2.7),
  },
  Big: {
    padding: [theme.spacing(1),theme.spacing(2)],
    height: theme.spacing(5),
  },
}));

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

  const classes = useStyles();
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
