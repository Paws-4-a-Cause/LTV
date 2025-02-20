import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      {/* Common layout components like header, footer, etc. */}
      <Outlet />
    </div>
  );
}

export default MainLayout;
