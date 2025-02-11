let currentIndex = 0;
function changeProfile(){
    const names = ["손흥민","류현진","김연경"];
    const jobs = ["축구선수","야구선수","피겨스케이팅"];
    const images = ["profile1.jpg","profile2.jpg","profile3.jpg"];

    //랜덤값을 넣고 싶으면 currentIndex 값을 없애고 밑에 문장 삽입
    //let randomIndex = Math.floor(Math.random() * names.length);

    document.getElementById("name").textContent = names[currentIndex];
    document.getElementById("job").textContent = jobs[currentIndex];
    document.querySelector(".profile-img").src = images[currentIndex];

    currentIndex = (currentIndex + 1) % names.length;
}