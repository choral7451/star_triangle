import { Exercise } from "../main/exercise";

describe("별 출력", () => {
  let exercise = new Exercise

  describe("가로로 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getStar(4)).toEqual("****")
    })
  
    it("예시 2", () => {
      expect(exercise.getStar(10)).toEqual("**********")
    })
  })

  describe("삼각형 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getTriangle(3)).toEqual("*\n**\n***")
    })
  
    it("예시 2", () => {
      expect(exercise.getTriangle(5)).toEqual("*\n**\n***\n****\n*****")
    })
  })

  describe("역삼각형 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getInvertedTriangle(3)).toEqual("***\n**\n*")
    })
  
    it("예시 2", () => {
      expect(exercise.getInvertedTriangle(5)).toEqual("*****\n****\n***\n**\n*")
    })
  })

  describe("이등변삼각형 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getIsoscelesTriangle(3)).toEqual("  *  \n *** \n*****")
    })
  
    it("예시 2", () => {
      expect(exercise.getIsoscelesTriangle(5)).toEqual("    *    \n   ***   \n  *****  \n ******* \n*********")
    })
  })

  describe("다이아몬드 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getDiamoind(3)).toEqual(" * \n***\n * ")
    })
  
    it("예시 2", () => {
      expect(exercise.getDiamoind(5)).toEqual("  *  \n *** \n*****\n *** \n  *  ")
    })
  })

  describe("Hexagram 별 출력", () => {
    it("예시 1", () => {
    
      expect(exercise.getHexagram(7)).toEqual("   *   \n  ***  \n*******\n ***** \n*******\n  ***  \n   *   ")
    })
  
    it("예시 2", () => {
      expect(exercise.getHexagram(11)).toEqual("     *     \n    ***    \n   *****   \n***********\n ********* \n  *******  \n ********* \n***********\n   *****   \n    ***    \n     *     ")
    })
  })
})


