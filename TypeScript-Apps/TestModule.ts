module mymod {
 
  export function doWork() {
    // this function can be accessed from outside the module
  }
 
  export class ExportedClass {
    // this class can be accessed from outside the module

      testUpdate(): string
     {
        return 1213;
     }

  }
 
  class TestClass {
    // this class can only be accessed from inside the module
  }
}