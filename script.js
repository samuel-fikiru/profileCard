let followerCount = 0;
updateFollowerCount();


const followButton =document.querySelector(".js-folllow-button");
followButton.addEventListener('click', ()=>{
    followerCount++;
    updateFollowerCount();
})

function updateFollowerCount(){
  document.querySelector(".follower-count").innerHTML = followerCount;
}
