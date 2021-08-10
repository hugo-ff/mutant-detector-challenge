import Header from 'components/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { element } from 'prop-types';
import theme from 'theme/theme';
import styles from './styles';

const MainLayout = ({ children }) => (
	<>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<styles.MainLayout data-testid="mainLayout">
				<Header />
				{children}
			</styles.MainLayout>
		</ThemeProvider>
	</>
);

MainLayout.propTypes = {
	children: element.isRequired,
};

export default MainLayout;
