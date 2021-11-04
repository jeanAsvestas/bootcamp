var tree = [];

//making changes here
function topOfTree(lines) {
    for (var i = 0; i < lines; i++) {
        tree[i] = printXStars(i,lines);
    }
}

function bodyOfTree(lines) {
    for (var i = 2; i < 4; i++) {
        tree[i] = printXStars(i);
    }
}

function bottomOfTree(lines) {
    for (var i = 4; i < lines; i++) {
        tree[i] = printBottomStars(i,lines);
    }
}



function printXStars(noOfStars, lines1) {
    var star = "";
    for(var i = 0; i < lines1; i++) {
        if(noOfStars < 1){
            if(i == (lines1- 1)/2) {
                star += "*";
            } else {
                star += " ";
            }
        } else if(noOfStars < 2) {
            if(i == (lines1- 3)/2 || i == (lines1 + 1)/2 ) {
                star += "*";
            } else {
                star += " ";
            }
        } else if( noOfStars < 3) {
            if(i % 2 == 1) {
                star += "*";
            } else {
                star += " ";
            }
        } else if( noOfStars < 4) {
            if(i % 2 == 0) {
                star += "*";
            } else {
                star += " ";
            }
        } 
    }
    return(star);
}


function printBottomStars(noOfStars,lines1) {
    var star = "";
    for(var i = 0 ; i < lines1; i++) {
        if(noOfStars > 4) {
            if(i == 2 || i == 4 ) {
                star += "*";
            } else {
                star += " ";
            } 
        } else {
            if(i % 2 == 1) {
                star += "*";
            } else {
                star += " ";
            } 
        }
    }
    return(star);
}

topOfTree(7);
//bodyOfTree(7);
bottomOfTree(7);

console.log(tree);
for(i of tree){
    console.log(i);

}
