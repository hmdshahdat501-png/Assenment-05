// const allbtn = document.getElementById('allbtn')


// const btnClick = () =>{
//     allbtn.classList.remove('btn-active')
    
// }
// const apibtn = [
//     {id: 2, name: 'Open', status: "open"},
//     {id: 3, name: 'Closed', status: "closed"}
// ]
// const btncontiner = document.getElementById('btnContiner')
// for(let btns of apibtn){
//    const btnDiv = document.createElement('div')
//     btnDiv.innerHTML = ` <button Onclick = "buntissue(${btns.status})" class="btn btn-outline btn-primary">${btns.name}</button>`
//     btncontiner.append(btnDiv)
// }
// const buntissue = (issue) =>{
//  const url = `https://phi-lab-server.vercel.app/api/v1/lab/${issue}`
//  fetch(url)
// }
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
       div.innerHTML = `<div  class="bg-white shadow-lg p-4 rounded-lg h-full">
                <div onclick="openModele('${ddata.title}','${ddata.status}', '${ddata.assignee}', '${ddata.createdAt}' , '${ddata.labels[0]}', '${ddata.labels[1]}', '${ddata.description}')" class="flex justify-between">
                    <button id = 'hibtn' class=" priorityBtn px-5 py-1 font-bold rounded-4xl uppercase">${ddata.priority}</button>
                    <img src="assets/Open-Status.png" alt="">
                </div>
                <h2 class="text-xl font-bold ">${ddata.title}</h2>
                 <p class="text-gray-400 my-2 line-clamp-2">${ddata.description}</p>
                <div class="flex gap-2">
                    <button class="bg-red-200 px-2  text-red-600 rounded-sm uppercase">${ddata.labels[0]}</button>
                    <button class="bg-yellow-200 px-2 font-bold text-yellow-600 rounded-sm uppercase">${ddata.labels[1]}</button>
                </div>
                <hr class="mt-4 mb-5">
                <p>${ddata.assignee}</p>
                <p>${ddata.createdAt}</p>
            </div>`
            const priorityBtn = div.querySelector('.priorityBtn')

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

allissuSection.append(div)
            allissuSection.append(div)

      if(ddata.status === 'open'){
         openbtnSection.append(div)
      }
      if(ddata.status === 'closed'){
       closebtnSection.append(div)
      }
      
      
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
      openbtnSection.classList.remove('hidden')
       closebtnSection.classList.remove('hidden')
       conutProblem.innerText = '50'
       allissuSection.classList.remove('hidden')
 }
const openbtndisply = () =>{
   
   opentbten.classList.add('btn-active')
   closebtnSection.classList.add('hidden')
    openbtnSection.classList.remove('hidden')
    closebten.classList.remove('btn-active')
   allbunt.classList.remove('btn-primary')
   allissuSection.classList.add('hidden')
     conutProblem.innerText = '44'
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
 
const openModele = ( tatile, stase, open, teime, bag, help, dec) =>{
   
    modele.showModal()

    const modeldiv = document.getElementById('modetlbox')
    //  console.log(stase, open, teime, bag, help, dec );
    modeldiv.innerHTML = ` <div> 
    <h2 class="text-3xl font-bold">${tatile}
    </h2>
    <div class="flex gap-4 mt-4">
        <div class="bg-green-600 px-3 text-white font-bold py-1 rounded-3xl"><button>${stase}</button></div>
        <div><p>${open}</p></div>
        <div>${teime}</div>
    </div>
    <div class="flex mt-5 gap-4">
        <div class="bg-red-200 px-4 text-red-500 font-bold py-1 rounded-3xl"><button>${bag}</button></div>
        <div class="bg-yellow-100 px-4 text-yellow-500 font-bold py-1 rounded-3xl"><button>${help}</button></div>
    </div>
    <div class="my-8"><p>${dec}</p></div>
    <div class="flex justify-between bg-gray-200 p-4 m-2 rounded-lg shadow-lg">
        <div >
            <p>Assignee:</p>
            <h2 class="font-bold ">${open}</h2>
        </div>
        <div class="">
            <p>Priority:</p>
            <button class="bg-red-600 px-4 text-white font-bold py-1 rounded-3xl uppercase">${staseg}</button>
        </div>
    </div>
   </div>
    `
    
}

