import React from 'react';
import { AppNavigationCtx } from '../component/Navigation';
/**
 * Hoc that adds a navigation object for wrapped component
 */
export function navigationHoc<P>(WrappedComponent: React.ComponentType<P>) {
    const ComponentWithNavigationInfo = (props: P) => (
        <AppNavigationCtx.Consumer>
            {(contexts) => <WrappedComponent {...props} {...contexts} />}
        </AppNavigationCtx.Consumer>
    );
    return ComponentWithNavigationInfo;
}
