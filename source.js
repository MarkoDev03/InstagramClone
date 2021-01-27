/*HEADER DESKTOP ITEMS*/
var desktopHeaderIcons = [
  { class: "fa-home", function: "refresh" },
  { class: "fa-comment", function: "messages" },
  { class: "fa-compass", function: "compass" },
  { class: "fa-heart", function: "liked" },
  { class: "fa-user-circle", function: "profile" }
];
function displayDesktopHeaderIcons() {
  for (var i = 0; i < desktopHeaderIcons.length; i++) {
    document.querySelector(
      ".pc-header"
    ).innerHTML += `<i class="far ${desktopHeaderIcons[i].class} icon-option" onclick="${desktopHeaderIcons[i].function}()"></i>`;
  }
}
displayDesktopHeaderIcons();

/*HEADER MOBILE ICONS*/
var mobileHeaderIcons = [
  { class: "fa-heart", function: "liked" },
  { class: "fa-comment", function: "messages" },
];
function displayMobileHeaderIcons() {
  for (var i = 0; i < mobileHeaderIcons.length; i++) {
    document.querySelector(
      ".phone-header"
    ).innerHTML += `<i class="far ${desktopHeaderIcons[i].class} icon-option" onclick="${desktopHeaderIcons[i].function}()"></i>`;
  }
}
displayMobileHeaderIcons();

/*EVENTS IN HEADER*/
function refresh() {
  window.location.href = "index.html";
}
function messages() {
  window.location.href = "index.html";
}
function compass() {
  window.location.href = "index.html";
}
function profile() {
  window.location.href = "index.html";
}
function liked() {
  window.location.href = "index.html";
}

/*SEARCH*/
function showSearch() {
  document.querySelector(
    ".search-main"
  ).innerHTML = `  <input type="text" name="search" id="profile-search-index" class="search-index" autocomplete="off" placeholder="Search"><div class="search-results-here"></div>`;
  document.querySelector(
    ".image-in-header"
  ).innerHTML = `<img src="./media/headline-black.png" alt="" class="headline-image" onclick="refresh()">`;
}
showSearch();

/*SEARCH IN HEADER FUNCTION*/

//ARRAY FOR PROFILES
var accounts = [{username: "offwhite",profile_image: "./media/offwhite-profile-instagram.png",profile_name: "Off White",id: 1,},{username: "natureig",profile_image: "./media/nature.png",profile_name: "🏝Nature🏝",id: 2,},{username: "user_000",profile_image: "./media/username_0.png",profile_name: "Instagram profile",id: 3,},{username: "designer",profile_image: "./media/designer-profile-image-set.png",profile_name: "Design",id: 5,},{username: "plantsig",profile_image: "./media/circle-croppedG.png",profile_name: "🍀plants🍀",id: 4,},{username: "personal",profile_image: "./media/personal-blog-profile-image.png",profile_name: "personalblog",id: 6,},{username: "animals",url: "animals.html",profile_image: "./media/animals.png",profile_name: "Wild Animals",id: 7,},{username: "emoji_ig",url: "emoji_ig.html",profile_image: "./media/smile_profile_image.png",profile_name: "Emojies",id: 8,},];

var searchInHeader = document.getElementById("profile-search-index");
var resultsLista = document.querySelector(".search-results-here");

//FUNCTIONS FOR SEARCH
function setList(group) {
    clearList();
    for(const account of group) {

  //DISPLAY RESULT BLOCK
  resultsLista.style.display = 'flex';
  resultsLista.style.height = '200px';

  //VARIABLES
  const result = document.createElement('div');const username = document.createElement('p');const name = document.createElement('p');const image = document.createElement('img');const divs = document.createElement('div');

  //SOURCES
  image.src = account.profile_image; name.textContent =account.profile_name; username.textContent =account.username;

  //CLASSLIST.ADD
   divs.classList.add('username-name-result');result.classList.add('result-item-style');name.style.color = 'grey'; name.style.marginTop = '-13px';username.style.color = 'black';name.style.fontSize = '10px';username.style.fontSize = '12px';result.style.display = 'flex';result.style.justifyContent = 'space-between';result.style.alignItems = 'center';image.style.width = '35px';name.style.fontWeight='100';username.style.fontWeight='700';image.style.height = '35px';image.style.borderRadius = '50%';result.style.fontFamily = 'Verdana';result.style.height = '50px';divs.style.display = 'flex';divs.style.flexGrow = 1;divs.style.flexDirection = 'column';divs.style.marginLeft = '10px';result.style.fontStyle = 'bold';
  
   //APPEND CHILD
   resultsLista.appendChild(result);result.appendChild(image);divs.appendChild(username);divs.appendChild(name);result.appendChild(divs);

    result.addEventListener('click',() => {
    sessionStorage.setItem("userID",account.id);
    window.location.href = 'profile.html';
 });}
    if(group.length == 0) {
    setNoResults();
    }
}

