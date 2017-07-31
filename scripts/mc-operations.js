/*
    Sets the operation to add or substract.
    Accepts strings 'add' or 'substract'.
*/
function SetOperation(operation)
{
    if (operation == 'add')
    {
        activeOperation = "add";
        AddActive();
    }
    if (operation == "substract")
    {
        activeOperation = "substract";
        SubstractActive();
    }
}

function ToggleOperation()
{
    //console.log('toggle');
    
    if (activeOperation == "substract")
    {
        activeOperation = "add";
        AddActive();
    }
    else if (activeOperation == "add")
    {
        activeOperation = "substract";
        SubstractActive();
    }
}


function AddActive()
{
    console.log('Adding');
    $('#mc-add-key').text('add_circle');
    $('#mc-substract-key').text('remove');
    
    $('#mc-vertical').removeClass('mc-anim-rotate-180-left mc-anim-transition mc-anim-color-red-400');
    $('#mc-horizontal').removeClass('mc-anim-rotate-180-left mc-anim-transition mc-anim-color-red-400');
    
    $('#mc-vertical').addClass('mc-anim-rotate-90-right mc-anim-transition mc-anim-color-green-400');
    $('#mc-horizontal').addClass('mc-anim-rotate-180-right mc-anim-transition mc-anim-color-green-400');
}

function SubstractActive()
{
    console.log('Substracting');
    $('#mc-add-key').text('add');
    $('#mc-substract-key').text('remove_circle');
    
    $('#mc-vertical').removeClass('mc-anim-rotate-90-right mc-anim-transition mc-anim-color-green-400');
    $('#mc-horizontal').removeClass('mc-anim-rotate-180-right mc-anim-transition mc-anim-color-green-400');
    
    $('#mc-vertical').addClass('mc-anim-rotate-180-left mc-anim-transition mc-anim-color-red-400');
    $('#mc-horizontal').addClass('mc-anim-rotate-180-left mc-anim-transition mc-anim-color-red-400');
}

/*
    Undo last operation using the last element of the stack.
*/
function Undo()
{
    console.log('UNDO');
    if (undoTrack == 0)
    {
        console.log('first undo');
        // No undo has been done.
        undoTrack = 1; //Set undotrack to one
    }
    else
    {
        undoTrack += 1; //undo from the last one
    }
    console.log('undoTrack = ' + undoTrack);
    console.log('Last operation was : ' + stack[stack.length - undoTrack]);

    if (undoTrack > stack.length - 1)
    {
        return;
    }

    trackedTotal = trackedTotal + (stack[stack.length - undoTrack] * -1);
    Update(trackedTotal);
}

function Clear()
{
    trackedTotal = 0;
    Update(trackedTotal);
}


