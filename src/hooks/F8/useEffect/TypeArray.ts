interface PostType {
  id: number;
  title: string;
  body: string;
}

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface AlbumType {
  userId: number;
  id: number;
  title: string;
}

interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailURL: string;
}

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Union type of all possible data types
export type DataType =
  | PostType
  | CommentType
  | AlbumType
  | PhotoType
  | TodoType
  | UserType;
