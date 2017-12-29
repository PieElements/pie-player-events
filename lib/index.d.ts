export declare class ModelSetEvent extends CustomEvent {
    readonly component: string;
    readonly complete: boolean;
    static TYPE: string;
    constructor(component: string, complete: boolean, hasModel: boolean);
}
export declare type DeleteDone = (e?: Error) => void;
export declare class SessionChangedEvent extends CustomEvent {
    readonly component: string;
    readonly complete: boolean;
    static TYPE: string;
    constructor(component: string, complete: boolean);
}
