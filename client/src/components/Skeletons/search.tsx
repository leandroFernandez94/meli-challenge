import { Fragment } from "react";
import ContentLoader from "react-content-loader";
import BreadcrumbLoader from "./common";

const BREADCRUMBS_HEIGHT = 50;
const PHOTO_SIZE = 212;

const ResultLoader = ({ index }: { index: number }) => {
  const startingYPosition = index * PHOTO_SIZE + BREADCRUMBS_HEIGHT;

  return (
    <Fragment>
      {/* Photo */}
      <rect
        x="16"
        y={startingYPosition}
        rx="3"
        ry="3"
        width="180"
        height="180"
      />

      {/* Price */}
      <rect
        x={PHOTO_SIZE}
        y={startingYPosition + 32}
        rx="3"
        ry="3"
        width="90"
        height="24"
      />

      {/* name */}
      <rect
        x={PHOTO_SIZE}
        y={startingYPosition + 100}
        rx="3"
        ry="3"
        width="380"
        height="18"
      />
      <rect
        x={PHOTO_SIZE}
        y={startingYPosition + 130}
        rx="3"
        ry="3"
        width="100"
        height="18"
      />
    </Fragment>
  );
};

const SearchLoaderSkeleton = ({ resultsLength }: { resultsLength: number }) => {
  const totalHeight = resultsLength * PHOTO_SIZE + BREADCRUMBS_HEIGHT;
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={totalHeight}
      viewBox={`0 0 600 ${totalHeight}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <BreadcrumbLoader />

      {new Array(resultsLength).fill(null).map((_, index) => (
        <ResultLoader index={index} key={index} />
      ))}
    </ContentLoader>
  );
};

export default SearchLoaderSkeleton;
