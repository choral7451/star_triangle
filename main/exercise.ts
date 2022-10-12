import { Util } from "../common/util";

export class Exercise {
  util = new Util;

  getStar(num:number) {
    return this.util.makeTriangle({ starNum: num })[0]
  }
  
  getTriangle(num:number) {
    return this.util.makeTriangle({starNum:1, step:1, height:num}).join("\n")
  }

  getInvertedTriangle(num:number) {
    return this.util.makeTriangle({starNum:num, step:-1, height:num}).join("\n")
  }

  getIsoscelesTriangle(num:number) {
    return this.util.makeTriangle({starNum:1, step:2, height:num, width: num*2-1}).join("\n")
  }

  getDiamoind(num:number) {
    const topCount = Math.ceil(num/2)
    const bottomCount = Math.floor(num/2)

    const top = this.util.makeTriangle({starNum:1, step:2, height:topCount, width: num})
    const bottom = this.util.makeTriangle({starNum:num-2, step:-2, height:bottomCount, width: num})
    return [ ...top, ...bottom ].join('\n')
  }

  getHexagram(num:number, n:number = 1, m?:number) {
    const topAndBottomCount = Math.floor(num/3)
    const bodyTopCount = Math.ceil((Math.floor(num/3) + num%3)/2)
    const bodyBottomCount = Math.floor((Math.floor(num/3) + num%3)/2)

    const top = this.util.makeTriangle({starNum:1, step:2, height:topAndBottomCount, width: num })
    const bodyTop = this.util.makeTriangle({starNum:num, step:-2, height:bodyTopCount, width: num })
    const bodyBottom = this.util.makeTriangle({starNum:num-2*(bodyBottomCount-1), step:2, height:bodyBottomCount, width: num })
    const bottom = this.util.makeTriangle({starNum:topAndBottomCount*2-1, step:-2, height:topAndBottomCount, width: num })

    let result: string[] = [...top, ...bodyTop, ...bodyBottom, ...bottom]
    
    if(n){
       result = result.map(el => el.repeat(n))
    }

    if(m) {
      const resultM = []
      for(let i = 0 ; i < m ; i++) {
        resultM.push(result.join("\n"))
      }
      return resultM.join("\n")
    }

    return result.join("\n")
  }
}
