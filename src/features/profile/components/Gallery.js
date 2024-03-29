import '../assets/Profile.css';
import { Link } from 'react-router-dom';
import Favorite from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { useContext } from 'react';
import CurrentUserContext from '../../../context/CurrentUserContext';
// import ProfileSkeleton from './ProfileSkeleton';

const Gallery = ({ userBeingViewed }) => {
	const { nprogress } = useContext(CurrentUserContext);
	const onPostClick = () => {
		nprogress.start();
	}

	return (
		<div className="gallery">
			{/* {	
				isLoading &&
				<ProfileSkeleton cards={6} />
			} */}
			{userBeingViewed?.posts?.slice(0).reverse().map((post) => {
				return (
					<Link
						to={`/posts/${post.postId}`}
						key={post.postId}
						state={{
							imageURL: post.postURL,
							caption: post.caption,
							username: userBeingViewed?.username,
							profileImageURL: userBeingViewed?.profileImageURL,
							postId: post.postId,
							postKey: post.postKey,
							createdAt: post.createdAt,
							numLikes: post.numLikes
						}}
						onClick={onPostClick}
					>
						<div className="gallery-item" tabIndex="0">
							<img className="gallery-image" src={post.postURL} alt={post.postId} loading='lazy' />
							<div className="gallery-item-info">
								<ul>
									<li className="gallery-item-likes" key={`${post.postId}-gallery-item-likes`}>
										<Favorite style={{ color: 'white', fontSize: '2rem' }} />
										{post.numLikes}
									</li>
									<li className="gallery-item-comments" key={`${post.postId}-gallery-item-comments`}>
										<ModeCommentIcon style={{ color: 'white', fontSize: '2rem' }} />
										{post.numComments}
									</li>
								</ul>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Gallery;
