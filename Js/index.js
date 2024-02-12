let burger = document.getElementById('burger');
        let mobileLinks = document.getElementById('mobile-links');
        let burgerLine1 = document.getElementById('burger-line1');
        let burgerLine2 = document.getElementById('burger-line2');
        let burgerLine3 = document.getElementById('burger-line3');
        let filter4 = document.getElementById('filter4');
        burger.addEventListener('click', ()=>{
          
          if(mobileLinks.style.display == 'none'){
          mobileLinks.style.display = 'flex';
          // burgerLine2.style.opacity = '0%';
          // burgerLine1.style.rotate='45deg';
          // burgerLine3.style.rotate = '-45deg';
          // burgerLine1.style.transform = 'translate(50%)';
          // burgerLine3.style.transform = 'translate(50%)';
         }
         else {
          mobileLinks.style.display = 'none';
          burgerLine2.style.opacity = '100%';
          burgerLine1.style.rotate = '180%';
          burgerLine3.style.rotate = '180%';
         }
        })