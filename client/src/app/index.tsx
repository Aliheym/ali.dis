import { PageLayout } from './layout';
import { withProviders } from './providers';

import { PageRouting } from 'pages';

function App() {
  return (
    <PageLayout>
      <PageRouting />
    </PageLayout>
  );
}

export default withProviders(App);
