


document.addEventListener('DOMContentLoaded', function(){
    function changeHeader(){
        
        let headerClasses = document.getElementsByTagName('header')[0].classList;
        if(window.scrollY > 0){
            let isHeaderHasClass = headerClasses.contains('scrolling');   
            if(!isHeaderHasClass){
                headerClasses.add('scrolling');
        }else{
            headerClasses.remove('scrolling');
            }   
        }
    }
    document.addEventListener('scroll', changeHeader);
    //video

    let videoElement = document.getElementsByTagName('video')[0];

    function setVideoPlay() {
        console.log(videoButton,videoElement);
        videoButton.style.display  = 'none';
        videoElement.style.display = 'block';
        videoElement.play();
    }

    let videoButton = document.querySelector(".videoplay a");
    videoButton.addEventListener("click", setVideoPlay);
});
