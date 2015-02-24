angular.module('nejs')
.service('Presenters', function() {
  var users = ["jdsharp", "awirick", "alassek", "eliperelman", "zachleat", "nicknisi", "cfaddict", "collinforrester", "jgchristopher", "alexpgates", "jmhobbs", "nicholaspetersen", "jerodsanto", "codyjames", "mattdsteele", "robhruska", "loktar00", "alecbeta", "paulgraff", "BRock97", "BruceCoddington", "hoodja", "serafino", "jhannah", "CaraHeacock", "javazquez", "mmacaula", "shellylynnxiong", "bill-riley", "TJacobDesign", "dhoman", "CalebCassel", "mattfenwick", "jprichardson", "kevinbeaty", "blainekasten", "snekse", "nwertzberger"];

  this.listPresenters = function() {
    return users;
  };

  this.imageFor = function(presenter) {
    //We cache these because of GitHub's API Limit
    var images = {
      "jdsharp": "https://avatars.githubusercontent.com/u/141104?v=3" ,
      "alassek": "https://avatars.githubusercontent.com/u/57652?v=3" ,
      "awirick": "https://avatars.githubusercontent.com/u/219911?v=3" ,
      "eliperelman": "https://avatars.githubusercontent.com/u/285899?v=3" ,
      "zachleat": "https://avatars.githubusercontent.com/u/39355?v=3" ,
      "nicknisi": "https://avatars.githubusercontent.com/u/293805?v=3" ,
      "cfaddict": "https://avatars.githubusercontent.com/u/349507?v=3" ,
      "collinforrester": "https://avatars.githubusercontent.com/u/1233914?v=3" ,
      "jgchristopher": "https://avatars.githubusercontent.com/u/35281?v=3" ,
      "alexpgates": "https://avatars.githubusercontent.com/u/242736?v=3" ,
      "jerodsanto": "https://avatars.githubusercontent.com/u/8212?v=3" ,
      "jmhobbs": "https://avatars.githubusercontent.com/u/115059?v=3" ,
      "nicholaspetersen": "https://avatars.githubusercontent.com/u/1709172?v=3" ,
      "codyjames": "https://avatars.githubusercontent.com/u/378665?v=3" ,
      "mattdsteele": "https://avatars.githubusercontent.com/u/389077?v=3" ,
      "robhruska": "https://avatars.githubusercontent.com/u/1224017?v=3" ,
      "alecbeta": "https://avatars.githubusercontent.com/u/314034?v=3" ,
      "loktar00": "https://avatars.githubusercontent.com/u/174857?v=3" ,
      "paulgraff": "https://avatars.githubusercontent.com/u/1301199?v=3" ,
      "CaraHeacock": "https://avatars.githubusercontent.com/u/6446911?v=3" ,
      "jhannah": "https://avatars.githubusercontent.com/u/62206?v=3" ,
      "BRock97": "https://avatars.githubusercontent.com/u/1372038?v=3" ,
      "BruceCoddington": "https://avatars.githubusercontent.com/u/1820225?v=3" ,
      "hoodja": "https://avatars.githubusercontent.com/u/348398?v=3" ,
      "serafino": "https://avatars.githubusercontent.com/u/5920799?v=3" ,
      "dhoman": "https://avatars.githubusercontent.com/u/205598?v=3" ,
      "mattfenwick": "https://avatars.githubusercontent.com/u/952655?v=3" ,
      "CalebCassel": "https://avatars.githubusercontent.com/u/4381058?v=3" ,
      "jprichardson": "https://avatars.githubusercontent.com/u/150063?v=3" ,
      "shellylynnxiong": "https://avatars.githubusercontent.com/u/7191215?v=3" ,
      "mmacaula": "https://avatars.githubusercontent.com/u/3186250?v=3" ,
      "TJacobDesign": "https://avatars.githubusercontent.com/u/963985?v=3" ,
      "bill-riley": "https://avatars.githubusercontent.com/u/1245238?v=3" ,
      "javazquez": "https://avatars.githubusercontent.com/u/141025?v=3" ,
      "nwertzberger": "https://avatars.githubusercontent.com/u/360347?v=3" ,
      "snekse": "https://avatars.githubusercontent.com/u/1981071?v=3" ,
      "kevinbeaty": "https://avatars.githubusercontent.com/u/522231?v=3" ,
      "blainekasten": "https://avatars.githubusercontent.com/u/2916023?v=3" 
    };
    return images[presenter];
  };
});
