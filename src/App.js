import { Route, Routes } from 'react-router-dom';
import { CreateForm } from './components/pages/points/createForm/create-form';
import { PageShell } from './components/page-shell';
import { PointsPage } from './components/pages/points/points.page';
import { CirclePage } from './components/pages/circle/circles.page';
import { CircleCreateForm } from './components/pages/circle/circleCreateForm/circle-create-form';
import { TrianglePage } from './components/pages/triangle/triangles.page';
import { TriangleCreateForm } from './components/pages/triangle/triangleCreateForm/triangle-create-form';
import { RectanglePage } from './components/pages/rectangle/rectangle.page';
import { RectangleCreateForm } from './components/pages/rectangle/rectangleCreateForm/rectangle-create-form';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  AppRoot: {
    backgroundColor: '#0A1929',
    height: '100%',
    margin: 0,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.AppRoot}>
        <Routes>
            <Route path="/" element={<PageShell />}>
              <Route path="points" element={<PointsPage />}>
                <Route path="create" element={<CreateForm />}/>
              </Route>
              <Route path="circles" element={<CirclePage/>}>
                <Route path="create" element={<CircleCreateForm />}/>
              </Route>
              <Route path="triangles" element={<TrianglePage />}>
                <Route path="create" element={<TriangleCreateForm />}/>
              </Route>
              <Route path="rectangles" element={<RectanglePage />}>
                <Route path="create" element={<RectangleCreateForm />}/>
              </Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
