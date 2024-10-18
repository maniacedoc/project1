window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector('.visual');
    const colors=[
        "#29ee7b",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#411fd6",
        "#d6296b"
    ];

    //Sound implementation
    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0;
            sounds[index].play();

  
            createBubbles(index);
        });
    });

    //a function that makes bubbles for visual
    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    }
    // Add a mouse trail effect
  const stickContainer = document.createElement('div');
  stickContainer.className = 'stick-container';
  document.body.appendChild(stickContainer);

  let sticks = [];

  document.addEventListener('mousemove', (e) => {
    const stick = document.createElement('div');
    stick.className = 'stick';
    stickContainer.appendChild(stick);
    sticks.push(stick);

    stick.style.left = `${e.clientX}px`;
    stick.style.top = `${e.clientY}px`;

    setTimeout(() => {
      stickContainer.removeChild(stick);
      sticks = sticks.filter((s) => s !== stick);
    }, 100); // remove stick after 100ms
  });
});
