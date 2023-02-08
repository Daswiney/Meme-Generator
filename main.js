const mainApp = document.querySelector('.app');
const memeForm = document.querySelector('#memeForm');
const inputTextTop = document.querySelector('#contentTextTop');
const inputTextBottom = document.querySelector('#contentTextBottom');
const inputImg = document.querySelector('#contentImg');
const memeList = document.querySelector('#memeList');

memeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // create a new meme element
    const meme = document.createElement('div');
    meme.classList.add('meme');
    // create the image element
    const memeImg = document.createElement('img');
    memeImg.src = inputImg.value;
    memeImg.alt = 'Meme image';
    meme.appendChild(memeImg);
    // create the top text element
    const memeTopText = document.createElement('div');
    memeTopText.classList.add('top-text');
    memeTopText.innerText = inputTextTop.value;
    meme.appendChild(memeTopText);
    // create the bottom text element
    const memeBottomText = document.createElement('div');
    memeBottomText.classList.add('bottom-text');
    memeBottomText.innerText = inputTextBottom.value;
    meme.appendChild(memeBottomText);
    //delete button, when hover
        meme.addEventListener('mouseenter', function(e){
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0px 0px 10px #666";
          e.target.style.cursor = "pointer";
          let closeButton = document.createElement("div");
          closeButton.innerHTML = "X";
          closeButton.style.position = "absolute";
          closeButton.style.top = "0";
          closeButton.style.right = "0";
          closeButton.style.backgroundColor = "red";
          closeButton.style.color = "white";
          closeButton.style.padding = "5px";
          closeButton.style.fontSize = "20px";
          closeButton.style.fontWeight = "bold";
          closeButton.style.cursor = "pointer";
          closeButton.style.userSelect = "none";
          meme.appendChild(closeButton);
        });
        meme.addEventListener('mouseleave', function(e){
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
          e.target.style.cursor = "default";
          meme.removeChild(meme.lastChild);
        });
        meme.addEventListener('click', function(e){
          e.preventDefault();
          e.target.parentElement.remove();
        });
    // add the meme to the list
    memeList.prepend(meme);
    });