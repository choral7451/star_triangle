import { Exercise } from "./main/exercise"

const exercise = new Exercise

console.log("가로로로 정렬")
console.log(exercise.getStar(5))
console.log()
console.log("삼각형")
console.log(exercise.getTriangle(5))
console.log()
console.log("역삼각형")
console.log(exercise.getInvertedTriangle(5))
console.log()
console.log("이등변삼각형")
console.log(exercise.getIsoscelesTriangle(5))
console.log()
console.log("다이아몬드")
console.log(exercise.getDiamoind(9))
console.log()
console.log("Hexagram")
console.log(exercise.getHexagram(11, 5, 5))
