import { Component } from 'react';
import { Logo } from './logo/logos';
import { NavBar } from './navBar/navBar';
import { BreadcrumbsBar } from './breadcrumbsBar';
import { PointsList } from './pointList/point-list';
import { PointsCanvas } from './points-canvas';
import { CreateForm } from './createForm/create-form';

const POINTS_STORAGE_KEY = 'points-storage-key';

export class Page extends Component {
  state = {
    points: JSON.parse(localStorage.getItem(POINTS_STORAGE_KEY)) || [],
    pages: [
      { pageName: 'Points' },
      { pageName: 'Circles' },
      { pageName: 'Triangles' },
      { pageName: 'Rectangles' },
    ],
    create: false,
    currentActive: 0,
  };

  get activePage() {
    return this.state.pages[this.state.currentActive];
  }

  render() {
    return (
      <div className="pageContent">
        <div className="header">
          <Logo />
          <NavBar
            pages={this.state.pages}
            current={this.state.currentActive}
            onCurrentActiveChange={(index) => this.currentActiveChange(index)}
          />
        </div>

        <BreadcrumbsBar
          current={this.state.currentActive}
          pages={this.state.pages}
          onCreateClick={() => this.handleOpenForm()}
          disabledCreate={this.state.create}
        />

        <div className="pointsPage">
          <PointsList
            points={this.state.points}
            onDeleteClick={(index) => this.handleDeletePoint(index)}
          />

          <div className="PointsCanvas">
            <PointsCanvas />
            {
              this.state.create && (
                <CreateForm
                  onSave={(point) => this.handleSavePoint(point)}
                  onCreateClick={() => this.handleOpenForm()}
                />
              )
            }
          </div>
        </div>
      </div>
    );
  }

  handleOpenForm() {
    this.setState({
      create: !this.state.create,
    });
  }

  currentActiveChange(index) {
    this.setState({
      currentActive: index,
    });
  }

  handleDeletePoint(index) {
    const points = this.state.points;
    points.splice(index, 1);
    localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(points));

    this.setState({ points });
  }

  handleSavePoint(point) {
    const points = [...this.state.points, point];
    localStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(points));

    this.setState({ points });
  }
}
