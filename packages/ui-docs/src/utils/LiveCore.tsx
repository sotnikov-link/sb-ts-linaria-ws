import github from 'prism-react-renderer/themes/github';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export type LiveCoreProps = React.ComponentPropsWithoutRef<typeof LiveProvider>;

export const LiveCore = React.memo<LiveCoreProps>((props) => (
  <LiveProvider {...props} theme={github}>
    <LivePreview />
    <LiveEditor />
    <LiveError />
  </LiveProvider>
));

LiveCore.displayName = 'LiveCore';

export default LiveCore;
