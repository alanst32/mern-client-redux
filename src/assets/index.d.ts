declare module '\*.svg' {
    import React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGElement>>;
    const src: string;
    export default src;
}