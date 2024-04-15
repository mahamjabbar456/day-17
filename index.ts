// Question 49
function hobbyfunction(...hobbies:string[]){
    for(let i = 0;i<hobbies.length;i++){
        console.log(`You ${hobbies[i]} enjoy that hobby`);
    }
}

let hobby:string[] = ["Walking","Reading","Talking","Running"];
hobbyfunction(...hobby);

// Question 50
let poem:string = `Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.`;
console.log(poem);

// Question 51
let AreaofRectangle = (length:number,width:number):number =>{
    return length *width;
}
console.log(AreaofRectangle(4,5));