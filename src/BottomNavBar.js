import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './assets/BottomNavBar.css';
import { useContext } from 'react';
import CurrentUserContext from './CurrentUserContext';

const BottomNavBar = () => {
	const { storedValue, currentUser, nprogress } = useContext(CurrentUserContext);

	const onUploadClick = () => {
		nprogress.start();
	}
	
	return (
		<div className='NavBarContainer'>
			{storedValue &&
			currentUser && (
				<div>
					<Row className="Nav fixed-bottom">
						<Col>
							<Link id="home" to="/">
								<span
									style={{ fontSize: '3rem', marginTop: '.5rem' }}
									className="material-symbols-outlined"
								>
									home
								</span>
							</Link>
						</Col>
						<Col>
							<Link id="search" to="/search">
								<span
									style={{ fontSize: '3rem', marginTop: '.5rem' }}
									className="material-symbols-outlined"
								>
									search
								</span>
							</Link>
						</Col>
						<Col>
							<Link id="add_circle" to="/upload" onClick={onUploadClick}>
								<span
									style={{ fontSize: '3rem', marginTop: '.5rem' }}
									className="material-symbols-outlined"
								>
									add_circle
								</span>
							</Link>
						</Col>
						<Col>
							<Link id="person" to={`/${currentUser.username}`}>
								<img
									className="NavBarProfile"
									src={
										currentUser?.profileImageURL
									}
									alt=""
								/>
							</Link>
						</Col>
					</Row>
				</div>
			)}
		</div>
	);
};

export default BottomNavBar;
