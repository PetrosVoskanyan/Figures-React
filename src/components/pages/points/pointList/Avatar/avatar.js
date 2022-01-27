import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "#D0CFD5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(5),
    height: theme.spacing(5),
    background: "none",
    borderRadius: "100%",
    border: "1px solid rgba(3, 244, 167, 1)"
  }
}));

export const Avatar = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.avatar}>
      {text}
    </div>
  );
};
