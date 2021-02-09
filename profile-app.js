/*-------------------------------------------------------PROFILE -------------------------------------------------------------------*/

//GET DATA FROM SESSION STORAGE
var getProfileId = sessionStorage.getItem("profileID");


//CLASS FOR DATABASE
class DataProvider {

    //GET DATA FOR POSTS
    async getProfile() {
      try {
        let API = "data.json";
        let provideData = await fetch(API);
        let data = await provideData.json();
        let post = data.posts;
        post = post.map((item) => {
          let username = item.username,profileimage = item.profileimage,postcontent = item.postcontent,likes = item.likes,commentContent = item.commentContent,mention = item.mention,mentiontag = item.mentiontag,hashatags = item.hashatags,time = item.time,idp = item.idp,id = item.id,hrt = item.hrt,ikedbySign = item.ikedbySign,and = item.and,incl = item.incl,likescountrt = item.likescountrt,likeTag = item.likeTag,hashatagsurl = item.hashatagsurl, likeinfo = item.likeinfo, followers = item.followers,following = item.following,post = item.post,fullname = item.fullname,biography = item.biography
          return {
              username,profileimage,postcontent,likes,commentContent,mention,mentiontag,hashatags,time,idp,id,hrt,ikedbySign,and,incl,likescountrt,likeTag,hashatagsurl,likeinfo,followers,following,post,biography,fullname
          };
        });
        return post;
      } catch (error) {
        console.log(error);
      } finally {
        //console.log("Connection with database successed");
      }
    }

    //GET DATA FOR HIGHLIGHTS
    async getHighlight(){
      try{
        let API = "data.json";
      let data = await fetch(API);
      let respond = await data.json();
      let result = respond.highlights;
      result = result.map(item => {
        let photo = item.photo,text = item.text;
        let photo1 = item.photo1,text1 = item.text1;
        let photo2 = item.photo2,text2 = item.text2;
        let photo3 = item.photo3,text3 = item.text3;
        let id = item.id;
        let class1 = item.class1,class2 = item.class2,class3 = item.class3,class4 = item.class4,displayclass= item.displayclass;
        return {photo, photo1, photo2, photo3, text, text1, text2, text3, id,class1,class2,class3,class4,displayclass}
      })
      return result;    
    }catch (error){
      console.log(error);
    }
  }

     //GET SELECTED ITEMS FOR POSTS
     async getPosts() {
      try{
        let API = "data.json";
        let fetchData = await fetch(API);
        let data = await fetchData.json();
        let items = data.postsInPorfile;
        items = items.map(item =>{
        let photo11 = item.photo11,photo2 = item.photo2,photo3 = item.photo3,photo4 = item.photo4,photo5 = item.photo5,photo6 = item.photo6,photo7 = item.photo7,photo8 = item.photo8,photo9 = item.photo9,id = item.id;
          return{photo11,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,id};
        });
        return items;
      }catch(error){
         console.log(error);
      }finally{
  
      }
      }
}

//CLASS FOR USER INTERFACE
class profileUserInterface{

   //SHOW PAGE CONTENT
    displayProfile(data) {

      //OBJECTS FOR HTML
      let result = '', content = '', object = '',buttonobject = '';
       data.forEach(item=>{

         //STATEMENT FOR DISPLAYING
           if(item.id == sessionStorage.getItem("profileID")) {
             //SET WEB-PAGE TITLE
              document.title = item.username;

              //SHOW CONTENT IN HEADER
              result = `<div class="profile-notification"><i class="fas fa-arrow-left icon-option" onclick="indexPage()"></i><p class="username profile-username">${item.username}<p></div><div class="profile-notification"><i class="far fa-bell icon-option"></i><i class="fas fa-ellipsis-v  icon-option"></i></div>`;
             
              //SHOW PROFILEIMAGE, FOLLOWERS, FOLLOWING, POST COUNTER ON PAGE
              content = `<div class="profile-frame"><div class="profile-white-frame"><img src="${item.profileimage}.png" alt="" class="profile-image-pg"></div></div><div class="follower-info">
              <div class="follower-block"><p class="follower-number  color-change">${item.post}</p><p class="follower-name  color-change">Posts</p></div>
              <div class="follower-block"><p class="follower-number  color-change">${item.followers}</p><p class="follower-name  color-change">Followers</p></div>
              <div class="follower-block"><p class="follower-number  color-change">${item.following}</p><p class="follower-name color-change">Following</p></div></div>`;
              
              //SHOW FULLNAME, BIOGRAPHY, FOLLOWED BY
              object = `<p class="profile-name  color-change">${item.fullname}</p><p class="personalisation">Personal Profile</p>
              <p class="biography  color-change">${item.biography}</p><p class="followed-by  color-change">Followed by username_1, instagramaccount and 17 others</p>`
                   
              //SHOW FOLLOW, MESSAGE AND DROPDOWN LIST
              buttonobject = `<button class="follow button-width color-change">Following</button><button class="follow button-width color-change">Message</button><button class="follow"><i class="fas fa-sort-down color-change"></i></button>`
            }
            });

        //SHOW CONTENT PROFILE HEADER (PROFILEIMAGE, FOLLOWERS...)
        document.querySelector('.header-content').innerHTML = content;

        //SHOW INCOS IN HEADER
        document.querySelector('.header-profile').innerHTML = result;

        //SHOW FULLNAME, BIOGRAPHY, FOLLOWED BY, 
        document.querySelector('.profile-name-bio-type').innerHTML = object;

        //SHOW FOLLOW, MESSAGE AND DROPDOWN LIST
        document.querySelector('.profile-functions').innerHTML = buttonobject;
    }

