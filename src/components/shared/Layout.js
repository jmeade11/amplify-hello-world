import styled from 'styled-components';

const Header = styled.header`
	background-color: var(--dark);
	padding: 2rem;
`;

const Body = styled.main`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1rem;
	padding: 2rem;
`;

const Title = styled.h1`
	color: var(--primary);
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.75rem;
	font-weight: 200;
	margin: 0;
`;

export default function Layout({ children }) {
	return (
		<>
			<Header>
				<Title>React + Amplify</Title>
			</Header>
			<Body>{children}</Body>
		</>
	);
}
