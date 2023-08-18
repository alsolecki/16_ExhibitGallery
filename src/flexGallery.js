//FLEX TRANSITIONS FOR ALL
  
const panels = document.querySelectorAll('.panel');

function toggleOpen() {this.classList.toggle('open');}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));


//INDIVIDUAL PANELS
  
  
  const panel1 = document.getElementById('p1');
  const panel2 = document.getElementById('p2');
  const panel3 = document.getElementById('p3');
  const panel4 = document.getElementById('p4');
  const panel5 = document.getElementById('p5');
  
  
  panel1.addEventListener('click', () => {
    console.log('p1');
    if (panel1.classList.contains('p1-off')) {
        panel1.classList.replace('p1-off', 'p1-on')
    } else {panel1.classList.replace('p1-on', 'p1-off')
   } 
  });
 
  panel2.addEventListener('click', () => {
    console.log('p2');
    if (panel2.classList.contains('p2-off')) {
        panel2.classList.replace('p2-off', 'p2-on')
    } else {panel2.classList.replace('p2-on', 'p2-off')
   } 
  });

  panel3.addEventListener('click', () => {
    console.log('p3');
    if (panel3.classList.contains('p3-off')) {
        panel3.classList.replace('p3-off', 'p3-on')
    } else {panel3.classList.replace('p3-on', 'p3-off')
   } 
  });

  panel4.addEventListener('click', () => {
    console.log('p4');
    if (panel4.classList.contains('p4-off')) {
        panel4.classList.replace('p4-off', 'p4-on')
    } else {panel4.classList.replace('p4-on', 'p4-off')
   } 
  });

  panel5.addEventListener('click', () => {
    console.log('p5');
    if (panel5.classList.contains('p5-off')) {
        panel5.classList.replace('p5-off', 'p5-on')
    } else {panel5.classList.replace('p5-on', 'p5-off')
   } 
  });


 
  
  
  

