export type NavigateFunc = (state?: stateLocationType) => void;

export interface stateLocationType {
    from?: string;
    [key: string]: any;
}

export interface INavigation {
    goBack: () => void;
    goRoot: NavigateFunc;
    goToSongs: NavigateFunc;
    goToChords: NavigateFunc;
    goTo404: NavigateFunc;
    goTo500: NavigateFunc;
    goToCommonError: NavigateFunc;
}
