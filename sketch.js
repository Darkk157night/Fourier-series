let time = 0;
let wave = [];
let path = [];

let slider;
let sliderradii;
let slidertime;

function setup() {
  createCanvas(1200, 700);
  slider = createSlider(1, 100, 1);
  slider.position(20,20);
  sliderradii = createSlider(10,50,1);
  sliderradii.position(20,50);
  slidertime = createSlider(1,100,1);
  slidertime.position(20,80);

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
  text('n-th value', slider.x*2 + slider.width, 35);
  text('amplitide', sliderradii.x*2 +sliderradii.width,65);
  text('Frequency',slidertime.x*2+slidertime.width,95);
  text('type of wave',290 + select.width,35);
  text('current values', 450+select.width,35);
  text('n-th value = '+slider.value(),450+select.width,65);
  text('Amplitude = '+sliderradii.value(),450+select.width,95);
  text('Frequency = '+slidertime.value()/100,450+select.width,125);
  
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

