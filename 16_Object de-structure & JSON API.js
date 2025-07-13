//object de-structuring ist Schnell und einfach of extracting props of ein objekt into ein variable

const course = {
    courseName: 'js in made easy',
    price: 'free',
    courseInstructorName: 'zaid'
}
const Ein = course.courseInstructorName
console.log(Ein)
//instead of this groB shit sheiBe use this de-structuring of objekt

const{courseInstructorName: Instructor, price} = course
console.log(price)
console.log(Instructor)

//say for future proof example
const navbar = ({companyName: Name}) => {

}

navbar(Name = 'Yakult')


//like Objekt array de-structuring  is also done-- study later

// look at this: https://api.github.com/users/hiteshchoudhary

//so nur nummer,boolean comes as themselves everything else comes as string form like schlussel and wert 

//if you copy paste API directly here u won't understand shit cuz it's too big and need focus and patience so we use:
//random user api-> website for practice api and JSON FORMATTER to ease out the process to analyse it

//JSON ain't just committed to js it's for the streets