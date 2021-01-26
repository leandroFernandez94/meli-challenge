import ContentLoader from "react-content-loader";
import BreadcrumbLoader from "./common";

const BREADCRUMBS_HEIGHT = 50;
const PHOTO_SIZE = 680;
const DESCRIPTION_HEIGHT = 164;

function DescriptionLineSkeleton({ index }: { index: number }) {
  return (
    <rect
      x={32}
      y={BREADCRUMBS_HEIGHT + PHOTO_SIZE + 82 + 24 * index}
      width="1024"
      height="16"
    />
  );
}

function DetailsLoaderSkeleton() {
  const totalHeight = BREADCRUMBS_HEIGHT + PHOTO_SIZE + DESCRIPTION_HEIGHT;
  return (
    <ContentLoader
      speed={2}
      width={1024}
      height={totalHeight}
      viewBox={`0 0 1024 ${totalHeight}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <BreadcrumbLoader />

      {/* Photo */}
      <rect x="0" y={BREADCRUMBS_HEIGHT} width="680" height="680" />

      {/* Condition */}
      <rect
        x={PHOTO_SIZE + 32}
        y={BREADCRUMBS_HEIGHT + 32}
        width="200"
        height="14"
      />

      {/* Title */}
      <rect
        x={PHOTO_SIZE + 32}
        y={BREADCRUMBS_HEIGHT + 66}
        width="400"
        height="24"
      />
      <rect
        x={PHOTO_SIZE + 32}
        y={BREADCRUMBS_HEIGHT + 96}
        width="150"
        height="24"
      />
      {/* Price */}
      <rect
        x={PHOTO_SIZE + 32}
        y={BREADCRUMBS_HEIGHT + 152}
        width="250"
        height="46"
      />
      {/* Description */}
      <rect
        x={32}
        y={BREADCRUMBS_HEIGHT + PHOTO_SIZE + 32}
        width="450"
        height="28"
      />

      {new Array(3).fill(null).map((_, index) => (
        <DescriptionLineSkeleton index={index} key={index} />
      ))}
    </ContentLoader>
  );
}

export default DetailsLoaderSkeleton;
