
function change(name){
  var get = document.getElementById(name);
  if(get.style.backgroundColor != "green" ){
    get.style.backgroundColor = "green";
    get.style.color = "#FFF8DC"
    selected(name);
  } else{
    get.style.backgroundColor = "#8B0000";
    get.style.color = "#FFF8DC";
    selected(name);
  }
}

var items = [];

function selected(name){
  var get = document.getElementById(name);
    if(get.style.backgroundColor == "green"){
      items.push(name);
    } else if(get.style.backgroundColor != "green"){
      for(let i = 0; i < items.length; i++){
        if(items[i] == name){
          items.splice(i, 1);
        }
      }
    }
}

// 1 equals do it, 0 equals don't
const trainingData = [
    { input: { healthy: 1, }, output: [1] },
    { input: { healthy: 1, meat: 1, fried: 1 }, output: [1] },
    { input: { KFC: 1, }, output: [1] },
    { input: { tasty: 1, healthy: 1 }, output: [1] },
    { input: { new: 1 }, output: [1] },
    { input: { fatty: 1 }, output: [0] },
    { input: { notTasty: 1 }, output: [0] },
    { input: { unhealthy: 1 }, output: [0] },
    { input: { notTasty: 1, healthy: 1 }, output: [0] },
    { input: { unhealthy: 1, tasty: 1 }, output: [1] },
    { input: { iAmBusy: 1 }, output: [1] },
    { input: { deserve: 1 }, output: [1] },
    { input: { dontDeserve: 1 }, output: [0] },
    { input: { dontDeserve: 1, amSad: 1 }, output: [1] },
];

const net = new brain.NeuralNetwork({hiddenLayer : [3, 3]});

var test = net.train(trainingData, {
  log: (error) => console.log(error)
});

var data = {};

function decide(){
  alert('Are you sure you want a takeaway?')
  data = {};
  for(let i = 0; i < items.length; i++){
    data[items[i]] = [1];
    }

  console.log(data);
  if(Array.from(net.run(data)) > 0.2){
    console.log("yes");
    document.getElementById("yes").innerHTML = "Yes!";
  } else{
    console.log("no");
    document.getElementById("yes").innerHTML = "Sadly No.";
 }

}


  //console.log(decide() + Array.from(net.run(data)));
