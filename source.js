/*-------------------------------------------------EVENTS IN HEADER------------------------------------------------------------------*/

//REFRESH PAGE OR TURN BACK TO INDEX.HTML
function refresh() {
  window.location.href = "index.html";
}

//GO TO PAGE FOR MESSAGES AND CHATING
function messages() {
  window.location.href = "index.html";
}

//GO TO RECOMMENDED POSTS PAGE FOR DESKTOP
function compass() {
  window.location.href = "index.html";
}

//GO TO YOUR PROFILE
function profile() {
  window.location.href = "index.html";
}

//GO TO LIKE PAGE DATA AND FOLLOWING
function liked() {
  window.location.href = "index.html";
}

/*---------------------------------------------------------SEARCH IN HEADER----------------------------------------------------------*/

//DISPLAY SEARCH BAR
function showSearch() {
  document.querySelector(
    ".search-main"
  ).innerHTML = `  <input type="text" name="search" id="profile-search-index" class="search-index" autocomplete="off" placeholder="Search"><div class="search-results-here"></div>`;
}

//CALL FUNCTION
showSearch();

/*-------------------------------------------------------SEARCH IN HEADER FUNCTION---------------------------------------------------*/

//ARRAY FOR PROFILES
var accounts = [
  {username: "offwhite",profile_image: "./media/offwhite-profile-instagram.png",profile_name: "Off White",id: 1,},
  {username: "natureig",profile_image: "./media/nature.png",profile_name: "🏝Nature🏝",id: 2,},
  {username: "user_000",profile_image: "./media/username_0.png",profile_name: "Instagram profile",id: 3,},
  {username: "designer",profile_image: "./media/designer-profile-image-set.png",profile_name: "Design",id: 5,},
  {username: "plantsig",profile_image: "./media/circle-croppedG.png",profile_name: "🍀plants🍀",id: 4,},
  {username: "personal",profile_image: "./media/personal-blog-profile-image.png",profile_name: "personalblog",id: 6,},
  {username: "animals",url: "animals.html",profile_image: "./media/animals.png",profile_name: "Wild Animals",id: 7,},
  {username: "emoji_ig",url: "emoji_ig.html",profile_image: "./media/smile_profile_image.png",profile_name: "Emojies",id: 8,},
];

//SEARCH VARIABLES
var searchInHeader = document.getElementById("profile-search-index");
var resultsLista = document.querySelector(".search-results-here");

//FUNCTIONS FOR SEARCH
function setList(group) {

  clearList();

  for (const account of group) {

    //DISPLAY RESULT BLOCK
    resultsLista.style.display = "flex";
    resultsLista.style.height = "200px";

    //CREATING DOM ELEMENTS FOR SEARCH RESULTS IN HEADER
    const result = document.createElement("div");
    const username = document.createElement("p");
    const name = document.createElement("p");
    const image = document.createElement("img");
    const divs = document.createElement("div");

    //SOURCES FOR DATA
    image.src = account.profile_image;
    name.textContent = account.profile_name;
    username.textContent = account.username;

    //CLASSLIST.ADD
    divs.classList.add("username-name-result");result.classList.add("result-item-style");name.style.color = "grey";name.style.marginTop = "-13px";username.style.color = "black";name.style.fontSize = "10px";username.style.fontSize = "12px";result.style.display = "flex";result.style.justifyContent = "space-between";result.style.alignItems = "center";image.style.width = "35px";name.style.fontWeight = "100";username.style.fontWeight = "700";image.style.height = "35px";image.style.borderRadius = "50%";result.style.fontFamily = "Verdana";result.style.height = "50px";divs.style.display = "flex";divs.style.flexGrow = 1;divs.style.flexDirection = "column";divs.style.marginLeft = "10px";result.style.fontStyle = "bold";

    //APPEND CHILD
    resultsLista.appendChild(result);
    result.appendChild(image);
    divs.appendChild(username);
    divs.appendChild(name);
    result.appendChild(divs);

    //OPEN NEW HTML PAGE ON ARRAY[I] CLICK
    result.addEventListener("click", () => {
      sessionStorage.setItem("userID", account.id);
      window.location.href = "profile.html";
    });
  }
  if (group.length == 0) {

    setNoResults();

  }
}

