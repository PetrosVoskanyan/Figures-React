import { Button } from './button/button';

export const BreadcrumbsBar = ({
  current,
  pages,
  disabledCreate,
  onCreateClick,
}) => {
  return (
    <div className="BreadcrumbsBar">
      <Button size="small">
        {
          pages.map((item, index) => (
            current === index ? item.pageName : ''
          ))
        }
      </Button>

      <Button
        size="big"
        variant="contained"
        onClick={() => onCreateClick()}
        disabled={disabledCreate}
      >
        Create
      </Button>
    </div>
  );
};
