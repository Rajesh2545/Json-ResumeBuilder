(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON ("resources/data.json", function (text) {
    let data = JSON.parse(text);
    console.log(data);
    Phone(data.basics.phone);
    name(data.basics.name);
    des(data.basics.des);
    fname(data.basics.fname);
    email(data.basics.email);
    address(data.basics.location.address);
    career(data.basics.co);
    experience(data.basics.exp);
    projectExp(data.basics.projectexp.dlp);
    projectExp1(data.basics.projectexp.flp);
    graduation(data.basics.graduation);
    inter(data.basics.intermediate);
    ssc(data.basics.ssc);
    os(data.basics.technicalSkils.os);
    lang(data.basics.technicalSkils.lang);
    tools(data.basics.technicalSkils.tools);
    wt(data.basics.technicalSkils.wt);
    awards(data.basics.awards.awrds);
    publication(data.basics.publications.pub);
    av1(data.basics.acheive.av1);
    av2(data.basics.acheive.av2);
    av3(data.basics.acheive.av3);

  });

  // function creatingSummary(summary){
  //   // var section = document.createElement("section");
  //   // section.classList.add("section", "main-summary");
  //   // var summary_section = document.createElement("section")
  //   var div = document.getElementById("f2");
  //   div.innerHTML = summary;
  //   // summary_section.appendChild(div);
  //   // section.appendChild(summary_section);
  //   // resumeDiv.appendChild(section);
  // }
  function Phone(phone) {
    console.log(phone);
    var htmlId=document.getElementById("phone");
    htmlId.innerHTML=phone;
  }
  function name(name){
    var Name=document.getElementById("name");
    Name.innerHTML=name;

  }
  function des(des) {
    var desig=document.getElementById("des");
    desig.innerHTML=des;

  }
  function fname(fname){
    var Father=document.getElementById("fname");
    Father.innerHTML=fname;
  }
  function email(email){
    var Email=document.getElementById("email");
    Email.innerHTML=email;
  }
  function address(address){
    var Address=document.getElementById("address");
    Address.innerHTML=address;
  }
  function career(co){
    var Careerobj=document.getElementById("co");
    Careerobj.innerHTML=co;
  }
  function experience(exp){
    var Exp=document.getElementById("exp");
    Exp.innerHTML=exp;
  }
  function projectExp(dlp){
    var pexp=document.getElementById("dlp");
    pexp.innerHTML=dlp;
  }
  function projectExp1(flp){
    var pexp1=document.getElementById("flp");
    pexp1.innerHTML=flp;
  }
  function graduation(graduation){
    var Graduation=document.getElementById("Graduation");
    Graduation.innerHTML=graduation;
  }
  function inter(intermediate){
    document.getElementById("inter").innerHTML=intermediate;
  }
  function ssc(ssc){
    document.getElementById("ssc").innerHTML=ssc;
  }
  function os(os){
    document.getElementById("os").innerHTML=os;
  }
  function lang(lang){
    document.getElementById("lang").innerHTML=lang;
  }
  function tools(tools){
    document.getElementById("tools").innerHTML=tools;
  }
  function wt(wt){
    document.getElementById("wt").innerHTML=wt;
  }
function awards(awrds) {
  document.getElementById("Awards").innerHTML=awrds;
}
function publication(pub){
  document.getElementById("pub").innerHTML=pub;
}
})();
