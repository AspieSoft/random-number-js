const random = require('./script.min');

random.setLiteMode();
random.setClearInterval(0);

for(let i = 0; i < 10; i++){
  console.log(random());
}
