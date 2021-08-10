import { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { validateArray } from 'utils';
import palette from 'theme/palette';
import LinkTab from './components/LinkTab';
import styles from './styles';

const NavTabs = ({ links }) => {
	const [value, setValue] = useState(0);

	const { secondary } = palette;

	const { root } = makeStyles(theme => ({
		root: {
			flexGrow: 1,
			backgroundColor: theme.palette.background.paper,
		},
	}));

	const a11yProps = index => {
		return {
			id: `nav-tab-${index}`,
			'aria-controls': `nav-tabpanel-${index}`,
		};
	};

	const renderLinks =
		validateArray(links) &&
		links.map(({ label, href }, id) => (
			<LinkTab key={id.toString()} label={label} href={href} {...a11yProps(id)} />
		));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<styles.NavTabs className={root} data-testid="navTabs">
			<AppBar position="static">
				<Tabs
					variant="fullWidth"
					value={value}
					onChange={handleChange}
					aria-label="nav-tabs"
					TabIndicatorProps={{ style: { background: secondary.main } }}
				>
					{renderLinks}
				</Tabs>
			</AppBar>
		</styles.NavTabs>
	);
};

NavTabs.propTypes = {
	links: arrayOf(
		shape({
			label: string,
			href: string,
		})
	),
};

NavTabs.defaultProps = {
	links: [],
};

export default NavTabs;
