const deal = (arg)=>{
  const cardList = []
  for(let j=0;j<4;j++){
    for(let i=1;i<14;i++){
      cardList.push({
        symbol:["spade","club","dia","heart"][j],
        number:i,
        label :`${["♠","♣","♦","♥"][j]}${(n=>{
          switch(n){
            case "1":
              return "A"
              break
            case "11":
              return "J"
              break
            case "12":
              return "Q"
              break
            case "13":
              return "K"
              break
            default:
              return n
          }
        })(i.toString())}`
      })
    }
  }
  cardList.push({"symbol":"joker",number:null,label:"Joker"})
  cardList.push({"symbol":"joker",number:null,label:"Joker"})

  let ans = {hand:[]}
  for(let i=0;i<arg.number||arg.number===undefined;i++){
    if(cardList.length===0)break
    for(let j=0;j<arg.people;j++){
      if(cardList.length===0)break
      if(!ans.hand[j])ans.hand.push([])
      let r = Math.floor(Math.random()*cardList.length)
      ans.hand[j].push(cardList[r])
      cardList.splice(r,1)
    }
  }
  for(let i=0;i<ans.hand.length;i++){
    ans.hand[i].sort(function(a,b){
      if( a.label < b.label ) return -1
      if( a.label > b.label ) return 1
      return 0
    })
  }
  ans.deck = cardList
  return ans 
}

deal({number:undefined,people:4})
//{number:一人当たりの枚数,peoplr:人数}
//numberをundefinedにして呼ぶと山札全部配るよ