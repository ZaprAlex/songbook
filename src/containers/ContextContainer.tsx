import React, { FC, useReducer } from 'react';
import { ModalCtx, initialState, userReducer } from '../reducer/modal';

const ContextContainer: FC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const contextValue = { state, dispatch } as React.ContextType<typeof ModalCtx>;

    return <ModalCtx.Provider value={contextValue}>{children}</ModalCtx.Provider>;
};

export default ContextContainer;