//CLEAR PARENT ELEMENT OF CHILDRENS
function clearList() {
  while (resultsLista.firstChild) {
    resultsLista.removeChild(resultsLista.firstChild);
    resultsLista.style.display = "none";
  }
}

//SHOW NO RESULTS FOUND
function setNoResults() {
  
  //DISPLAY RESULT BLOCK
  resultsLista.style.display = "flex";
  resultsLista.style.height = "fit-content";

  //VARIABLES
  const block = document.createElement("div");
  const text = document.createElement("p");

  //STYLE
  block.classList.add("result-item-style");text.textContent = "No results founf for" + " '" + searchInHeader.value + "'";block.style.width = "200px";block.style.backgroundColor = "white";block.style.borderRight = "1px";block.style.borderBottom = "1px";block.style.borderRight = "1px";block.style.padding = "5px";block.style.borderColor = "grey";text.style.fontFamily = "Verdana";text.style.fontSize = "14px";

  //APPEND CHILD
  block.appendChild(text);
  resultsLista.appendChild(block);
}

//SORT RESULTS FOR SEARCH
function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else return -1;
}

//INPUT SEARCH PROFILES FUNCTION MAIN
searchInHeader.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      accounts
        .filter((person) => {
          return person.username.includes(value);
        })
        .sort((personA, personB) => {
          return (
            getRelevancy(personB.username, value) -
            getRelevancy(personA.username, value)
          );
        })
    );
  } else {
    clearList();
  }
});

/*----------------------------------------------HEADER & POSTS & STORIES & FOOTER --------------------------------------------------*/

//WHERE TO DISPLAY CONTENT 
var postLocation = document.querySelector(".posts-index");
var storyLocation = document.getElementById("story-index");

/*GET ALL DATA FROM DATABASE FOR POSTS*/
class DataProvider {

  //GET DATA FOR POSTS
  async getData() {
    try {
      let API = "data.json";
      let provideData = await fetch(API);
      let data = await provideData.json();
      let post = data.posts;
      post = post.map((item) => {
        let username = item.username,profileimage = item.profileimage,postcontent = item.postcontent,likes = item.likes,commentContent = item.commentContent,mention = item.mention,mentiontag = item.mentiontag,hashatags = item.hashatags,time = item.time,idp = item.idp,id = item.id,hrt = item.hrt,ikedbySign = item.ikedbySign,and = item.and,incl = item.incl,likescountrt = item.likescountrt,likeTag = item.likeTag,hashatagsurl = item.hashatagsurl;let likeinfo = item.likeinfo;
        return {
            username,profileimage,postcontent,likes,commentContent,mention,mentiontag,hashatags,time,idp,id,hrt,ikedbySign,and,incl,likescountrt,likeTag,hashatagsurl,likeinfo,
        };
      });
      return post;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      //console.log("Connection with database successed");
    }
  }

  //GET DATA FOR STORIES
  async getStories() {
    try {
      let API = "data.json";
      let provideData = await fetch(API);
      let data = await provideData.json();
      let story = data.storiesArray;
      story = story.map((item) => {
        let id = item.id;
        let image = item.profileimage;
        let title = item.title;
        let classSt = item.class;
        let profileimageclass = item.imagecls;
        let usernameMargin = item.usernameMargin;
        return { 
          id, image, title, classSt, profileimageclass, usernameMargin
         };
      });
      return story;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      //console.log("Connection with database successed");
    }
  }

