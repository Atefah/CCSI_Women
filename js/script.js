  // Get references to all the "Read More" links and associated additional content paragraphs
  const readMoreLinks = document.querySelectorAll('.read-more-link');
  const additionalContents = document.querySelectorAll('.additional-content');
  
  // Add a click event listener to each "Read More" link
  readMoreLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from navigating to a new page
  
        // Toggle the visibility of the corresponding additional content
        if (additionalContents[index].style.display === 'none' || additionalContents[index].style.display === '') {
            additionalContents[index].style.display = 'block';
            link.textContent = 'Read Less';
        } else {
            additionalContents[index].style.display = 'none';
            link.textContent = 'Read More';
        }
    });
  });


  const faders = document.querySelectorAll('.fade-in');
  const sliders = document.querySelectorAll('.slide-in');
  const appearOptions  = {
    threshold:0,
    rootMargin: "0px 0px -250px 0px"
  };
  const appearOnScroll= new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target)
      }
    })
  },appearOptions);
  faders.forEach(fader =>{
    appearOnScroll.observe(fader)
  });

  sliders.forEach(slider =>{
    appearOnScroll.observe(slider)
  })



  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
  //     document.getElementById("navbar").style.padding = "10px 10px";
  //     document.getElementById("logo").style.width = "300px";
  //   } else {
  //     document.getElementById("navbar").style.padding = "20px 10px";
  //     document.getElementById("logo").style.width = "400px";
  //   }
  // }