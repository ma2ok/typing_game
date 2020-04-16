'use scrict'

{
  const word ='apple';
  let loc =0;
  let score =0;
  let miss =0;

  const target = document.getElementById('target');
  const scoreLavbel = document.getElementById('score');
  const missLavbel = document.getElementById('miss');

  target.textContent = word;

  window.addEventListener('keydown',(e) =>{
    console.log(e.key);
    if (e.key === word [loc]){
      console.log('score');
        loc++;
        score++;
        scoreLavbel.textContent =score;
      } else {
        console.log('miss');
        miss++;
        missLavbel.textContent =miss;

      }
  });
}