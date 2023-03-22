import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './NavBar.css';
import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';

const NavBar = () => {
	const { storedValue, currentUser } = useContext(CurrentUserContext);
	return (
		<div>
			{storedValue &&
			currentUser && (
				<div>
					<Row className="Nav fixed-bottom">
						<Col>
							<Link id="home" to="/home">
								<span className="material-symbols-outlined">home</span>
							</Link>
						</Col>
						<Col>
							<Link id="search" to="/search">
								<span className="material-symbols-outlined">search</span>
							</Link>
						</Col>
						<Col>
							<Link id="add_circle" to="/create">
								<span className="material-symbols-outlined">add_circle</span>
							</Link>
						</Col>
						<Col>
							<Link id="person" to={`/${currentUser.username}`}>
								<span className="material-symbols-outlined">person</span>
							</Link>
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};

export default NavBar;