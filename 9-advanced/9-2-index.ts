{
  const obj = {
    name: 'yushin'
  }

  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female'
  };

  type Name = Animal['name'] // string
  const text: Name = 'hello' // 123은 안됨

  type Gender = Animal['gender'];

  type Keys = keyof Animal;
  const key:Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person:Person = {
    name: 'yushin',
    gender: 'male'
  }
}
