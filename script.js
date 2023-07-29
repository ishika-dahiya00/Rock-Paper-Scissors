const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_img");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "rock.png";
    result.textContent ="Wait..."

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");
    
    let time = setTimeout(() => {
        gameContainer.classList.remove("start");
      let imgSrc = e.target.querySelector("img").src;
      userResult.src = imgSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["rock.png", "paper.png", "scissors.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "CPU",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "CPU",
        SS: "Draw",
        SR: "CPU",
        SP: "User",
      };
      let outComeValue = outcomes[userValue + cpuValue];

      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
