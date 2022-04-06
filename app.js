$('ul').on('click','li',function(){
        $(this).toggleClass('completed');
})
$('input[type="text"]').keypress(function(event){
    if(event.which===13){
        const todoText=$(this).val();
        const todo=`<li><span><i class="fa-solid fa-trash-can"></i></span> ${todoText}</li>`;
        $('ul').append(todo);
        $('input').val("");
    }
})
$('ul').on('click','span',function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    })
})
$('#plus').click(function(){
    $('input[type="text"]').fadeToggle();
})