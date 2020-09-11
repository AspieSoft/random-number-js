/*! https://github.com/AspieSoft/random-number-js v1.0.0 | (c) aspiesoftweb@gmail.com | https://github.com/AspieSoft/random-number-js */

;const random = (function(){
  let oldRand = [];

  function randomInt(min, max){

    // ensure
    min = Number(min);
    max = Number(max);
    if(min === NaN || max === NaN){
      return NaN;
    }

    // ensure min < max
    if(min > max){
      let temp = min;
      min = max;
      max = temp;
    }

    // return simple number if min is close or equal to max
    if(min === max){
      return min;
    }else if(min + 1 === max){
      if(Math.floor(Math.random()*10) % 2 === 0){
        return min;
      }else{
        return max;
      }
    }

    // use time millis for random numbers
    let time = (new Date()).getTime().toString().slice(-10);
    let maxLen = Math.max(Math.abs(max).toString().length, Math.abs(min).toString().length);
    let randMaxLength = Math.pow(10, maxLen);
    let result = '';

    // select random index from time millis
    while(result.length < maxLen){
      result += time[Math.floor(Math.random()*10)];
      // random chance to cut number short
      if(Math.floor(Math.random()*randMaxLength) % 2 === 0 && Math.floor(Math.random()*randMaxLength) % 2 === 0){
        break;
      }
    }

    let randLength = Math.pow(10, result.length);

    result = result.split('');

    // go through random number indexes with random chance to change index to a new random number
    for(let i = 0; i < result.length; i++){
      let rand1 = Math.floor(Math.random()*10);
      let rand2 = Math.floor(Math.random()*randLength);
      let rand3 = Math.floor(Math.random()*randLength);
      if((rand1 % 2 === 0 && rand2 % 2 === 0 && rand3 % 2 === 0) || (rand1 % 2 !== 0 && ((rand2 % 2 === 0 && rand3 % 2 !== 0) || (rand2 % 2 !== 0 && rand3 % 2 === 0)))){
        result[i] = Math.floor(Math.random()*10).toString();
      }
    }

    if(Math.floor(Math.random()*100) % 2 === 0){
      result.reverse();
    }

    if(result[0] === '0'){
      result[0] = '1';
    }

    // convert number string, to actual number
    result = Number(result.join(''));
    
    // if min or max is negative, add random chance to switch to negative (absolute if both are negative)
    if(min < 0 && max < 0){
      result *= -1;
    }else if((min < 0 || max < 0) && Math.floor(Math.random()*100) % 2 === 0){
      result *= -1;
    }

    // ensure number is not over the max value
    if(max > 0){
      while(result > max){
        result -= max-1;
      }
    }else if(max < 0){
      while(result > max){
        result += max-1;
      }
    }else if(max === 0 && result > 0){
      return randomInt(min, max);
    }

    // ensure number is not under the min value
    if(min > 0){
      while(result < min){
        result += min+1;
      }
    }else if(min < 0){
      while(result < min){
        result -= min+1;
      }
    }else if(min === 0 && result < 0){
      return randomInt(min, max);
    }

    // ensure min did not increase the number too much (reduce max by reduced min value instead of by max value)
    if(max > 0){
      while(result > max){
        result -= min-1;
      }
    }else if(max < 0){
      while(result > max){
        result += min-1;
      }
    }else if(max === 0 && result > 0){
      return randomInt(min, max);
    }

    // ensure result is not too small or too big or retry (this very rarely could happen)
    if(result < min || result > max){
      return randomInt(min, max);
    }

    // keep track of old results, and reduce chance of repeats
    let preRand = [...oldRand];
    while(preRand.includes(result)){
      if(Math.floor(Math.random()*100) % 2 === 0){
        preRand.splice(preRand.indexOf(result), 1);
      }
      if(Math.floor(Math.random()*100) % 2 === 0 && Math.floor(Math.random()*100) % 2 === 0){
        oldRand.splice(oldRand.indexOf(result), 1);
      }
      if(Math.floor(Math.random()*100) % 2 === 0 || Math.floor(Math.random()*100) % 2 === 0){
        return randomInt(min, max);
      }
    }
    oldRand.push(result);

    return result;
  }


  function randomDouble(min = 0, max = 100, decimalLength = 0){

    // ensure min and max are numbers
    min = Number(min);
    max = Number(max);
    decimalLength = Number(decimalLength);
    if(min === NaN || max === NaN || decimalLength === NaN){
      return 'NaN';
    }

    // ensure min < max
    if(min > max){
      let temp = min;
      min = max;
      max = temp;
    }
    
    let decimalLenInt = Math.floor(decimalLength);
    if(decimalLenInt !== decimalLength){
      decimalLenInt++;
    }
    if(decimalLenInt < 0){
      decimalLenInt *= -1;
    }

    if(decimalLength < 0){
      decimalLength = Math.floor(Math.random()*10);
    }

    let result = randomInt(min, max);
    if(result < min || result >= max || decimalLength == 0){
      return result;
    }

    let decimalLen10 = Math.pow(10, decimalLenInt);

    if(Math.floor(Math.random()*100) % 2 === 0 || Math.floor(Math.random()*100) % 2 === 0){
      let decimal = randomInt(0, decimalLen10-1);
      decimal = decimal.toString();
      while(decimal.length < decimalLenInt && Math.floor(Math.random()*100) % 2 === 0){
        decimal = '0'+decimal;
      }
      decimal = Number('0.'+decimal);
      result += decimal;
    }

    return Math.round(result*decimalLen10)/decimalLen10;
  }

  setInterval(function(){
    oldRand = [];
  }, 10000);

  return randomDouble;
})();
