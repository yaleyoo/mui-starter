import React from 'react';
import { PropTypes } from 'prop-types';
import useStyles from './dashboard-jss';

function Decoration(props) {
  let decorationLight = '../assets/decoration_light.svg';
  let decorationDark = '../assets/decoration_dark.svg';
  let petalLight = '../assets/petal_bg.svg';
  const { classes, cx } = useStyles();
  const {
    mode,
    gradient,
    decoration,
    bgPosition,
    horizontalMenu
  } = props;
  const getBgPosition = position => {
    if (position === 'header') {
      return classes.headerBg;
    }
    if (position === 'half') {
      return classes.halfBg;
    }
    return classes.fullBg;
  };
  const renderDecor = (type, position) => {
    const mergeDeco = type + '-' + position;
    if (mergeDeco === 'dark-half') {
      return (
        <img src='decoration_dark.svg' alt="decoration" className={classes.decorationWave} />
      );
    }
    if (mergeDeco === 'dark-full') {
      return (
        <img src='decoration_light.svg' alt="decoration" className={classes.decorationPetal} />
      );
    }
    if (mergeDeco === 'light-half') {
      return (
        <img src='decoration_light.svg' alt="decoration" className={classes.decorationWave} />
      );
    }
    if (mergeDeco === 'light-full') {
      return (
        <img src='petal_bg.svg' alt="decoration" className={classes.decorationPetal} />
      );
    }
    return false;
  };
  return (
    <div className={classes.bgWrap}>
      <div
        className={cx(
          classes.bgbar,
          horizontalMenu && classes.highTop,
          gradient ? classes.gradientBg : classes.solidBg,
          getBgPosition(bgPosition),
        )}
      >
        { decoration && renderDecor(mode, bgPosition) }
      </div>
    </div>
  );
}

Decoration.propTypes = {

  mode: PropTypes.string.isRequired,
  gradient: PropTypes.bool.isRequired,
  decoration: PropTypes.bool.isRequired,
  bgPosition: PropTypes.string.isRequired,
  horizontalMenu: PropTypes.bool.isRequired,
};

export default Decoration;
