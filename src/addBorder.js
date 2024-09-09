import $ from "jquery";

function addBorder(target, offset=30) {
    // Function to handle button click
    $('[data-target-id-border-dominatorjs]').on("click", function (e) {
        
        if($(this).data("target-id-border-dominatorjs") === undefined || $(this).data("target-id-border-dominatorjs") === "") {
            return;
        }
        e.stopPropagation(); // Prevent the click from bubbling up and triggering a blur on the body
        var targetItem = $("#" + $(this).data("target-id-border-dominatorjs"));

        // Remove border and focused class from any previously targeted item
        $(".focused").removeClass("focused").css("border", "none");
        $(".hole").remove(); // Remove the previous hole
        $(".backdrop").remove(); // Remove the previous backdrop

        // Add a full-screen div that blocks interaction with everything beneath it
        $('body').append(`
            <div class='absolute inset-0 backdrop z-30' style='pointer-events: auto; background: rgba(0, 0, 0, 0.5);'></div>
        `);

        // Add the "hole" effect to the newly targeted item with a 5px offset
        targetItem.addClass("relative z-40 focused");
        targetItem.css({
            "border": "1px solid red",
            "pointer-events": "none" // Prevent interaction with the target item itself
        });

        // Calculate the dimensions with 5px offset ('offset'px total added)
        var holeWidth = targetItem.outerWidth() + offset; // Add offsetpx to width (5px each side)
        var holeHeight = targetItem.outerHeight() + offset; // Add offsetpx to height (5px each side)
        var holeTop = targetItem.position().top - offset/2; // Move the hole 'offset/2'px up
        var holeLeft = targetItem.position().left - offset/2; // Move the hole 'offset/2'px left

        // Append the hole div around the target
        $('body').append(`
            <div class='absolute z-50 hole' style='width:${holeWidth}px; height:${holeHeight}px; top:${holeTop}px; left:${holeLeft}px; pointer-events: auto;'></div>
        `);
    });

    // Click anywhere outside of the targeted item to remove focus
    $(document).on("click", function () {
        $(".focused").removeClass("focused").css({
            "border": "none",
            "pointer-events": "auto" // Restore interaction after removing focus
        });
        $(".hole").remove(); // Remove the hole div
        $(".backdrop").remove(); // Remove the backdrop effect
    });

    // Prevent click inside the target from blurring
    $(target).on("click", function (e) {
        e.stopPropagation();
    });
}

export { addBorder };
