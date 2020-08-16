let heldValue =null;
let heldOperation =null;
let nextValue = null;

function showValue(location , value){
    if (value === null){
        $(location).text('')
    }else{
        $(location).text( Number(value))
    }}
    function updateDisplay(){
        showValue('.held-value' , heldValue)
        showValue('.next-value' , nextValue)
    }
    function add(x, y){
       return Number(x) + Number(y);
    }
    function sub(x , y){
        return Number( x ) - Number( y );
   }
   function mult(x , y){
       return Number( x ) * Number( y );
   }
   function div(x , y){
       return Number(x) / Number( y );
   }
   updateDisplay()
    
    $('.add').click(function(){
        console.log('hey')
        setHeldOperation(add)
        $('.next-operation').text('+')
        updateDisplay()
    })
    $('.subtract').click(function(){
        setHeldOperation(sub)
     $('.next-operation').text('-')
        updateDisplay()
    })
    $('.multiply').click(function(){
        setHeldOperation(mult)
     $('.next-operation').text('X')            
        updateDisplay()
    })
    $('.divide').click(function(){
        setHeldOperation(div)
     $('.next-operation').text('/')        
        updateDisplay()
    })
    $('.equals').click(function(){
        setHeldOperation(null)
        $('.next-operation').text(null)
        updateDisplay()
    })

    $('.clear-all').click(function(){
        clearALL()
        $('.next-operation').text(null)
        updateDisplay()
    })
    $('.clear-entry').click(function(){
        clearEntry()
    })
    $('.digits button').click(function(){
        let buttonText = $(this).text()
        if (nextValue === null){
            nextValue = ''
        }
        nextValue = nextValue + buttonText
        updateDisplay()
    })



    function clearALL(){
        heldValue = null,
        heldOperation = null,
        nextValue = null
       
        updateDisplay()
    }
    function clearEntry(){
        nextValue = null
        updateDisplay()
    }
function setHeldOperation(operation){
    if (heldOperation !== null) {
    heldValue = heldOperation(heldValue , nextValue);
    } else if (nextValue !== null) {
        heldValue = nextValue
}}