    //SHOW HIGHLIGHTS
    showHighlight(data) {
      let result = '';
      data.forEach(item => {
        //STATEMENT FOR DISPLAYING
        if(item.id == sessionStorage.getItem("profileID")) {
          
          document.querySelector('.story-highlights').classList.add(item.displayclass);
        //CONTENT  
        result = `<div class="highlight ${item.class1} first-margin"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text}</p></div>
        <div class="highlight ${item.class2}"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo1}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text1}</p></div>
        <div class="highlight ${item.class3}"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo2}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text2}</p></div>
        <div class="highlight ${item.class4}"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo3}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text3}</p></div>`;
        }
      });

      //SHOW CONTENT HERE
      document.querySelector('.story-highlights').innerHTML = result;   
    }
    
    //SHOW SLECTED BUTTONS
    showSelectedButtons() {
    document.querySelector('.profile-view').innerHTML = `<i class="fas fa-th profile-button block-button first-button" onclick="triggerClick()" id="firstOne"></i>
    <i class="far fa-address-card profile-button block-button" id="tagged"></i>`;
    
    var all = document.getElementById('firstOne');
    var tagged = document.getElementById('tagged');
    
        //ADD CLASS ONLOAD
        window.addEventListener('load',() =>{
               tagged.classList.remove('border-bottom');
               all.classList.add('border-bottom');
         });

        //TAGGED PHOTOS
        tagged.addEventListener('click',() =>{
              tagged.classList.add('border-bottom');
              all.classList.remove('border-bottom');
         });
 
        //ALL PHOTOS
        all.addEventListener('click',() =>{
                tagged.classList.remove('border-bottom');
                all.classList.add('border-bottom');
         });
   }

   //SHOW POSTS ON PAGE IN GRID
   showPostsOnPage(items){
     let result = '';
     items.forEach(item => {
      if(item.id == sessionStorage.getItem("profileID")) {
        result += `
        
        <img src="${item.photo11}.jpg" alt="" class="picture" >
        <img src="${item.photo2}.jpg" alt="" class="picture" >
        <img src="${item.photo3}.jpg" alt="" class="picture" >
        <img src="${item.photo4}.jpg" alt="" class="picture" >
        <img src="${item.photo5}.jpg" alt="" class="picture" >
        <img src="${item.photo6}.jpg" alt="" class="picture" >
        <img src="${item.photo7}.jpg" alt="" class="picture" >
        <img src="${item.photo8}.jpg" alt="" class="picture" >
        <img src="${item.photo9}.jpg" alt="" class="picture" >
        `;
      
      }

     });

     //SHOW POSTS ON PAGE
     document.querySelector('.profile-posts').innerHTML = result;
   }
    
}

//DATAPROVIDER OBJECTS
var dataProvider = new DataProvider();
var userInterface = new profileUserInterface();

//SHOW HEADER ON PAGE
dataProvider.getProfile().then(data => userInterface.displayProfile(data));
//SHOW HIGHLIGHTS 
dataProvider.getHighlight().then(data => userInterface.showHighlight(data));
//SHOW POSTS ON PAGE IN GRID VIEW
dataProvider.getPosts().then(data => userInterface.showPostsOnPage(data));

//CALL FUNCTION FOR SELECT BUTTONS
userInterface.showSelectedButtons();

//GO TO INDEX PAGE
function indexPage(){
    window.location.href = "index.html";
}