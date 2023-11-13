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

  // function fetch_info(i) {
  //   let profile = ["img/Caterina Ventura photo.jpeg","img/Enrico Carisch photo.jpeg","img/Loraine3.jpg" ,"img/Maiko3.jpg"];
  //   let name = [
  //     "Caterina Ventura",
  //     "Enrico Carisch",
  //     "Loraine Rickard",
  //     "Maiko"
  //   ];
  //   let status = [
  //     "Director",
  //     "Director",
  //     "Director",
  //     "Chief Executive Officer"
  //   ];
  //   let about = [
  //     'Caterina Ventura is Chief Executive Officer of CCSI-Women-Canada. She is an international lawyer with extensive experience in a range of political, economic and human rights issues, at The Hague, in the United Nations, Human Rights and Economic Law Division, at the Canadian Human Rights Commission, and in the Ontario Human Rights Commission.',
  //     'Enrico Carisch is Director of CCSI-Women-Canada and co-founder and Chief Executive Officer of CCSI where he leads its training  programs for public and privates sector professionals that have been conducted in well over  50 countries.  CCSI’s training programs  assist governments and the private sector  in building their capacity',
  //     ' Loraine Rickard-Martin is a Director  of CCSI-Women-Canada. She co-founded Compliance and Capacity Skills International (CCSI) in 2011. She served as its Chief Executive Officer until July 2023 and continues to chair CCSI’s Board from which she oversees CCSI’s program of delivering training projects focused on capacity building assistance',
  //     'Maiko is a Director  of CCSI-Women-Canada. She co-founded Compliance and Capacity Skills International (CCSI) in 2011. She served as its Chief Executive Officer until July 2023 and continues to chair CCSI’s Board from which she oversees CCSI’s program of delivering training projects focused on capacity building assistance'
  // ]
  //   document.getElementById("profile").src = profile[i];
  //   document.getElementById("name").innerHTML = name[i];
  //   document.getElementById("status").innerHTML = status[i];
  //   document.getElementById("about").innerHTML = about[i];
    
  // }

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("logo").style.width = "300px";
    } else {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("logo").style.width = "400px";
    }
  }
  

  var content1 = document.getElementById("ModalContent1");
  var content2 = document.getElementById("ModalContent2");
  var content3 = document.getElementById("ModalContent3");
  var btn1 = document.getElementById("modal1");
  var btn2 = document.getElementById("modal2");
  var btn3 = document.getElementById("modal3");
  
  function openModal1() {
   
    content1.style.transform = "translateX(0)"; 
    content2.style.transform = "translateX(100%)"; 
    content3.style.transform = "translateX(100%)"; 
    btn1.style.borderColor="orange";
    // btn2.style.borderColor="#000";
    // btn3.style.borderColor="#000";

  }

  function openModal2() {
  
    content1.style.transform = "translateX(100%)"; 
    content2.style.transform = "translateX(0)"; 
    content3.style.transform = "translateX(100%)"; 
    btn2.style.borderColor="orange";
    btn1.style.borderColor="white";
    btn3.style.borderColor="white";
  }

  function openModal3() {

    content1.style.transform = "translateX(100%)"; 
    content2.style.transform = "translateX(100%)"; 
    content3.style.transform = "translateX(0)"; 
    btn3.style.borderColor="orange";
    btn1.style.borderColor= "white";
    btn2.style.borderColor="white";
   
  }


  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
         
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          document.getElementById('navbar_top').style.backgroundColor="#fffff7";
          // document.getElementById('link').style.color="black";
          
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
          document.getElementById('navbar_top').style.backgroundColor="transparent";
          // document.getElementById('link').style.color="white";
         
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 