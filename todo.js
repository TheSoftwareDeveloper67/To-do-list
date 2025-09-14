<<<<<<< HEAD
function addToList(event) {
    event.preventDefault();

    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task !== "") {
        // Create list item
        let li = document.createElement("li");

        // Create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Strike-through when checked
        checkbox.addEventListener("change", function() {
            li.style.textDecoration = this.checked ? "line-through" : "none";
        });

        // Add task text
        let text = document.createTextNode(task);

        // Append checkbox + text to li
        li.appendChild(checkbox);
        li.appendChild(text);

        // Append li to list
        document.getElementById("todoList").appendChild(li);

        input.value = "";
    }else {
        alert("Please enter a task.");
    }
}

// Remove oldest task
document.getElementById("rmbutton").addEventListener("click", function() {
    let ul = document.getElementById("todoList");
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
});
document.getElementById("rmoldbutton").addEventListener("click", function() {
    let ul = document.getElementById("todoList");
    if (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

// Remove all tasks
document.getElementById("rmbuttonall").addEventListener("click", function() {
    document.getElementById("todoList").innerHTML = "";
});
document.getElementById("title").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stop form submit

        let titleInput = document.getElementById("title").value.trim();

        if (titleInput === "") {
            alert("Enter a title");
        } else {
            document.getElementById("h1").textContent = titleInput;
            document.getElementById("title").value = ""; // clear input
        }
    }
});
=======
function addToList(event) {
    event.preventDefault();

    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task !== "") {
        // Create list item
        let li = document.createElement("li");

        // Create checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Strike-through when checked
        checkbox.addEventListener("change", function() {
            li.style.textDecoration = this.checked ? "line-through" : "none";
        });

        // Add task text
        let text = document.createTextNode(task);

        // Append checkbox + text to li
        li.appendChild(checkbox);
        li.appendChild(text);

        // Append li to list
        document.getElementById("todoList").appendChild(li);

        input.value = "";
    }else {
        alert("Please enter a task.");
    }
}

// Remove oldest task
document.getElementById("rmbutton").addEventListener("click", function() {
    let ul = document.getElementById("todoList");
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
});
document.getElementById("rmoldbutton").addEventListener("click", function() {
    let ul = document.getElementById("todoList");
    if (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});

// Remove all tasks
document.getElementById("rmbuttonall").addEventListener("click", function() {
    document.getElementById("todoList").innerHTML = "";
});
document.getElementById("title").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // stop form submit

        let titleInput = document.getElementById("title").value.trim();

        if (titleInput === "") {
            alert("Enter a title");
        } else {
            document.getElementById("h1").textContent = titleInput;
            document.getElementById("title").value = ""; // clear input
        }
    }
});
>>>>>>> 9c7840a79d96152eb186fc62bbef282fa530d1d5
