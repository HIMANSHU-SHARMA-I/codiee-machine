

document.getElementById('showopt').addEventListener("click",(event)=>{
    let numberOfHeading =document.getElementById('ask')
    if(numberOfHeading.value == parseInt(numberOfHeading.value))
    {
      showall(numberOfHeading.value)

    }else
    {
       document.getElementsByClassName('alert-danger')[0].innerText="Fraction Numer are not allowed, Please Insert integer ..."
       document.getElementsByClassName('alert-danger')[0].style.display="block"
       
    }

    //for hiding the alert box.......
    document.getElementById('ask').addEventListener('focus',()=>{
        document.getElementsByClassName('alert-danger')[0].style.display="none"
    })
})

// now we will show the usert to fill the title and and the paragraphs

function showall(param)
{
    var showoptions =document.getElementsByClassName('askform')[0]

    showoptions.innerHTML=""
    for(var i=0;i<param;i++)
    {
        showoptions.innerHTML +=`<hr>

        <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault03">Title</label>
              <input type="text" class="form-control" id="validationDefault03" required>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault04">Size</label>
              <select class="custom-select" id="validationDefault04" required>
                <!-- <option selected disabled value="">Choose...</option> -->
                <option>h1</option>
                <option>h2</option>
                <option>h3</option>
                <option>h4</option>
                <option>h5</option>
                <option>h6</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault05">color</label>
              <input type="text" class="form-control" id="validationDefault05" required>
            </div>
          </div>
          
        `
    }
   
}