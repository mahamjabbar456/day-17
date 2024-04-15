// Question 49
function hobbyfunction(...hobbies) {
    for (let i = 0; i < hobbies.length; i++) {
        console.log(`You ${hobbies[i]} enjoy that hobby`);
    }
}
let hobby = ["Walking", "Reading", "Talking", "Running"];
hobbyfunction(...hobby);
// Question 50
let poem = `Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.`;
console.log(poem);
// Question 51
let AreaofRectangle = (length, width) => {
    return length * width;
};
console.log(AreaofRectangle(4, 5));
export {};
