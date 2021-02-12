let name = {
  firstname: "Randeep",
  lastname: "Rana",
};

function printFullName(city, state) {
  console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

let printMyName = printFullName.bind(name, "Haridwar", "Uttrakhand");
printMyName();

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params]);
  };
};

let printmybindname = printFullName.mybind(name, "Saharanpur", "Uttarpradesh");
printmybindname();
