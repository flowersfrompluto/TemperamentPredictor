
let fName = document.getElementById("fName")
let midName = document.getElementById("midName")
let lName = document.getElementById("lName")
let dob = document.getElementById("dob")
let gender = document.getElementById("gender")
let compulsory = document.getElementById("compulsory")
let hobbies = document.getElementById("hobbies")
let likes = document.getElementById("likes")
let dislikes = document.getElementById("dislikes")
let colour = document.getElementById("colour")
let btn = document.getElementById("btn")
let fnameError = document.getElementById("fnameError")
let lnameError = document.getElementById("lNameError")
let dobError = document.getElementById("dobError")
let genderError = document.getElementById("genderError")
let colourError = document.getElementById("colourError")
let hobbiesError = document.getElementById("hobbiesError")
let likesError = document.getElementById("likesError")
let dislikesError = document.getElementById("dislikesError")
let friends = document.getElementById("friends")
let friendsError = document.getElementById("friendsError")
let people = document.getElementById("people")
let peopleError = document.getElementById("peopleError")
let termsError = document.getElementById("termsError")
let messageTxt = document.getElementById("messageTxt")

let colourPoint = 0
let hobbiesPoint = 0
let likesPoint = 0
let dislikesPoint = 0
let friendsPoint = 0
let peoplePoint = 0

let personality

// btn.addEventListener("click", function (e) {
//     e.preventDefault()
//     validateData()
// })

btn.addEventListener("click", function () {
    validateData()
})

function validateData() {

    if (fName.value == "") {
        fnameError.innerHTML = "*Required"
    }
    else {
        fnameError.innerHTML = ""
    }

    if (lName.value == "") {
        lnameError.innerHTML = "*Required"
    }
    else {
        lnameError.innerHTML = ""
    }

    if (dob.value == "") {
        dobError.innerHTML = "*Required"
    }
    else {
        dobError.innerHTML = ""
    }

    if (gender.value == "") {
        genderError.innerHTML = "*Required"
    }
    else {
        genderError.innerHTML = ""
    }

    if (hobbies.value == "") {
        hobbiesError.innerHTML = "*Required"
    }
    else {
        hobbiesError.innerHTML = ""
    }

    if (likes.value == "") {
        likesError.innerHTML = "*Required"
    }
    else {
        likesError.innerHTML = ""
    }

    if (dislikes.value == "") {
        dislikesError.innerHTML = "*Required"
    }
    else {
        dislikesError.innerHTML = ""
    }

    if (colour.value == "") {
        colourError.innerHTML = "*Required"
    }
    else {
        colourError.innerHTML = ""
    }

    if (friends.value == "") {
        friendsError.innerHTML = "*Required"
    }
    else {
        friendsError.innerHTML = ""
    }

    if (people.value == "") {
        peopleError.innerHTML = "*Required"
    }
    else {
        peopleError.innerHTML = ""
    }
    if (termsConditions.checked == "") {
        termsError.innerHTML = "* Kindly Check the box"
    } else {
        termsError.innerHTML = ""
    }

    if (fName.value != "" && lName.value != "" && dob.value != "" && gender.value != "" && hobbies.value != "" && likes.value != "" && dislikes.value != "" && colour.value != "" && friends.value != "" && people.value != "" && termsConditions.checked != "") {

        proceed()
    }

    function proceed() {

        if (colour.value == "1") {
            colourPoint += 50
        } else if (colour.value == "2") {
            colourPoint += 40
        } else if (colour.value == "3") {
            colourPoint += 30
        } else if (colour.value == "4") {
            colourPoint += 20
        } else {
            colourPoint += 10
        }

        if (hobbies.value == "1") {
            hobbiesPoint += 50
        } else if (hobbies.value == "2") {
            hobbiesPoint += 40
        } else if (hobbies.value == "3") {
            hobbiesPoint += 30
        } else if (hobbies.value == "4") {
            hobbiesPoint += 20
        } else {
            hobbiesPoint += 10
        }

        if (likes.value == "1") {
            likesPoint += 50
        } else if (likes.value == "2") {
            likesPoint += 40
        } else if (likes.value == "3") {
            likesPoint += 30
        } else if (likes.value == "4") {
            likesPoint += 20
        } else {
            likesPoint += 10
        }

        if (dislikes.value == "1") {
            dislikesPoint += 50
        } else if (dislikes.value == "2") {
            dislikesPoint += 40
        } else if (dislikes.value == "3") {
            dislikesPoint += 30
        } else if (dislikes.value == "4") {
            dislikesPoint += 20
        } else {
            dislikesPoint += 10
        }

        if (friends.value == "1") {
            friendsPoint += 50
        } else if (friends.value == "2") {
            friendsPoint += 40
        } else if (friends.value == "3") {
            friendsPoint += 30
        } else if (friends.value == "4") {
            friendsPoint += 20
        } else {
            friendsPoint += 10
        }

        if (people.value == "1") {
            peoplePoint += 50
        } else if (people.value == "2") {
            peoplePoint += 40
        } else if (people.value == "3") {
            peoplePoint += 30
        } else if (people.value == "4") {
            peoplePoint += 20
        } else {
            peoplePoint += 10
        }

        process()
    }

    function process() {

        personality = colourPoint + hobbiesPoint + likesPoint + dislikesPoint + friendsPoint + peoplePoint

        if (personality >= 166 && personality <= 200) {
            alert("Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an AMBIVERT")
            // messageTxt.innerHTML = "Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an AMBIVERT"
            // messageTxt.style.color = "green"
        } else if (personality >= 131 && personality >= 165) {
            alert("Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an EXTROVERT")
            // messageTxt.innerHTML = "Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an EXTROVERT"
            // messageTxt.style.color = "blue"
        } else if (personality >= 96 && personality <= 130) {
            alert("Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an INTROVERT")
            // messageTxt.innerHTML = "Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an INTROVERT"
            // messageTxt.style.color = "grey"
        } else {
            alert("Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + "from your submission you are an OMNIVERT")
            // messageTxt.innerHTML = "Dear, " + fName.value + " " + midName.value + " " + lName.value  + " " + " from your submission you are an OMNIVERT"
            // messageTxt.style.color = "black"
        }
    }

    endPrediction()
}

function endPrediction() {

    fName.value = ""
    lName.value = ""
    dob.value = ""
    gender.value = ""
    hobbies.value = ""
    likes.value = ""
    dislikes.value = ""
    colour.value = ""
    friends.value = ""
    people.value = ""
    termsConditions.checked = ""
    
}
