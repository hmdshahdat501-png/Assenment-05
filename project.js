
const modele = document.getElementById('my_modal')
const higbnt = document.getElementById('hibtn')
 const allissuSection = document.getElementById('allDataSection')
fetch('')
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
.then((res) => res.json())
.then((data)=> displydata(data.data))

const displydata = (indata)=>{
    const allissuSection = document.getElementById('allDataSection')
    const openbtnSection = document.getElementById('openContiner')
    const closebtnSection = document.getElementById('closeContiner')
    
    for(let ddata of indata){
       const div = document.createElement('div')
       div.innerHTML = `<div onclick="mrderl('${ddata.id}')" class="macrad bg-white shadow-lg p-4 rounded-lg h-ful border-">
                <div class="flex justify-between">
                    <button id = 'hibtn' class=" priorityBtn px-5 py-1 font-bold rounded-4xl uppercase">${ddata.priority}</button>
                    
                    <div class = "btnimge"> </div>
                </div>
                <h2 class="text-xl font-bold ">${ddata.title}</h2>
                 <p class="text-gray-400 my-2 line-clamp-2">${ddata.description}</p>
                <div class="flex gap-2">
                    <button class=" bg-red-200 px-2  text-red-600 rounded-sm uppercase">${ddata.labels[0]}</button>
                    <button class=" tlabesbtn bg-yellow-200 px-2  text-yellow-600 rounded-sm uppercase">${ddata.labels[1] ? ddata.labels[1]: "No Need Data"}</button>
                </div>
                <hr class="mt-4 mb-5">
                <p>${ddata.assignee}</p>
                <p>${ddata.createdAt}</p>
            </div>`



 const priorityBtn = div.querySelector('.priorityBtn')
 const card = div.querySelector('.macrad')
 const btnimge = div.querySelector('.btnimge')
if(ddata.priority === 'high'){
priorityBtn.classList.add('bg-red-50','text-red-600')

}

if(ddata.priority === 'medium'){
priorityBtn.classList.add('bg-yellow-200','text-yellow-600')

}

if(ddata.priority === 'low'){
priorityBtn.classList.add('bg-green-200','text-black')
priorityBtn.classList.remove('text-red')

}
const labesbtnt = document.querySelector('.tlabesbtn')
        if(ddata.status === 'open'){
         
         card.classList.add('border-t-5', 'border-green-500')
          btnimge.innerHTML = `<img src="assets/Open-Status.png" alt="">`
          openbtnSection.append(div.cloneNode(true))
      }
      if(ddata.status === 'closed'){
      
       card.classList.add('border-t-5', 'border-blue-500')
        btnimge.innerHTML = ` <img src="assets/Closed- Status .png" alt="">`
         closebtnSection.append(div.cloneNode(true))
      }
      
       allissuSection.append(div)
      
    }
    
  
}
 
 const allbunt = document.getElementById('allbtn')
 const closebten = document.getElementById('closebtn')
  const opentbten = document.getElementById('openbtn')
  const closebtnSection = document.getElementById('closeContiner')
   const openbtnSection = document.getElementById('openContiner')
   const conutProblem = document.getElementById('porbCount')
   

 const allbtnDisply = () =>{
    opentbten.classList.remove('btn-active')
    closebten.classList.remove('btn-active')
     allbunt.classList.add('btn-primary')
      openbtnSection.classList.add('hidden')
       closebtnSection.classList.add('hidden')
       conutProblem.innerText = '50'
       allissuSection.classList.remove('hidden')
 }
const openbtndisply = () =>{
   
   opentbten.classList.add('btn-active')
//    closebtnSection.classList.add('hidden')
    openbtnSection.classList.remove('hidden')
    closebten.classList.remove('btn-active')
   allbunt.classList.remove('btn-primary')
   allissuSection.classList.add('hidden')
     conutProblem.innerText = '44'
      if(ddata.status === 'closed'){
           ddata.div.classList.add('hidden')
        }
}
const closeDisply = () =>{
    openbtnSection.classList.add('hidden')
    closebtnSection.classList.remove('hidden')
    opentbten.classList.remove('btn-active')
    closebten.classList.add('btn-active')
    allbunt.classList.remove('btn-active')
     allbunt.classList.remove('btn-primary')
     allissuSection.classList.add('hidden')
     conutProblem.innerText = '6'
    
}
 
// const openModele = ( tatile, stase, open, teime, bag, help, dec) =>{
   
//     modele.showModal()

//     const modeldiv = document.getElementById('modetlbox')
//     //  console.log(stase, open, teime, bag, help, dec );
//     modeldiv.innerHTML = ` <div> 
//     <h2 class="text-3xl font-bold">${tatile}
//     </h2>
//     <div class="flex gap-4 mt-4">
//         <div class="stasebtn  px-3 text-white font-bold py-1 rounded-3xl"><button>${stase}</button></div>
//         <div><p>${open}</p></div>
//         <div>${teime}</div>
//     </div>
//     <div class="flex mt-5 gap-4">
//         <div class="bg-red-200 px-4 text-red-500 font-bold py-1 rounded-3xl"><button>${bag}</button></div>
//         <div class="bg-yellow-100 px-4 text-yellow-500 font-bold py-1 rounded-3xl"><button>${help}</button></div>
//     </div>
//     <div class="my-8"><p>${dec}</p></div>
//     <div class="flex justify-between bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
//         <div >
//             <p>Assignee:</p>
//             <h2 class="font-bold ">${open}</h2>
//         </div>
//         <div class="">
//             <p>Priority:</p>
//             <button class="downstase  px-4 text-white font-bold py-1 rounded-3xl uppercase">${stase}</button>
//         </div>
//     </div>
//    </div>
//     `
//      const stae = modeldiv.querySelector('.stasebtn')
//      if(stase === 'open'){
    //     stae.classList.add('bg-green-600')
    //  }
    //  else{
    //     stae.classList.add('bg-red-600')  
    //  }

