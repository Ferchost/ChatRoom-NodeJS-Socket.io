var socket = io.connect('/*Your IP Adrres Here*/:6677',{'forceNew':true});

socket.on('messages', function(data){
  console.log(data);
  render(data);
});

function render(data){
  var html = data.map(function(message, index){
    return (`
        <div class="message">
          <strong>${message.nickname}</strong> dice:
          <p>${message.text}</p>
        </div>
      `);
  }).join(' ');
  var divM = document.getElementById('messages');
divM.innerHTML = html;
divM.scrollTop = divM.scrollHeight;
}

function addMessage(e){
  var message = {
    nickname: document.getElementById('nickname').value,
    text: document.getElementById('text').value
  };

  document.getElementById('nickname').style.display = 'none';
  socket.emit('add-message', message);

  return false;
}
