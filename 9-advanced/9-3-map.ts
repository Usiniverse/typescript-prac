{
  type Video = {
    title: string;
    author: string;

  };

  type Optional<T> = {
    [P in keyof T]?: T[P] // = for...in
    // for...in : object의 key를 순회하는 연산자
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  }
  const animal : Optional<Animal> = {
    name: 'dog'
  };
  animal.name = 'yushin';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'yushin'
  }
  
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null
  }

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}