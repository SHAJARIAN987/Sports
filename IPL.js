const firebaseConfig = {
    apiKey: "AIzaSyD7X45je84JnXy3-P-dXTB9OrSBFtRHqN0",
    authDomain: "ronaldo-ssportswebsite.firebaseapp.com",
    projectId: "ronaldo-ssportswebsite",
    storageBucket: "ronaldo-ssportswebsite.appspot.com",
    messagingSenderId: "226122225112",
    appId: "1:226122225112:web:b362cfb8d52bbeb5014ead",
    measurementId: "G-KT809PRJKD"
};
firebase.initializeApp(firebaseConfig)
document.getElementById("form").addEventListener("submit", submitForm());
function submitForm(e){
e.preventDefault();
var year=getInputVal("year").value;
year=year.toLowerCase();
readYear(year);
}
function readYear(year){
    var result;
    var ref=firebase.database().ref(year);
    ref.on("value", (data) => {
        result=data.val();
        document.getElementById("answer").innerText=result.toUpperCase();
    })
}
function getInputVal(id){
    return document.getElementById(id).value;
}