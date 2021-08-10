import Tab from '@material-ui/core/Tab';

const LinkTab = props => (
	<Tab
		component="a"
		onClick={event => {
			event.preventDefault();
		}}
		{...props}
	/>
);

export default LinkTab;
