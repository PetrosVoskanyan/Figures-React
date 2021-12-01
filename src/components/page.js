import { Component } from 'react';
import { Logo } from './logos';
import { NavBar } from './navBar';
import { BreadcrumbsBar } from './breadcrumbsBar';
import { PointsList } from './point-list';
import { points } from './pages';
import { PointsCanvas } from './points-canvas';

export class Page extends Component {
  state = {
    pages : [
      {
        pageName: 'Points',
        active: true,
      },
      {
        pageName: 'Circles',
        active: false,
      },
      {
        pageName: 'Triangles',
        active: false,
      },
      {
        pageName: 'Rectangles',
        active: false,
      },
    ],
  }
  render() {
    return(
      <div className="pageContent">
        <div className="header">
          <Logo />
          <NavBar
            pages={this.state.pages}
          />
        </div>
          <BreadcrumbsBar
            pages={this.state.pages}
          />
        <div className="pointsPage">
          <PointsList
            pages={points}
          />
          <PointsCanvas />
        </div>
      </div>
    )
  }
}
