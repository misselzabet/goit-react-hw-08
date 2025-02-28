import { Link } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const NoFoundPage = () => {
	return (
		<div >
			<DocumentTitle>Page not found</DocumentTitle>
			<p>Sorry, the page you are looking for could not be found.</p>
			<button>
				<Link to='/'>Go to Homepage</Link>
			</button>
		</div>
	);
};

export default NoFoundPage;