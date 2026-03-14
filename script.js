const reels= [
  {
    username: "priya_sharma",
    userProfilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    video: "one.mp4",
    caption: "Sunset vibes at Marine Drive 🌅✨ #Mumbai #Sunset #GoldenHour",
    likeCount: 24500,
    isLiked: false,
    commentCount: 342,
    shareCount: 1200,
    isShared: false
  },
  {
    username: "rahul.fitness",
    userProfilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
    video: "two.mp4",
    caption: "Morning workout grind 💪🔥 No days off! #Fitness #GymLife #Motivation",
    likeCount: 18900,
    isLiked: true,
    commentCount: 215,
    shareCount: 870,
    isShared: false
  },
  {
    username: "foodie_neha",
    userProfilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
    video: "three.mp4",
    caption: "Homemade Butter Chicken recipe 🍛❤️ Drop a 🙋 if you want the recipe! #Food #IndianFood #Cooking",
    likeCount: 52300,
    isLiked: false,
    commentCount: 1890,
    shareCount: 4300,
    isShared: true
  },
  {
    username: "travel_with_arjun",
    userProfilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
    video: "four.mp4",
    caption: "Exploring the hidden valleys of Himachal 🏔️🌿 #Travel #Himachal #Mountains #Wanderlust",
    likeCount: 37800,
    isLiked: true,
    commentCount: 560,
    shareCount: 2100,
    isShared: true
  },
  {
    username: "dance.with.kavya",
    userProfilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
    video: "five.mp4",
    caption: "Classical meets contemporary 💃🎶 #Dance #Bharatnatyam #Fusion #ReelItFeelit",
    likeCount: 89400,
    isLiked: false,
    commentCount: 3200,
    shareCount: 7600,
    isShared: false
  },
  {
    username: "tech_guy_rohan",
    userProfilePhoto: "https://randomuser.me/api/portraits/men/6.jpg",
    video: "six.mp4",
    caption: "5 VS Code shortcuts that will change your life 🖥️⚡ #Coding #WebDev #TechTips #Programming",
    likeCount: 43200,
    isLiked: false,
    commentCount: 780,
    shareCount: 5400,
    isShared: false
  },
  {
    username: "meera.art_studio",
    userProfilePhoto: "https://randomuser.me/api/portraits/women/7.jpg",
    video: "seven.mp4",
    caption: "Watercolor magic in slow motion 🎨🖌️ #Art #Watercolor #Painting #ArtProcess",
    likeCount: 31600,
    isLiked: true,
    commentCount: 428,
    shareCount: 1900,
    isShared: false
  },
  {
    username: "chef_vikram",
    userProfilePhoto: "https://randomuser.me/api/portraits/men/8.jpg",
    video: "eight.mp4",
    caption: "Street style Pav Bhaji in 3 minutes 🍲🔥 #StreetFood #PavBhaji #Mumbai #FoodReels",
    likeCount: 67100,
    isLiked: false,
    commentCount: 2340,
    shareCount: 8900,
    isShared: true
  },
  {
    username: "ananya.lifestyle",
    userProfilePhoto: "https://randomuser.me/api/portraits/women/9.jpg",
    video: "nine.mp4",
    caption: "My morning routine that changed everything ☀️🧘‍♀️ #MorningRoutine #Lifestyle #Wellness #SelfCare",
    likeCount: 29800,
    isLiked: false,
    commentCount: 615,
    shareCount: 3200,
    isShared: false
  },
  {
    username: "comedy_with_karan",
    userProfilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
    video: "ten.mp4",
    caption: "When mom finds out you failed the exam 😂💀 #Comedy #Relatable #IndianMom #Funny",
    likeCount: 145000,
    isLiked: true,
    commentCount: 8900,
    shareCount: 23000,
    isShared: true
  }
];
let sum='';
reels.forEach(function(elem)
{
    sum=sum+`<div class="one_reel">
                       <video autoplay loop muted src="${elem.video}"></video>
                <div class="bottom">
                 <div class="user">
                       
                    <img src="${elem.userProfilePhoto}" alt="">
                    <h4>${elem.username}</h4>
                    <button>${elem.isShared?'Unfolow':'Folow'}</button>
                 </div>
                        <div>
                    <h3>${elem.caption}</h3>
                        </div>
                    </div>
                    <div class="right">
                    <div class="like">
                        <h4>${elem.isLiked?'<i class="ri-heart-3-fill love"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="menu">
                        <h4><i class="ri-more-2-line"></i></h4>
                        
                    </div>

                </div>
 
                </div> `

    
})
var all_reels=document.querySelector('.all_reel')
all_reels.innerHTML=sum;

