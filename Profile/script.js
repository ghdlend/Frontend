let currentIndex = 0;
function changeProfile(){
    const names = ["손흥민","류현진","김연아"];
    const jobs = ["축구선수","야구선수","피겨스케이팅"];
    const images = ["profile1.jpg","profile2.jpg","profile3.jpg"];

    document.getElementById("name").textContent = names[currentIndex];
    document.getElementById("job").textContent = jobs[currentIndex];
    document.querySelector(".profile-img").src = images[currentIndex];

    currentIndex = (currentIndex + 1) % names.length;
}