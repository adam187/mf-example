
    export type RemoteKeys = 'host/someFileFromHost';
    type PackageType<T> = T extends 'host/someFileFromHost' ? typeof import('host/someFileFromHost') :any;