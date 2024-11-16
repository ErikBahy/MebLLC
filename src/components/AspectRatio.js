import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: 0,
  },
  inner: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    minHeight: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  },
}));

function AspectRatio(props) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        paddingBottom: (1 / props.ratio) * 100 + "%",
      }}
    >
      <div className={classes.inner}>
        {React.Children.map(props.children, child => {
          if (child.type === 'img') {
            return React.cloneElement(child, {
              className: `${child.props.className || ''} ${classes.image}`.trim()
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}

export default AspectRatio;
