export class ModelSetEvent extends CustomEvent {

  static TYPE = 'model-set';

  constructor(readonly component: string, readonly complete: boolean, hasModel: boolean) {

    //TODO: composed isnt in the CustomEvent def yet so casting as any for now.
    super(ModelSetEvent.TYPE, { bubbles: true, composed: true, detail: { complete, component, hasModel } } as any);
  }
}

export type DeleteDone = (e?: Error) => void;

export class SessionChangedEvent extends CustomEvent {

  static TYPE = 'session-changed';

  constructor(readonly component: string, readonly complete: boolean) {
    //TODO: composed isnt in the CustomEvent def yet so casting as any for now.
    super(SessionChangedEvent.TYPE, { bubbles: true, composed: true, detail: { complete, component } } as any);
  }
}

