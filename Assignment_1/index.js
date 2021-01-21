
 
function replace(){
        entered_text = document.getElementById("etext").value;
        replacable_text = document.getElementById("replace_text").value;
        to_replace_text = document.getElementById("to_replace_text").value;

        change = entered_text.replace(replacable_text,to_replace_text);
        alert("Changed text is : "+ change);
}