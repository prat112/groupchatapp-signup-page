const chatList = document.getElementById('chatList');
const messageInput = document.getElementById('Dataform');

messageInput.addEventListener('submit', formSubmit);

async function formSubmit(e) {
  try {
    e.preventDefault();
    const messageData = e.target.message.value;
    const token = localStorage.getItem('token');
    const obj = {
      messageData
    };

    const response = await axios.post("http://localhost:3100/message/add-message", obj, {
      headers: { "Authorization": token }
    });

    // Check the response structure and access the appropriate data
    const newMessageData = response.data.newMessageData; // Adjust this line based on your server response

    showExp(newMessageData);
  } catch (err) {
    console.error(err);
    chatList.innerHTML += `<div style="color: red;">${err.message}</div>`;
  }
}
