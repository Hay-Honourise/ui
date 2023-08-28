
window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.querySelector(".filewrapper");
  
    input.addEventListener("change", (e) => {
      let fileName = e.target.files[0].name;
      let filetype = e.target.value.split(".").pop();
      fileshow(fileName, filetype);
    });
  
    const fileshow = (fileName, filetype) => {
      const showfileboxElem = document.createElement("div");
      showfileboxElem.classList.add("showfilebox");
      filewrapper.append(showfileboxElem);
  
      const leftElem = document.createElement("div");
      leftElem.classList.add("left");
      showfileboxElem.append(leftElem);
  
      const fileTypeElem = document.createElement("span");
      fileTypeElem.classList.add("filetype");
      fileTypeElem.innerHTML = filetype;
      leftElem.append(fileTypeElem);
  
      const fileNameElem = document.getElementById("uploads");
      fileNameElem.innerHTML = fileName;
      leftElem.append(fileNameElem);
  
      const rightElem = document.createElement("div");
      rightElem.classList.add("right");
      showfileboxElem.append(rightElem);
  
      const deleteIcon = document.createElement("span");
      deleteIcon.innerHTML = "&#215;";
      rightElem.append(deleteIcon);
    };
  });
  