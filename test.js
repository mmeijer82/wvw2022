fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            
            var mainContainer = document.getElementById("mydata");
            for (var i = 0; i < data.destinations.length; i++) {
                
                var mainContainer = document.getElementById("mydata");
                var container = document.createElement("div");
                container.setAttribute("id", "dest");
                var title = document.createElement("h1");
                var img = document.createElement("img");
                title.innerHTML = data.destinations[i].name;
                img.src = data.destinations[i].images.png;
                mainContainer.appendChild(container).appendChild(title);
                mainContainer.appendChild(img);
                
            }
        }