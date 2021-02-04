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
        return {photo, photo1, photo2, photo3, text, text1, text2, text3, id}
      })
      return result;    
    }catch (error){
      console.log(error);
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
        if(item.id == sessionStorage.getItem("profileID")) {
        result = `<div class="highlight"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text}</p></div><div class="highlight"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo1}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text1}</p></div><div class="highlight"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo2}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text2}</p></div><div class="highlight"><div class="highlights-frame"><div class="white-highlights"><img src="${item.photo3}.png" alt="" class="highlights-image"></div></div><p class="highlight-name">${item.text3}</p></div>`;
        }
      });
      document.querySelector('.story-highlights').innerHTML = result;   
    }

}

//DATAPROVIDER OBJECTS
var dataProvider = new DataProvider();
var userInterface = new profileUserInterface();

//SHOW HEADER ON PAGE
dataProvider.getProfile().then(data => userInterface.displayProfile(data));
//SHOW HIGHLIGHTS 
dataProvider.getHighlight().then(data => userInterface.showHighlight(data));

//GO TO INDEX PAGE
function indexPage(){
    window.location.href = "index.html";
}