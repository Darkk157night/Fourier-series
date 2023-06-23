let time = 0;
let wave = [];
let path = [];

let slider;
let sliderradii;
let slidertime;

function setup() {
  createCanvas(1200, 700);
  slider = createSlider(1, 100, 1);
  sliderradii = createSlider(10,50,1);
  slidertime = createSlider(1,100,1);

  select = createSelect();
  select.option("sawtooth");
  select.option("sqaure");
  select.option("triangle");
  select.option("Customwave")
}

function draw() {
  console.log("Iterations = "+slider.value());
  console.log("radius = "+sliderradii.value());
  console.log("Frequency = "+slidertime.value());
  background(0);
  translate(150, 400);
  let wavetype = select.value();

  let x = 0;
  let y = 0;
  let n;
  let radius;
  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
  
    //sawtooth wave
  if( wavetype == 'sawtooth')
  { if(i%2 ==0){
      n = i+1;
    }
    else{
      n = -(i+1);
    }
    radius = sliderradii.value() * (2/n * PI);
    
  }
  //sqaure wave
  else if(wavetype == 'sqaure'){
    n = i * 2 + 1;
    radius = sliderradii.value() * (2/ n * PI);
    
  }
  //custom wave
  

  //triangle wave
  else{
    n = i *2 +1;
    radius = sliderradii.value() * ( 60*(-1)**((n-1)/2)/ ((n**2)*(PI**2)));
    
  }
  x += radius * cos(n * time);
  y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  wave.unshift(y);


  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += slidertime.value()/100;


  if (wave.length > 500) {
    wave.pop();
  }
}

function customwave(){
  radius = sliderradii.value() * 0;
  n = i*2 +1;
}
