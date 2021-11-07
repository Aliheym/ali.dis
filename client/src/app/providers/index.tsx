import { withApollo } from './with-apollo';
import { withRouter } from './with-router';

export const withProviders = (component: React.FC) => withApollo(withRouter(component));
