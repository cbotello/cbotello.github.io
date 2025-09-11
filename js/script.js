const clcSchool = document.getElementById("school");
const divSchool = document.getElementById("schoolInfo");

const clcJob = document.getElementById("job");
const divJob = document.getElementById("jobInfo");

const clcInts = document.getElementById("ints");
const divInts = document.getElementById("intsInfo");

clcSchool.addEventListener("click", () => {

    if(divJob.classList.contains("show") || divInts.classList.contains("show")){
        divJob.classList.remove("show");
        divInts.classList.remove("show");
    }
    /*
        divSchool.scrollIntoView({
        behavior: "smooth", 
        block: "center"     
        });
    */
    divSchool.classList.toggle("show");
});

clcJob.addEventListener("click", () => {
    if(divSchool.classList.contains("show") || divInts.classList.contains("show")){
        divSchool.classList.remove("show");
        divInts.classList.remove("show");
    }
    /*
        divJob.scrollIntoView({
        behavior: "smooth", 
        block: "center"     
        });
    */
    divJob.classList.toggle("show");
});

clcInts.addEventListener("click", () => {
    if(divSchool.classList.contains("show") || divJob.classList.contains("show")){
        divJob.classList.remove("show");
        divSchool.classList.remove("show");
    }
    /*
        divInts.scrollIntoView({
        behavior: "smooth", 
        block: "center"     
        });
    */
    divInts.classList.toggle("show");
});