function clearList() {
   while(resultsLista.firstChild) {
    resultsLista.removeChild(resultsLista.firstChild);
    resultsLista.style.display = 'none';
   }
}

function setNoResults() {
    
    //DISPLAY RESULT BLOCK
    resultsLista.style.display = 'flex';
    resultsLista.style.height = 'fit-content';
    //VARIABLES
    const block = document.createElement('div');const text = document.createElement('p');
    
    //STYLE
    block.classList.add('result-item-style');text.textContent = "No results founf for"+" '"+searchInHeader.value+"'";block.style.width = '200px';block.style.backgroundColor = 'white';block.style.borderRight = '1px';block.style.borderBottom = '1px';block.style.borderRight = '1px';block.style.padding = '5px';block.style.borderColor = 'grey';text.style.fontFamily = 'Verdana';text.style.fontSize = '14px';
  
    //APPEND_CHILD 
    block.appendChild(text);resultsLista.appendChild(block);
}

function getRelevancy(value, searchTerm) {
    if(value === searchTerm) {
        return 2;
    }else if(value.startsWith(searchTerm)) {
        return 1;
    }else if(value.includes(searchTerm)) {
        return 0;
    }else return -1;
}

searchInHeader.addEventListener('input', (event) => {
    let value = event.target.value;
    if(value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(accounts.filter(person => {
            return person.username.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.username, value)  - getRelevancy(personA.username, value); 
        }))
    }else {
        clearList();
    }
});
 