  //GET DATA FOR HEADER FONTAWESOME ICONS
  async getHeaderIcons() {
    try {
      let API = "data.json";
      let icon = await fetch(API);
      let data = await icon.json();
      let respond = data.desktopHeaderIcons;
      respond = respond.map((item) => {
        let classHeader = item.class;
        let functionsHeader = item.function;
        return {
           classHeader, functionsHeader 
          };
      });
      return respond;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      //console.log("Connection with database successed");
    }
  }

  //GET DATA FOR FOOTER FONTAWESOME ICONS
  async getFooterData() {
    try {
      let API = "data.json";
      let respond = await fetch(API);
      let data = await respond.json();
      let items = data.footerCellPhoneIcons;
      items = items.map((item) => {
        let classFooter = item.class;
        let functionsFooter = item.function;
        return { 
          classFooter, functionsFooter 
        };
      });
      return items;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      //console.log("Connection with database successed");
    }
  }

  //GET DATA FOR MOBILE HEADER
  async getMobileHeader() {
    try {
      let API = "data.json";
      let data = await fetch(API);
      let result = await data.json();
      let icons = result.mobileHeaderIcons;
      icons = icons.map((icon) => {
        let classHeaderMobile = icon.class;
        let functionHeaderMobile = icon.function;
        return { 
          classHeaderMobile, functionHeaderMobile 
        };
      });
      return icons;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      //console.log("Connection with database successed");
    }
  }
}

/*UI CLASS FOR ALL POSTS */
class showContentOnPagesWhenLoadedClass {

  //SHOW POSTS ON PAGE
  displayPosts(posts) {
    let result = "";
    posts.forEach((post) => {
      result += `
      <div class="post"><div class="post-header"><div class="profile-image-username" ><div class="frame-index"><div class="white-index"><img src="${post.profileimage}.png" alt="" class="profile-image"></div></div><p class="username margin-user-name" onclick="profile(${post.id})">${post.username}</p></div><i class="fas fa-ellipsis-v  icon-option respondive-dots" onclick="reportPost()"></i></div><div class="post-content"><img src="${post.postcontent}.jpg" alt="" class="post-image" id="${post.idp}" ondblclick="showLikeOnPost(${post.hrt},${post.likes},${post.likeinfo})"><div class="lds-heart" id="${post.hrt}"><div></div></div></div><div class="post-functions"><div class="left-functions"><i class="far fa-heart icon-option icon-functions" id="${post.likes}" onclick="showLikeOnPost(${post.hrt},${post.likes},${post.likeinfo})"></i><i style="display:none" class="fas fa-heart icon-option icon-functions hide-heart-for-like" id="${post.likeinfo}"></i><i class="far fa-comment icon-option icon-functions"></i><i class="far fa-paper-plane icon-option icon-functions"></i></div><i class="far fa-bookmark icon-option"></i><i class="fas fa-bookmark icon-option" style="display:none"></i></div><div class="liked-info"><p class="liked-text font-for-comment">${post.ikedbySign}	&nbsp;</p><p class="thousand font-for-comment">${post.likescountrt}  ${post.likeTag}&nbsp;</p><p class="font-for-comment">${post.and}&nbsp;</p><p class="thousand font-for-comment">${post.incl}</p><p></p></div><br><div class="comment-info"><div><span class="comment"><span class="username username-profile">${post.username} 	&nbsp;</span><span class="comment-color font-for-comment">${post.commentContent}</span><span class="hashtags-tags font-for-comment">${post.hashatags}</span></div></div><div class="bottom-post"><p class="show-all">Show all comments (15)</p><div class="time"><p class="period">${post.time} ago</p><p>&nbsp;·&nbsp;</p><p class="translation">See translation</p></div></div><div class="leav-comment"><input type="text" name="comment"  autocomplete="off" class="leav-comment-input" placeholder="Leave your comment here..."><p class="send-comment">Post</p></div></div></div>`;
    });
    postLocation.innerHTML = result;
  }

