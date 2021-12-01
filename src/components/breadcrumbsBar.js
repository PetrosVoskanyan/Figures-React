import { Button } from './Button';

export const BreadcrumbsBar = ({ pages }) => {
  return(
    <div className="BreadcrumbsBar">
      <Button size="small">
      {
        pages.map((item) => (
          item.active ? item.pageName : ""
        ))
      }
      </Button>
      <Button
        size="big"
        variant="contained">
        Create
      </Button>
    </div>
  )
}
