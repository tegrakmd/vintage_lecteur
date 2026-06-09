declare module "jsmediatags" {
  interface Picture {
    data: number[];
    format: string;
  }
  interface Tags {
    title?: string;
    artist?: string;
    picture?: Picture;
  }
  interface TagResponse {
    tags: Tags;
  }
  interface ReaderOptions {
    onSuccess: (response: TagResponse) => void;
    onError?: (error: any) => void;
  }
  class Reader {
    constructor(file: string);
    read(options: ReaderOptions): void;
  }
  export default {
    Reader,
  };
}
