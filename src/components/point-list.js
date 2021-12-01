import { Avatar } from './avatar';

export const PointsList = ({ pages }) => {
  return (
    <div className="pointList">
      {
        pages.map((item) => (
          <div className="coordination">
            <Avatar text={item.pointName}/>
            <span className="coordinationName">Coordinates:x-{item.x},y-{item.y}</span>
          </div>
        ))
      }
    </div>
  )
}
