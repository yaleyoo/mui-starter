import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    width: '100vw',
    height: '100vh'
  },
  content: {
    width: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  flex: {
    flex: 1,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
