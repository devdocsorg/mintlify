import React, { useState } from 'react';
import { Reference } from '../Reference/reference';
import LoaderSvg from '../Loader/loader';

// Define the styles object to avoid CSS module errors
const styles = {
  screenshotContainer: 'screenshot-container',
  imageWrapper: 'image-wrapper',
  screenshot: 'screenshot',
  reference: 'reference',
  actionList: 'action-list'
};

interface Annotation {
  gemBox: string;
  guided_action?: string;
  ref_to?: string;
}

interface ScreenShotProps {
  fn: string;
  ref_to?: string;
  disabled?: boolean;
  alt?: string;
  seq?: string;
  annotations?: Annotation[];
  useLoader?: boolean;
}

export const Screenshot: React.FC<ScreenShotProps> = ({
  fn,
  alt,
  disabled = false,
  ref_to,
  annotations = [],
  useLoader = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  });

  if (disabled) {
    return null;
  }

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    setImageDimensions({
      width: event.currentTarget.naturalWidth,
      height: event.currentTarget.naturalHeight
    });
  };

  return (
    <div className={styles.screenshotContainer}>
      {useLoader && !isLoaded && <LoaderSvg />}
      <div className={styles.imageWrapper}>
        <img
          className={styles.screenshot}
          src={`/img/smarteeva-screenshots/${fn}`}
          alt={alt ?? fn}
          onError={(event) => {
            console.error('Error loading image:', fn);
          }}
          onLoad={handleImageLoad}
        />
      </div>

      {ref_to && (
        <div className={styles.reference}>
          
        </div>
      )}

      {annotations.length > 0 && (
        <ol className={styles.actionList}>
          {annotations.map((annotation, index) => (
            <li key={index}>
              {annotation.guided_action && (
                <span>Action: {annotation.guided_action}</span>
              )}
              {annotation.ref_to && (
                
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};