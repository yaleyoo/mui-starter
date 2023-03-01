import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import LeftSidebarLayout from './layouts/LeftSidebarLayout';
import useStyles from './dashboard-jss';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard(props) {
  const { classes, cx } = useStyles();
  // Initial header style
  const [openGuide, setOpenGuide] = useState(false);
  const [appHeight, setAppHeight] = useState(0);
  const [drawerClosed, setDrawerClosed] = useState(true);
  const location = useLocation();

  useEffect(() => {

    // Adjust min height
    setAppHeight(window.innerHeight + 112);

    // Set expanded sidebar menu
    const currentPath = location.pathname;
    // Play page transition
    loadTransition(true);
  }, []);

  useEffect( () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      loadTransition(true);
    }, 500);
  }, [location])

  const handleOpenGuide = () => {
    setOpenGuide(true);
  };
  const handleCloseGuide = () => {
    setOpenGuide(false);
  };

  const loadTransition = () => {}

  const toggleDrawer = () => {
    setDrawerClosed(!drawerClosed)
  }

  const gradient = true; 
  const deco = true;
  const bgPosition = 'full';// header half full
  const {
    children,
    sidebarOpen,
    pageLoaded,
    mode,
    layout,
    changeMode
  } = props;
  const titleException = ['/app', '/app/crm-dashboard', '/app/crypto-dashboard'];
  return (
    <div
      style={{ minHeight: appHeight }}
      className={
        cx(
          classes.appFrameInner,
          layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
          mode === 'dark' ? 'dark-mode' : 'light-mode'
        )
      }
    >
          <LeftSidebarLayout
            toggleDrawer={toggleDrawer}
            loadTransition={loadTransition}
            changeMode={changeMode}
            sidebarOpen={drawerClosed}
            pageLoaded={pageLoaded}
            mode={mode}
            gradient={gradient}
            deco={false}
            bgPosition={bgPosition}
            titleException={titleException}
            handleOpenGuide={handleOpenGuide}
          >
            { children }
          </LeftSidebarLayout>
    </div>
  );
}



export default Dashboard;
