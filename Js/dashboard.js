
let allMessages = JSON.parse(localStorage.getItem('messages')) || [];
// let allMessagesArray = JSON.parse(allMessages);
let messageRow = document.getElementById('message-row');

console.log("All messages",allMessages)

// Function to populate messages in the table

function onViewClick(messageIndex) {
    let url = `./dashboard-single-message.html?index=${messageIndex}`;
    window.location.href = url;
}
function populateMessagesTable() {
    let tableBody = document.getElementById('messages-table-body') ;

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Iterate over each message and create table row
    allMessages.forEach(message => {
        let row = document.createElement('tr');

        // Create table cells for each property in the message object
        Object.values(message).forEach(value => {
           
            let cell = document.createElement('td');
            cell.innerHTML = `<p class="small-text one-liner">${value}</p>`;
            row.appendChild(cell);
        });

        // Create View and Reply links
        // let viewLinkCell = document.createElement('td');
        // viewLinkCell.innerHTML = `<a href="./dashboard-single-message.html" class="small-text rounded-text text-blue title category-tag">View</a>`;
        // row.appendChild(viewLinkCell);

        let viewLinkCell = document.createElement('td');
        let viewLink = document.createElement('a');
        viewLink.href = '#'; // Prevent default link behavior
        viewLink.textContent = 'View';
        viewLink.classList.add('small-text', 'rounded-text', 'text-blue', 'title', 'category-tag');
        // Add click event listener to "View" link
        viewLink.addEventListener('click', () => onViewClick(index));
        viewLinkCell.appendChild(viewLink);
        row.appendChild(viewLinkCell);

        let replyCell = document.createElement('td');
        replyCell.innerHTML = `<p class="small-text rounded-text text-yellow title category-tag">Reply</p>`;
        row.appendChild(replyCell);

        // Append row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table initially
populateMessagesTable();




const deleteAllmessages = ()=>{
    
    localStorage.removeItem("messages");
    alert('All messages deleted')
}

// Blogs Integration

let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
console.log("All blogs",allBlogs)

let blogRow = document.getElementById('blog-row');
