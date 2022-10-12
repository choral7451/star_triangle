interface IMakeTriangle {
  readonly starNum: number
  readonly step?: number
  readonly height?: number
  readonly width?: number
}

export class Util {
  makeTriangle = ( data : IMakeTriangle ): string[] => {
    const { starNum, step, height, width } = data

    const result = []
    let star = starNum  
    let space = (width-star)/2
    if(space <= 0) space = 0 

    if(height) {
      for(let i = 0 ; i < height ; i++ ) {
        result.push((" ".repeat(space) + "*".repeat(star) + " ".repeat(space)))
        space -= step/2
        star += step
      }
      return result
    } 
    
    return ["*".repeat(starNum)]
  }    
}

