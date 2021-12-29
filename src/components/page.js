import { useState } from 'react';
import { Logo } from './logo/logos';
import { NavBar } from './navBar/navBar';
import { BreadcrumbsBar } from './breadcrumbsBar';
import { PointsList } from './pointList/point-list';
import { PointsCanvas } from './points-canvas';
import { CreateForm } from './createForm/create-form';
import { genUid } from './genUid';

const POINTS_STORAGE_KEY = 'points-storage-key';

export const Page = () =>  {

  const [points, setPoints] = useState(() => {
    return  JSON.parse(localStorage.getItem(POINTS_STORAGE_KEY)) || [];
  })

  const [pages] = useState([
    { pageName: 'Points' },
    { pageName: 'Circles' },
    { pageName: 'Triangles' },
    { pageName: 'Rectangles' },
  ]);

  const [create, setCreate] = useState(false);
  const [currentActive, setCurrentActive] = useState(0);

  const handleOpenForm = () => {
    setCreate(!create)
  }

  const currentActiveChange = (index) => {
    setCurrentActive(index);
  }

  const handleDeletePoint = (index) => {
    const draftPoints = [...points];
    draftPoints.splice(index, 1);
    localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(draftPoints));
    setPoints(draftPoints);
  }

  const handleSavePoint = (point) => {
    const draftPoints = [...points, { ...point, id: genUid() }];
    localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(draftPoints));
    setPoints(draftPoints);
  }

    return (
      <div className="pageContent">
        <div className="header">
          <Logo />
          <NavBar
            pages={pages}
            current={currentActive}
            onCurrentActiveChange={(index) => currentActiveChange(index)}
          />
        </div>

        <BreadcrumbsBar
          current={currentActive}
          pages={pages}
          onCreateClick={() => handleOpenForm()}
          disabledCreate={create}
        />

        <div className="pointsPage">
          <PointsList
            points={points}
            onDeleteClick={(index) => handleDeletePoint(index)}
          />

          <div className="PointsCanvas">
            <PointsCanvas />
            {
              create && (
                <CreateForm
                  onSave={(point) => handleSavePoint(point)}
                  onCreateClick={() => handleOpenForm()}
                />
              )
            }
          </div>
        </div>
      </div>
    );
}
