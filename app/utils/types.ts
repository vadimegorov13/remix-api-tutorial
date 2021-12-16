export type JokeLink = {
  id: string;
  name: string;
};

export type JokesData = {
  jokeListItems: Array<JokeLink>;
};

export type ActionData = {
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
