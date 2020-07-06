import github from 'prism-react-renderer/themes/github';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export type LiveProps = React.ComponentPropsWithoutRef<typeof LiveProvider>;

export const Live = React.memo<LiveProps>((props) => (
  <LiveProvider {...props} theme={github}>
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
));

Live.displayName = 'Live';
