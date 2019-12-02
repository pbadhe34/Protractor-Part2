/// <reference path='TestModule.ts' />

var exportedClassInstance = new mymod.ExportedClass();

exportedClassInstance.testUpdate()

import ExportedClass = mymod.ExportedClass;
var newInstance = new ExportedClass();

newInstance.testUpdate()

var obj = new mymod.TestClass();

