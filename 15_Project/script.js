const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const add = document.createElement('div')
    add.textContent = "How are you buddy";
    add.className ='box'
    console.log("Button clicked")
    document.body.appendChild(add);
    add.addEventListener('click',()=>{
        add.remove();
     });
    
});
