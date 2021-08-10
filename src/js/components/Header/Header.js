import NavTabs from 'components/NavTabs';
import links from './links.json';
import styles from './styles';

const Header = () => {
	return (
		<styles.Wrapper>
			<styles.TopHeader>
				<styles.Text>Magneto</styles.Text>
			</styles.TopHeader>
			<styles.Navigation>
				<NavTabs links={links} />
			</styles.Navigation>
		</styles.Wrapper>
	);
};

export default Header;
