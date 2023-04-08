import Foo from "./modules/Foo.js"
new Foo();

(async () => {
   const m = await import("./modules/Dog")
   .then(m => m.default)

   const dog = new m()
   dog.bark()
})()

console.log("main entry point file.");
