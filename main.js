name_of_the_student_array = [];

function submit() {

    var name1 = document.getElementById("student_1").value;
    var name2 = document.getElementById("student_2").value;
    var name3 = document.getElementById("student_3").value;
    var name4 = document.getElementById("student_4").value;
    var name5 = document.getElementById("student_5").value;

    name_of_the_student_array.push(name1, name2, name3, name4, name5);

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting() {
    
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;

}

