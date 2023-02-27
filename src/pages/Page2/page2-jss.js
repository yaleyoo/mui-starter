import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  content: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    justifyItems:'center'
  },
  userText: {
    color: theme.palette.getContrastText(theme.palette.background.default)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
