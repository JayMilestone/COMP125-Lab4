(function (content)
{
    function ContactContent()
    {
        //document.getElementsByClassName("card-title")[0].textContent = "Contact You";
        
        //Created button
        let cancelButton = document.createElement("button");
        //Set attributes of buttons
        cancelButton.setAttribute("class", "btn btn-danger");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event)
        {
            //prevents submit behaviour originally made and changes it
            event.preventDefault();
            window.open("index.html", "_parent");
        });
        // Adds to end of button created
        document.forms[0].appendChild(cancelButton);
    }
    content.ContactContent = ContactContent;
})(content || (content = {}));