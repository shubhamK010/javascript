 //datatype

 let fullName="chinmay"


 // 0 1 2 3 4 5 6
 // c h i n m a y 

 console.log(fullName[0])
 console.log(fullName[1])
 console.log(fullName[2])
 console.log(fullName[5])


 // javascript---object
 //object--property and methods 


 // human-- object

 // property- height,weight,age
 // methds- sleeping,running,walking

 // string--- object

 // property

 // methods 
  let  ha = "amol"

  // 0 1 2 3
  // a m o l 



 let aa = ha.length
 console.log(aa)
 console.log(ha[ha.length-1])
 console.log(ha[3])
 
 // if we do (length - 1) then we get the last number in letter


  // 0 1 2 3 4
  // A p p l e 
 let fruit = "Apple"

 let bb = fruit.toUpperCase()
 console.log(bb)

 let cc = fruit.toLowerCase() 
 console.log(cc)

 let dd = fruit.indexOf('p')
 console.log(dd)

 let ee = fruit.includes("A")
 console.log(ee)


 //-----------------------------------

  let vegetable = " apple"
  let ghgh = vegetable.length
  console.log(ghgh)
  let rrr = vegetable.trimStart()
  console.log(rrr)
  console.log(rrr.length)
 
 vegetable = " apple "
 console.log(vegetable.length)
 let kkka = vegetable.trim()
 console.log(kkka.length)


 // trimEnd()--- removes only last space
 let arr = 'Pune '

 let r =arr.trimEnd()
console.log(r)
 //---------------------------

 // startsWith()
 // endswith()

  let city6 = 'Pune'

  console.log(city6.length)

  let ggg = city6.startsWith('ne')//boolean return//true and false
  console.log(ggg)

  let hhh = city6.endsWith('ne')//boolean return //true and false
  console.log(hhh)

  let bn = "chinmay"
  // 0    1 2 3 4 5 6
  // c   h  i n m a y
  // -7 -6 -5-4-3-2-1
  
  let jjj = bn.slice(3,6) //(end position not inclusive)
  console.log(jjj)
  console.log(bn.slice(3))
  console.log(bn.slice(-5))
  console.log(bn.slice(-5,-1))
  console.log(bn.slice(-5,1))//
  console.log(bn.slice(-1,-5))

  //["I", "am", "learning","javascript"]

  let subject = "I am learning javascript"
  let uuu = subject.split("")
  console.log(uuu)

  let namess="i am ankita dhavan"
 let www= namess.split(" ")
 console.log(www)
  // array----> object





 