  //SHOW STOREIES ON PAGE
  displayStories(stories) {
    var results = "";
    stories.forEach((story) => {
      results += `
      <div class="swiper-slide story-content" id="${story.id}"><div class="${story.classSt}"><div class="white-frame"><img src="${story.image}.png" alt="" class="profile-picture-story ${story.profileimageclass}"></div></div><p class="${story.usernameMargin}">${story.title}</p></div>`;
    });
    storyLocation.innerHTML = results;

    //SWIPER FUNCTION FOR STORIES AND BREAKPOINTS FOR RESPONSIVE
    var swiper = new Swiper(".swiper1", {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        360: { slidesPerView: 4.5, spaceBetween: 5 },
        400: { slidesPerView: 4.5, spaceBetween: 5 },
        402: { slidesPerView: 5, spaceBetween: 10 },
        640: { slidesPerView: 5, spaceBetween: 20 },
        768: { slidesPerView: 5, spaceBetween: 40 },
        1024: { slidesPerView: 7, spaceBetween: 5 },
        1400: { slidesPerView: 7, spaceBetween: 5 },
        1920: { slidesPerView: 7, spaceBetween: 5 },
        loop: true,
        loopFillGroupWithBlank: true,
      },
    });
  }

  //SHOW HEADER ON PAGE
  displayDesktopHeaderIcons(icon) {
    icon.forEach((desktopHeaderIcons) => {
      document.querySelector(".pc-header").innerHTML += `
        <i class="${desktopHeaderIcons.classHeader} icon-option" onclick="${desktopHeaderIcons.functionsHeader}()"></i>`;
    });
  }

  //SHOW FOOTER ON PAGE
  displayFooterIconsForCellPhone(items) {
    items.forEach((footerCellPhoneIcons) => {
      document.querySelector(".footer-index").innerHTML += `
        <i class="${footerCellPhoneIcons.classFooter} icon-option" onclick="${footerCellPhoneIcons.classHeader}()"></i>`;
    });
  }

  //SHOW HEADER FOR MOBILE ON PAGE
  displayMobileHeaderIcons(items) {
    items.forEach((mobileHeaderIcons) => {
      document.querySelector(".phone-header").innerHTML += `
        <i class="far ${mobileHeaderIcons.classHeaderMobile} icon-option" onclick="${mobileHeaderIcons.functionHeaderMobile}()"></i>`;
    });
  }
}

//OBJECT FOR DATAPROVIDER
let dataProvider = new DataProvider();

//OBJECT FOR UI
let ui = new showContentOnPagesWhenLoadedClass();

//SHOW POSTS
dataProvider
   .getData()
   .then((data) => ui.displayPosts(data));

//SHOW STORIES
dataProvider
   .getStories()
   .then((storyData) => ui.displayStories(storyData));

//SHOW HEADER DESKTOP
dataProvider
   .getHeaderIcons()
   .then((data) => ui.displayDesktopHeaderIcons(data));

//SHOW FOOTER
dataProvider
  .getFooterData()
  .then((data) => ui.displayFooterIconsForCellPhone(data));

//SHOW HEADER MOBILE
dataProvider
  .getMobileHeader()
  .then((data) => ui.displayMobileHeaderIcons(data));

//LIKE FUNCTIONS
function showLikeOnPost(heartIcon, heartFont, likedHeartFont) {
  document.getElementById(heartFont).style.display = "none";
  document.getElementById(likedHeartFont).style.display = "flex";
  document.getElementById(likedHeartFont).style.color = "red";
  document.getElementById(heartIcon).style.display = "flex";
  setTimeout(() => {
    document.getElementById(heartIcon).style.display = "none";
  }, 500);
}

//REPORT POST
function reportPost() {
  let reportPopUp = document.getElementById("");
}

//OPEN PROFILE
function profile(id) {
  sessionStorage.setItem("profileID",id);
  window.location.href = "profiles.html"
}


//SET HEADER BORDER 
window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset;
  if(scrollTop >= '60' ){
document.querySelector('.header-index').classList.add('show');
  }else{
    document.querySelector('.header-index').classList.remove('show');
  }

}, false);