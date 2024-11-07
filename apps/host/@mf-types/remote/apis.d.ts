
    export type RemoteKeys = 'remote/someFileFromRemote';
    type PackageType<T> = T extends 'remote/someFileFromRemote' ? typeof import('remote/someFileFromRemote') :any;