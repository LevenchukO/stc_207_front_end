import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, RoutePath } from 'shared/config/routeConfig/routeConfig';

const  AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          { Object.values(routeConfig).map(({element, path}) => (
            <Route
             key={path}
             path={path} 
             element={element} />
          ))}
        </Routes>
      </Suspense>
    );
};

export default  AppRouter;