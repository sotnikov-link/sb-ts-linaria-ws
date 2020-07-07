import { isIE } from '@example/ui';
import * as React from 'react';
import { LiveCoreProps } from './LiveCore';

const LiveCore = React.lazy(() => import('./LiveCore'));

export const Live = React.memo<LiveCoreProps>((props) => {
  if (isIE) {
    return (
      <p>
        В Internet Explorer не доступен редактор кода, используйте современный
        браузер, например Chrome
      </p>
    );
  } else {
    return (
      <React.Suspense fallback={<p>Loading…</p>}>
        <LiveCore {...props} />
      </React.Suspense>
    );
  }
});

Live.displayName = 'Live';
