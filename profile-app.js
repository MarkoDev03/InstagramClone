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
          let username = item.username,profileimage = item.profileimage,postcontent = item.postcontent,likes = item.likes,commentContent = item.commentContent,mention = item.mention,mentiontag = item.mentiontag,hashatags = item.hashatags,time = item.time,idp = item.idp,id = item.id,hrt = item.hrt,ikedbySign = item.ikedbySign,and = item.and,incl = item.incl,likescountrt = item.likescountrt,likeTag = item.likeTag,hashatagsurl = item.hashatagsurl, likeinfo = item.likeinfo, followers = item.followers,following = item.following,post = item.post,fullname = item.fullname,biography = item.biography;
          return {
              username,profileimage,postcontent,likes,commentContent,mention,mentiontag,hashatags,time,idp,id,hrt,ikedbySign,and,incl,likescountrt,likeTag,hashatagsurl,likeinfo,followers,following,post,biography,fullname,
          };
        });
        return post;
      } catch (error) {
        console.log(error);
      } finally {
        //console.log("Connection with database successed");
      }
    }
}

//CLASS FOR USER INTERFACE
class profileUserInterface{

   //SHOW PAGE CONTENT
    displayProfile(data) {

      //OBJECTS FOR HTML
      let result = '', content = '', object = '';
       data.forEach(item=>{

         //STATEMENT FOR DISPLAYING
           if(item.id == sessionStorage.getItem("profileID")) {
             //SET WEB-PAGE TITLE
              document.title = item.username;

              //SHOW CONTENT IN HEADER
              result = `<div class="profile-notification"><i class="fas fa-arrow-left icon-option" onclick="indexPage()"></i><p class="username profile-username">${item.username}<p></div><div class="profile-notification"><i class="far fa-bell icon-option"></i><i class="fas fa-ellipsis-v  icon-option"></i></div>`;
             
              //SHOW PROFILEIMAGE, FOLLOWERS, FOLLOWING, POST COUNTER ON PAGE
              content = `<div class="profile-frame"><div class="profile-white-frame"><img src="${item.profileimage}.png" alt="" class="profile-image-pg"></div></div><div class="follower-info">
              <div class="follower-block"><p class="follower-number">${item.post}</p><p class="follower-name">Posts</p></div>
              <div class="follower-block"><p class="follower-number">${item.followers}</p><p class="follower-name">Followers</p></div>
              <div class="follower-block"><p class="follower-number">${item.following}</p><p class="follower-name">Following</p></div></div>`;
              
              //SHOW FULLNAME, BIOGRAPHY, FOLLOWED BY, AND FOLLOW, MESSAGE, DROPDOWN BUTTON
              object = `<p class="profile-name">${item.fullname}</p><p class="personalisation">Personal Profile</p>
              <p class="biography">${item.biography}</p><p class="followed-by">Followed by username_1, instagramaccount and 17 others</p>`
                  }
            })

        //SHOW CONTENT PROFILE HEADER (PROFILEIMAGE, FOLLOWERS...)
        document.querySelector('.header-content').innerHTML = content;
        //SHOW INCOS IN HEADER
        document.querySelector('.header-profile').innerHTML = result;
        //SHOW FULLNAME, BIOGRAPHY, FOLLOWED BY, AND FOLLOW, MESSAGE, DROPDOWN BUTTON
        document.querySelector('.profile-name-bio-type').innerHTML = object;
    }
}

//DATAPROVIDER OBJECTS
var dataProvider = new DataProvider();
var userInterface = new profileUserInterface();

//SHOW HEADER ON PAGE
dataProvider.getProfile().then(data => userInterface.displayProfile(data));

//GO TO INDEX PAGE
function indexPage(){
    window.location.href = "index.html";
}