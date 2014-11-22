function toggle (obj) {
  var answerDiv = findChildrenByClassName(obj.parentElement,"answer");
  if (answerDiv){
    if(answerDiv.classList.contains("displayNone")){
       answerDiv.className = "answer"
    }
    else {
      answerDiv.className = "answer displayNone";
    }
  }
}

var findChildrenByClassName = function(parentElement,classname){
  var eChildren = parentElement.children;
  for (var e = 0; e < eChildren.length; e++){
    if (eChildren[e].classList.contains(classname)){
      return eChildren[e];
    }
  }
};
