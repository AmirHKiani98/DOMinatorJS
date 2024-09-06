import $ from "jquery";
var changes = {"tags":[], "classes":[]} // Tags-> id of the tag, classes-> {id of the tag, class name}
function addBorder(target) {
    $('[data-target-id-border-dominatorjs]').on("click", function(e){
        var targetItem = $("#" + $(this).data("target-id-border-dominatorjs"));
        targetItem.addClass("relative z-40");
        targetItem.parent().append(`<div class='absolute border-10 z-30' style='width:${targetItem.width()}px; height:${targetItem.height()}px'><div>`)
        targetItem.css("border", "1px solid red");
    });
    
}

function border(size){
    $('body').append("<div class='w-full h-full absolute backdrop-blur-lg bg-white/30'><div>")
}

export {addBorder}