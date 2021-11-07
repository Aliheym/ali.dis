import { Routes, Route } from 'react-router-dom';
import { CreateTopicPage } from './topic/create';

export const PageRouting = () => {
  return (
    <Routes>
      <Route path="/topic/create" element={<CreateTopicPage />} />

      <Route path="*" element={<div>Not Found Page</div>} />
    </Routes>
  );
};
