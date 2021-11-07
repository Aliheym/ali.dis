import { withRouter } from './with-router';

export const withProviders = (component: React.FC) => () => withRouter(component);