/*SOIORTES */
var stories = [{tittle:"Your story",profileimage:"./media/profile_picture",id:1},{tittle:"user_000",profileimage:"./media/username_0",id:2},{tittle:"natureig",profileimage:"./media/nature",id:3},{tittle:"cars__ig",profileimage:"./media/cars",id:4},{tittle:"animals",profileimage:"./media/animals",id:5 },{tittle:"emoji_ig",profileimage:"./media/smile_profile_image",id:6},{tittle:"videosig",profileimage:"./media/urusprofile_image",id:7},{tittle:"personal",profileimage:"./media/personal-blog-profile-image",id:8},{tittle:"designer",profileimage:"./media/designer-profile-image-set",id:9},{tittle:"offwhite",profileimage:"./media/offwhite-profile-instagram",id:10},{tittle:"plantsig",profileimage:"./media/circle-croppedG",id:11},];
var content = document.getElementById('story-index');
function instagramStories() {
    for(var i=0;i<stories.length;i++)
    {
        content.innerHTML += `<div class="swiper-slide story-content"><img src="${stories[i].profileimage}.png" alt="" class="profile-picture-story"><p class="username-story">${stories[i].tittle}</p></div>`;
    }
}
instagramStories();
var swiper = new Swiper('.swiper1', 
{
    slidesPerView: 1,
    spaceBetween: 10,
        breakpoints: {
            360:{ 
                slidesPerView:4.5,
                spaceBetween:0,},
                400: { 
                    slidesPerView:5,
                    spaceBetween:5},
                    402:{
                        slidesPerView:5,
                        spaceBetween:10},
                         640:{
                             slidesPerView: 5,
                             spaceBetween: 20,},
                             768:{
                                 slidesPerView: 6,
                                  spaceBetween: 40,},
                                  1024:{
                                      slidesPerView:7,
                                      spaceBetween: 50,},
                                    1400:{
                                        slidesPerView: 7,},
                                       1920:{
                                          slidesPerView:7,
                                          spaceBetween: 5,
                                        },                                
                                          loop: true,
                                          loopFillGroupWithBlank: true,                                                                                  
                                    }});
                                    
                                    var post = [
                                      {
                                          username: "offwhite",
                                          profileimage: "./media/offwhite-profile-instagram",
                                          postcontent: "./media/offwhiteinstag",
                                          likes: "Liked by natureig and thousands of others",
                                          commentContent: "yeezy350",
                                          mention: "Credit:",
                                          mentiontag: "@username_0",
                                          hashatags: "#Instagram #clone  #enjoy #cars #nature #sneakers #design #Instagram #clone #web-design #enjoy #cars #nature #sneakers #design",
                                          time: "2 h",
                                          hashatagsurl: "#",
                                          id: 1,
                                          idp:11,
                                          hrt:877787787878,
                                          ikedbySign:"Liked by",
                                          and:"and",
                                          incl:"thousands of others",
                                          likescountrt:"",
                                          likeTag:"designer"
                                      },
                                      {
                                          username: "natureig",
                                          profileimage: "./media/nature",
                                          postcontent: "./media/nature_picture_1",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 123.874,
                                          commentContent: "Beautiful view on ocean from clifs in California",
                                          mention: "",
                                          mentiontag: "",
                                          hashatags: "#Instagram #clone #web-design  #Instagram #clone #web-design #enjoy #cars #nature #sneakers #design",
                                          time: "2 days",
                                          threedots: "three_dots",
                                          url: "nature.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 2,
                                          idp:21,
                                          hrt:84894494945,
                                          ikedbySign:"Liked by",
                                          and:"and",
                                          incl:"thousands of others",
                                          likescountrt:"",
                                          likeTag:"user_000"
                                      },
                                      {
                                          username: "user_000",
                                          profileimage: "./media/username_0",
                                          postcontent: "./media/image_nature_1",                                         
                                          likes: 789,
                                          commentContent: "Welcome to Instagram clone by Marko Perovic",
                                          mention: "Me",
                                          mentiontag: "@username_0",
                                          hashatags: "#Instagram #clone #web-design # #clone #web-design #enjoy #cars #nature  #design #Instagram #clone #enjoy #cars #nature #sneakers #design",
                                          time: "1 week",
                                          threedots: "three_dots",
                                          url: "user_0.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 3,
                                          idp:31,
                                          hrt:8678879,
                                          ikedbySign:"",
                                          and:"",
                                          incl:"",
                                          likescountrt:"1.323 Likes",
                                          likeTag:""
                                      },
                                      {
                                          username: "plantsig",
                                          profileimage: "./media/circle-croppedG",
                                          postcontent: "./media/UcQ1Im",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 9.851,
                                          commentContent: "Lorem Ipsum is simply dummy  when an  took a galley of type and scrambled it to make a type specimen book. It has",
                                          mention: "",
                                          mentiontag: "",
                                          hashatags: "#web-developing#Instagram#images",
                                          time: "3 years",
                                          threedots: "three_dots",
                                          url: "plantsig.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "",
                                          tagedurl: "likedpage.html",
                                          id: 4,
                                          idp:41,
                                          hrt:86958,
                                          ikedbySign:"",
                                          and:"",
                                          incl:"",
                                          likescountrt:"124 Likes",
                                          likeTag:""
                                      },
                                      {
                                          username: "designer",
                                          profileimage: "./media/designer-profile-image-set",
                                          postcontent: "./media/javasc",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 151.115,
                                          commentContent: "Frontend Developing.Lorem Ipsum is  ever since the 1500s, when an uLorem Ipsum is",
                                          mention: "",
                                          mentiontag: "@user_0 @animals @cars @deigner_03",
                                          hashatags: "#web-developing#images#wrappers#colorful #profiles#nature#art#world",
                                          time: "12 sec",
                                          threedots: "three_dots",
                                          url: "designer_03.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 5,
                                          idp:51,
                                          hrt:8694,
                                          ikedbySign:"Liked by",
                                          and:"and",
                                          incl:"thousands of others",
                                          likescountrt:"",
                                          likeTag:"personal"
                                      },
                                      {
                                          username: "personal",
                                          profileimage: "./media/personal-blog-profile-image",
                                          postcontent: "./media/userprof",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 1235511,
                                          commentContent: "Small island in middle of oceantext of the ptext ever since the",
                                          mention: "Follow",
                                          mentiontag: "@username",
                                          hashatags: "#nature #instagram #animals #islands#Instagram#images",
                                          time: "8h",
                                          threedots: "three_dots",
                                          url: "personal.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 6,
                                          idp:61,
                                          hrt:78869,
                                          ikedbySign:"Liked by",
                                          and:"and",
                                          incl:"thousands of others",
                                          likescountrt:"",
                                          likeTag:"carsig"
                                      },
                                      {
                                          username: "animals",
                                          profileimage: "./media/animals",
                                          postcontent: "./media/tags_animals",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 1484,
                                          commentContent: "JAGUAR😀🍀🏝💯🎵🕡👍Lorem Ipsum is simply dummy , took a galley of type Ipsum is simply dummy text of the ptext ever since the 1500s,",
                                          mention: "",
                                          mentiontag: "",
                                          hashatags: "#Instagram#images#wrappers#colorful #profiles#nature#design#art#world#life",
                                          time: "1h",
                                          threedots: "three_dots",
                                          url: "animals.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 7,
                                          idp:71,
                                          hrt:77,
                                          ikedbySign:"",
                                          and:"",
                                          incl:"",
                                          likescountrt:"834.782 Likes",
                                          likeTag:""
                                      },
                                      {
                                          username: "emoji_ig",
                                          profileimage: "./media/smile_profile_image",
                                          postcontent: "./media/smiles",
                                          likeheart: "liked_post",
                                          comment: "comment_post",
                                          share: "share_post",
                                          save: "save_post",
                                          likes: 22332,
                                          commentContent: "🍀🏝💯🎵👍😀🕡 😀🍀🏝",
                                          mention: "",
                                          mentiontag: "",
                                          hashatags: "#Instagram#images#wrappers#colorful ",
                                          time: "12 min",
                                          threedots: "three_dots",
                                          url: "emoji_ig.html",
                                          commnetpage: "comments.html",
                                          hashatagsurl: "#",
                                          tagedurl: "likedpage.html",
                                          id: 8,
                                          idp:81,
                                          hrt:58158,
                                          ikedbySign:"Liked by",
                                          and:"and",
                                          incl:"thousands of others",
                                          likescountrt:"",
                                          likeTag:"plantsig"
                                      },
                                  ];

