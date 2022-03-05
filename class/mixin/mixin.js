const mixinClass = {
  foo: function () {
    console.log(this.name);
  },
};

const obj = Object.assign({ name: "tao" }, mixinClass);
obj.foo();
