import * as React from 'react';
import { Live } from './Live';

export type LiveSetProps = {
  components: {
    [componentName: string]: React.ComponentType;
  };
};

export const LiveSet = React.memo<LiveSetProps>(({ components }) => (
  <Live
    scope={components}
    code={Object.keys(components).reduce(
      (acc, componentName, index, sourceArray) => {
        const isLast = index === sourceArray.length - 1;
        const content = `<${componentName} />${isLast ? '' : '\n'}`;
        return acc + content;
      },
      ''
    )}
  />
));

LiveSet.displayName = 'LiveSet';