var postLocation = document.querySelector('.posts-index');
function showPosts() {
     for(var i=0;i<post.length;i++) {
      postLocation.innerHTML += `<div class="post">
      <div class="post-header">
        <div class="profile-image-username">
          <img src="${post[i].profileimage}.png" alt="" class="profile-image">
          <p class="username">${post[i].username}</p>
        </div>
        <i class="fas fa-ellipsis-v  icon-option"></i>
      </div>
      <div class="post-content">
        <img src="${post[i].postcontent}.jpg" alt="" class="post-image">
      </div>
      <div class="post-functions">
        <div class="left-functions">
          <i class="far fa-heart icon-option icon-functions"></i>
          <i class="fas fa-heart icon-option icon-functions" style="display:none"></i>
          <i class="far fa-comment icon-option icon-functions"></i>
          <i class="far fa-paper-plane icon-option icon-functions"></i>
        </div>
        <i class="far fa-bookmark icon-option"></i>
        <i class="fas fa-bookmark icon-option" style="display:none"></i>
      </div>
      <div class="liked-info">
        <p class="liked-text">${post[i].ikedbySign}	&nbsp;</p><p class="thousand">${post[i].likescountrt}  ${post[i].likeTag}&nbsp;</p><p>${post[i].and}&nbsp;</p><p class="thousand">${post[i].incl}</p><p></p><p class=""></p>
      </div>
      <div class="comment-info">
       <p class="username username-profile">${post[i].username}	&nbsp;</p>
      <div class="comment-flex">
      <p class="comment">${post[i].commentContent}</p>
      <p class="hashtags-tags">${post[i].hashatags}</p>
      </div>
      </div>
    <p class="show-all">Show all comments (15)</p>
    <div class="time">
      <p class="period">${post[i].time} ago</p>
      <p>&nbsp;·&nbsp;</p>
      <p class="translation">See translation</p>
    </div>
    <div class="leav-comment">
      <input type="text" name="comment" id="comment-id" autocomplete="off" class="leav-comment-input" placeholder="Leave your comment here...">
      <p class="send-comment">Post</p>
    </div>
    </div>
    <div class="lds-heart"><div></div>`;
     }

}
showPosts();