//      const dowmster = modeldiv.querySelector('.downstase')
//      if(stase === 'open'){
//         dowmster.classList.add('bg-green-600')
//      }
//      else{
//         dowmster.classList.add('bg-red-600')  
//      }
// }

const mrderl = (id) =>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
fetch(url)
.then((revs)=> revs.json())
.then((atdat)=> moderle(atdat.data))

}
const modeldiv = document.getElementById('modetlbox')
const moderle = (idt) =>{
 modele.showModal()
 const modeldiv = document.getElementById('modetlbox')
 modeldiv.innerHTML = `<div> 
    <h2 class="text-3xl font-bold ">${idt.title}
    </h2>
    <div class="flex gap-4 mt-4">
        <div class="stasebtn  px-3 text-white font-bold py-1 rounded-3xl "><button class= 'uppercase'>${idt.status}</button></div>
        <div><p>${idt.assignee}</p></div>
        <div>${idt.createdAt}</div>
    </div>
    <div class="flex mt-5 gap-4">
        <div class=" lebelbtn bg-red-200 px-4 text-red-500 font-bold py-1 rounded-3xl"><button class= 'uppercase'>${idt.labels[0]}</button></div>
        <div class=" nofontdat bg-yellow-100 px-4 text-yellow-500 font-bold py-1 rounded-3xl "><button class= 'uppercase'>${idt.labels[1] ? idt.labels[1]: "No Need Data"}</button></div>
    </div>
    <div class="my-8"><p>${idt.description}</p></div>
    <div class="flex justify-between bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
        <div >
            <p>Assignee:</p>
            <h2 class="font-bold ">${idt.assignee}</h2>
        </div>
        <div class="">
            <p>Priority:</p>
            <button class="downstase  px-4 text-white font-bold py-1 rounded-3xl uppercase">${idt.priority}</button>
        </div>
    </div>
   </div>`
    const nodatbtn = document.querySelector('.nofontdat')
   const statesbtn = document.querySelector('.stasebtn')
   const puirytu = document.querySelector('.downstase')
   const labelbtn = document.querySelector('.lebelbtn')
 
   if(idt.status === 'open'){
        statesbtn.classList.add('bg-green-600')
     }
     else{
        statesbtn.classList.add('bg-red-600')  
     }
   if(idt.priority === 'high'){
    puirytu.classList.add('bg-red-600')
   }
   if(idt.priority === 'medium'){
    puirytu.classList.add('bg-yellow-600')
   }
   if(idt.priority === 'low'){
    puirytu.classList.add('bg-green-600')
   }
     if(!idt.labels[1]){
    nodatbtn.classList.add('hidden')
    labelbtn.classList.add('bg-green-100','text-green-500')
    labelbtn.classList.remove('bg-red-200', 'text-red-500')
   }
   
}
const searchIssue = () => {

 const value = document.getElementById('searchInput').value

 const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`

 fetch(url)
 .then(res => res.json())
 .then(data => {
     const openbtnSection = document.getElementById('openContiner')
    const closebtnSection = document.getElementById('closeContiner')
    const section = document.getElementById("allDataSection")
    section.innerHTML = ""
    openbtnSection.innerHTML= ''
    closebtnSection.innerHTML = ''
   displayScerchdat(data.data)
 })
}
const displayScerchdat = (disdata) =>{
    for(let shwdatat of disdata){
       const closebtnSection = document.getElementById('closeContiner')
       const divtr = document.createElement('div')
        divtr.innerHTML = `<div onclick="mrderl('${shwdatat.id}')" class="macrad bg-white shadow-lg p-4 rounded-lg h-ful border-">
                <div class="flex justify-between">
                    <button id = 'hibtn' class=" priorityBtn px-5 py-1 font-bold rounded-4xl uppercase">${shwdatat.priority}</button>
                    
                    <div class = "btnimge"> </div>
                </div>
                <h2 class="text-xl font-bold ">${shwdatat.title}</h2>
                 <p class="text-gray-400 my-2 line-clamp-2">${shwdatat.description}</p>
                <div class="flex gap-2">
                    <button class="bg-red-200 px-2  text-red-600 rounded-sm uppercase">${shwdatat.labels[0]}</button>
                    <button class="bg-yellow-200 px-2 font-bold text-yellow-600 rounded-sm uppercase">${shwdatat.labels[1]}</button>
                </div>
                <hr class="mt-4 mb-5">
                <p>${shwdatat.assignee}</p>
                <p>${shwdatat.createdAt}</p>
            </div>`
const priorityBtn = divtr.querySelector('.priorityBtn')
 const card = divtr.querySelector('.macrad')
 const btnimge = divtr.querySelector('.btnimge')
if(shwdatat.priority === 'high'){
priorityBtn.classList.add('bg-red-50','text-red-600')

}

if(shwdatat.priority === 'medium'){
priorityBtn.classList.add('bg-yellow-200','text-yellow-600')

}

if(shwdatat.priority === 'low'){
priorityBtn.classList.add('bg-green-200','text-black')
priorityBtn.classList.remove('text-red')

}
if(shwdatat.status === 'open'){
 card.classList.add('border-t-5', 'border-green-500')
          btnimge.innerHTML = `<img src="assets/Open-Status.png" alt="">`
}
if(shwdatat.status === 'closed'){
      
       card.classList.add('border-t-5', 'border-blue-500')
        btnimge.innerHTML = ` <img src="assets/Closed- Status .png" alt="">`
      }
             allissuSection.append(divtr)
             
    }  
}
