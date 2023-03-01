import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';
import dataMenu from './datamenu';
import Decoration from '../Decoration';
import useStyles from '../dashboard-jss';
import { useLocation } from 'react-router-dom';

function LeftSidebarLayout(props) {
  const { classes, cx } = useStyles();
  const location = useLocation();
  const {
    children,
    toggleDrawer,
    sidebarOpen,
    loadTransition,
    pageLoaded,
    mode,
    gradient,
    deco,
    bgPosition,
    changeMode,
    titleException,
    handleOpenGuide
  } = props;
  return (
    <Fragment>
      <Header
        toggleDrawerOpen={toggleDrawer}
        margin={sidebarOpen}
        gradient={gradient}
        position="left-sidebar"
        changeMode={changeMode}
        mode={mode}
        openGuide={handleOpenGuide}
      />
      <Sidebar
        open={sidebarOpen}
        toggleDrawerOpen={toggleDrawer}
        loadTransition={loadTransition}
        dataMenu={dataMenu}
        leftSidebar
      />
      <main className={cx(classes.content, !sidebarOpen ? classes.contentPaddingLeft : '')} id="mainContent">
        <Decoration
          mode={mode}
          gradient={gradient}
          decoration={deco}
          bgPosition={bgPosition}
          horizontalMenu={false}
        />
        <section className={cx(classes.mainWrap, classes.sidebarLayout)}>
          {titleException.indexOf(location.pathname) < 0 && (
            <div className={classes.pageTitle}>
              <Typography component="h4" className={bgPosition === 'header' ? classes.darkTitle : classes.lightTitle} variant="h4">place</Typography>
            </div>
          )}
          {!pageLoaded && (<img src='/spinner.gif' alt="spinner" className={classes.circularProgress} />)}
          <Fade
            in={pageLoaded}
            {...(pageLoaded ? { timeout: 700 } : {})}
          >
            <div className={!pageLoaded ? classes.hideApp : ''}>
              {/* Application content will load here */}
              { children }
            </div>
          </Fade>
        </section>
      </main>
    </Fragment>
  );
}


export default LeftSidebarLayout;
