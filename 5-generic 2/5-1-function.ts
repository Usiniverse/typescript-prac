{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }

  // GENERIC : null이 아닐 때만 똑같은 타입을 리턴한다.
  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('not valid number');
    } 
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  console.log(number);
  console.log(boal);
  
}
