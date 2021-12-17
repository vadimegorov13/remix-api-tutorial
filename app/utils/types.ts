import { Joke, User } from "@prisma/client";

export type JokeData = {
  joke: Joke;
  isOwner: boolean;
};

export type JokeLink = {
  id: string;
  name: string;
};

export type JokesData = {
  user: User | null;
  jokeListItems: Array<JokeLink>;
};

export type JokeActionData = {
  formError?: string;
  fieldErrors?: {
    name: string | undefined;
    content: string | undefined;
  };
  fields?: {
    name: string;
    content: string;
  };
};

export type UserActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

export type LoginForm = {
  username: string;
  password: string;
};
