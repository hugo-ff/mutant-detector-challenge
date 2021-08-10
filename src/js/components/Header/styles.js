import styled from 'styled-components';
import flexCenter from 'theme/mixins';
import { fontWeight } from 'theme/typography';
import { getColor } from 'theme/utils';

const Wrapper = styled.header`
	${flexCenter}
	width: 100%;
	background-color: ${getColor('primary', 'main')};
`;

const TopHeader = styled.div`
	${flexCenter}
	height: 60px;
	width: 100%;
	text-align: center;
`;

const Text = styled.span`
	text-align: center;
	${flexCenter}
	font-size: 40px;
	font-weight: ${fontWeight.extraBold};
	margin: 0 auto;
	text-transform: uppercase;
	color: ${getColor('common', 'white')};
`;

const Navigation = styled.div`
	margin: 0 auto;
	max-width: 1200px;
`;

export default { Wrapper, TopHeader, Navigation, Text };
